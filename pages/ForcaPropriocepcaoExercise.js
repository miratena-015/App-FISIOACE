import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Image as RNImage,
} from "react-native";
import { Button } from "react-native-paper";
import { Image } from "expo-image";

/** cria sequência timed (series + work + optional rest) — só para type === "time" com series */
function buildTimedSequence(ex) {
  if (!ex || ex.type !== "time") return [];

  // aceita ex.segments (caso você use)
  if (Array.isArray(ex.segments) && ex.segments.length) {
    return ex.segments.map((s, i) => ({
      label: s.label ?? `Segmento ${i + 1}`,
      duration: Number(s.duration) || 0,
      kind: s.kind ?? "work",
    }));
  }

  if (Number.isFinite(ex.series)) {
    const seq = [];
    const series = Math.max(1, Math.floor(ex.series));
    const work = Number.isFinite(ex.work)
      ? Math.max(0, Math.floor(ex.work))
      : Math.max(0, Math.floor(ex.value || 0));
    const rest = Number.isFinite(ex.rest)
      ? Math.max(0, Math.floor(ex.rest))
      : 0;
    for (let i = 0; i < series; i++) {
      seq.push({ label: `Série ${i + 1}`, duration: work, kind: "work" });
      if (rest > 0 && i < series - 1)
        seq.push({ label: "Descanso", duration: rest, kind: "rest" });
    }
    return seq;
  }

  // fallback: único segmento com value
  const duration = Number(ex.value) || 0;
  return [{ label: "Exercício", duration, kind: "work" }];
}

export default function ForcaPropriocepcaoExercise({ route, navigation }) {
  const { exercises = [], index = 0 } = route.params ?? {};
  const [currentIndex, setCurrentIndex] = useState(index);
  const exercise = exercises[currentIndex];

  // timed sequence state
  const [seq, setSeq] = useState(() => buildTimedSequence(exercise));
  const seqRef = useRef(seq);

  const [segmentIndex, setSegmentIndex] = useState(0);
  const segmentIndexRef = useRef(segmentIndex);
  const [remaining, setRemaining] = useState((seq[0] && seq[0].duration) || 0);

  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const intervalRef = useRef(null);

  // image aspect ratio detection
  const [imageAspect, setImageAspect] = useState(null);

  // keep refs updated
  useEffect(() => {
    seqRef.current = seq;
  }, [seq]);
  useEffect(() => {
    segmentIndexRef.current = segmentIndex;
  }, [segmentIndex]);

  // when exercise changes rebuild sequence and reset
  useEffect(() => {
    const timed = buildTimedSequence(exercise);
    setSeq(timed);
    seqRef.current = timed;

    setSegmentIndex(0);
    segmentIndexRef.current = 0;

    setRemaining((timed[0] && timed[0].duration) || 0);
    setRunning(false);
    setFinished(false);

    clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, exercise]);

  // ensure remaining synced when segmentIndex changes
  useEffect(() => {
    const s = seqRef.current;
    if (s && s.length > 0 && s[segmentIndex]) {
      setRemaining(s[segmentIndex].duration);
    }
  }, [segmentIndex]);

  // ticker: decrements remaining and advances segments
  useEffect(() => {
    if (!running) return () => {};
    if (!seqRef.current || seqRef.current.length === 0) {
      setRunning(false);
      return () => {};
    }

    intervalRef.current = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          const next = segmentIndexRef.current + 1;
          const s = seqRef.current;
          if (next < s.length) {
            setSegmentIndex(next);
            segmentIndexRef.current = next;
            return s[next].duration;
          } else {
            clearInterval(intervalRef.current);
            setRunning(false);
            setFinished(true);
            return 0;
          }
        }
        return r - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [running]);

  // detect image aspect ratio (works for require(...) and for remote uris)
  useEffect(() => {
    let mounted = true;
    const raw = exercise?.image ?? exercise?.imagem ?? null;
    if (!raw) {
      setImageAspect(null);
      return;
    }

    if (typeof raw === "number") {
      const resolved = RNImage.resolveAssetSource(raw);
      if (mounted && resolved && resolved.width && resolved.height) {
        setImageAspect(resolved.width / resolved.height);
      } else if (mounted) {
        setImageAspect(null);
      }
      return;
    }

    if (raw && raw.uri) {
      RNImage.getSize(
        raw.uri,
        (w, h) => {
          if (mounted) setImageAspect(w / h);
        },
        () => {
          if (mounted) setImageAspect(null);
        }
      );
      return;
    }

    return () => {
      mounted = false;
    };
  }, [exercise]);

  function startTimed() {
    if (!seq || seq.length === 0) return;
    setFinished(false);
    setRunning(true);
  }

  function skipSegment() {
    const next = segmentIndexRef.current + 1;
    const s = seqRef.current;
    if (next < s.length) {
      setSegmentIndex(next);
      segmentIndexRef.current = next;
      setRemaining(s[next].duration);
    } else {
      clearInterval(intervalRef.current);
      setRunning(false);
      setFinished(true);
      setRemaining(0);
    }
  }

  function goNextExercise() {
    clearInterval(intervalRef.current);
    if (currentIndex + 1 < exercises.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      Alert.alert("Sessão finalizada", "Você concluiu todos os exercícios!");
      navigation.goBack();
    }
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  if (!exercise) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Nenhum exercício encontrado</Text>
      </View>
    );
  }

  // suporte para exercise.image (novo padrão) ou exercise.imagem (legacy require)
  const raw = exercise.image ?? exercise.imagem ?? null;
  const source = typeof raw === "number" ? raw : raw ? { uri: raw } : null;
  const imageKey = `forca-img-${currentIndex}-${
    typeof source === "object" ? source.uri : String(source)
  }`;

  const isTimedMode = seq && seq.length > 0;
  const repsSummary = exercise.series
    ? `${exercise.series}× ${exercise.value} repetições${
        exercise.note ? ` • ${exercise.note}` : ""
      }`
    : `${exercise.value} repetições${
        exercise.note ? ` • ${exercise.note}` : ""
      }`;

  const currentSeg = seq[segmentIndex] ?? null;
  const isRest = currentSeg?.kind === "rest";

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.titulo}>{exercise.nome}</Text>

        {/* imagem com aspectRatio dinâmico (fallback 16:9) */}
        {source ? (
          <Image
            key={imageKey}
            source={source}
            style={[
              styles.image,
              imageAspect
                ? { aspectRatio: imageAspect }
                : { aspectRatio: 16 / 9 },
            ]}
            contentFit="contain"
            cachePolicy="none"
            transition={0}
          />
        ) : (
          <View style={[styles.image, styles.noImage]}>
            <Text style={{ color: "#666" }}>Sem imagem</Text>
          </View>
        )}

        <Text style={styles.desc}>{exercise.desc}</Text>

        <View style={styles.footer}>
          {exercise.type === "reps" ? (
            <Text style={styles.info}>{repsSummary}</Text>
          ) : exercise.type === "time" && exercise.series ? (
            <Text style={styles.info}>
              {exercise.series}× {exercise.work ?? exercise.value}s{" "}
              {exercise.note ? `• ${exercise.note}` : ""}
            </Text>
          ) : (
            <Text style={styles.info}>
              {exercise.type === "time"
                ? `${exercise.value}s`
                : `${exercise.value} repetições`}
            </Text>
          )}

          {/* MODO TIMED (work/rest automático) */}
          {exercise.type === "time" && isTimedMode && (
            <>
              <Text style={{ color: "#666", marginBottom: 6 }}>
                {segmentIndex + 1}/{seq.length} • {currentSeg?.label}
              </Text>

              <Text style={isRest ? styles.restLabel : styles.workLabel}>
                {isRest ? "DESCANSO" : "TRABALHO"}
              </Text>

              <Text style={styles.info}>
                {currentSeg?.duration} segundos {isRest ? "• Descanso" : ""}
              </Text>

              {!running && !finished && (
                <Button
                  mode="contained"
                  onPress={startTimed}
                  style={styles.actionButton}
                  labelStyle={styles.actionLabel}
                >
                  Iniciar
                </Button>
              )}

              {running && (
                <>
                  <View
                    style={[
                      styles.timerBox,
                      isRest ? styles.restTimerBox : null,
                    ]}
                  >
                    <Text style={styles.timerText}>
                      {formatTime(remaining)}
                    </Text>
                  </View>

                  <Button
                    mode="outlined"
                    onPress={() => setRunning(false)}
                    style={[styles.actionButton, { marginTop: 6 }]}
                    labelStyle={styles.actionLabel}
                  >
                    Pausar
                  </Button>

                  <Button
                    mode="text"
                    onPress={skipSegment}
                    style={{ marginTop: 6 }}
                  >
                    {isRest ? "Pular descanso" : "Pular segmento"}
                  </Button>
                </>
              )}

              {finished && (
                <>
                  <View style={styles.timerBox}>
                    <Text style={styles.timerText}>00:00</Text>
                  </View>
                  <Button
                    mode="contained"
                    onPress={goNextExercise}
                    style={styles.actionButton}
                    labelStyle={styles.actionLabel}
                  >
                    Próximo exercício
                  </Button>
                </>
              )}
            </>
          )}

          {/* fallback para reps (botão simples) */}
          {!isTimedMode && exercise.type === "reps" && (
            <Button
              mode="contained"
              onPress={goNextExercise}
              style={styles.actionButton}
              labelStyle={styles.actionLabel}
            >
              Concluído
            </Button>
          )}

          {/* fallback para time sem series (único timer) */}
          {!isTimedMode && exercise.type === "time" && !exercise.series && (
            <>
              <Text style={styles.info}>{exercise.value} segundos</Text>

              {!running && !finished && (
                <Button
                  mode="contained"
                  onPress={() => {
                    setRunning(true);
                    setFinished(false);
                    setRemaining(exercise.value);
                    intervalRef.current = setInterval(() => {
                      setRemaining((r) => {
                        if (r <= 1) {
                          clearInterval(intervalRef.current);
                          setRunning(false);
                          setFinished(true);
                          return 0;
                        }
                        return r - 1;
                      });
                    }, 1000);
                  }}
                  style={styles.actionButton}
                  labelStyle={styles.actionLabel}
                >
                  Iniciar
                </Button>
              )}

              {running && (
                <View style={styles.timerBox}>
                  <Text style={styles.timerText}>{formatTime(remaining)}</Text>
                </View>
              )}

              {finished && (
                <Button
                  mode="contained"
                  onPress={goNextExercise}
                  style={styles.actionButton}
                  labelStyle={styles.actionLabel}
                >
                  Próximo
                </Button>
              )}
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f1f2" },
  scrollContent: { padding: 18, paddingBottom: 36 },
  titulo: {
    fontSize: 22,
    color: "#1843a9",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 12,
  },
  image: {
    width: "90%", // controla apenas a largura; altura definida por aspectRatio inline
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: "#ddd",
    alignSelf: "center",
  },
  noImage: { justifyContent: "center", alignItems: "center" },
  desc: { fontSize: 16, color: "#333", lineHeight: 22, marginBottom: 14 },
  footer: { alignItems: "center" },
  info: { fontSize: 16, color: "#666", marginBottom: 8 },
  workLabel: {
    fontSize: 14,
    color: "#1843a9",
    fontWeight: "800",
    marginBottom: 6,
  },
  restLabel: {
    fontSize: 14,
    color: "#b04141",
    fontWeight: "900",
    marginBottom: 6,
  },
  actionButton: {
    width: "60%",
    backgroundColor: "#1843a9",
    borderRadius: 10,
    marginTop: 8,
  },
  actionLabel: { color: "#e8bb44", fontWeight: "900" },
  timerBox: {
    marginVertical: 8,
    padding: 18,
    borderRadius: 12,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#e8bb44",
  },
  restTimerBox: {
    backgroundColor: "#fff6f6",
    borderColor: "#d66b6b",
  },
  timerText: {
    fontSize: 36,
    fontWeight: "900",
    color: "#1843a9",
    textAlign: "center",
  },
});
