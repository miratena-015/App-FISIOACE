import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";

export default function MobilidadeExercise({ route, navigation }) {
  const { exercises = [], index = 0 } = route.params ?? {};
  const [currentIndex, setCurrentIndex] = useState(index);
  const exercise = exercises[currentIndex];

  const [running, setRunning] = useState(false);
  const [remaining, setRemaining] = useState(
    exercise?.type === "time" ? exercise.value : 0
  );
  const intervalRef = useRef(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setRunning(false);
    setFinished(false);
    setRemaining(exercise?.type === "time" ? exercise.value : 0);
    clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, exercise?.value, exercise?.type]);

  useEffect(() => {
    if (running && exercise?.type === "time") {
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
    }
    return () => clearInterval(intervalRef.current);
  }, [running, exercise?.type]);

  function handleStartTimer() {
    if (exercise?.type !== "time") return;
    setRunning(true);
    setFinished(false);
  }

  function handleCompleteReps() {
    goNext();
  }

  function goNext() {
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

  const raw = exercise.image ?? exercise.imagem ?? null;
  const source = typeof raw === "number" ? raw : raw ? { uri: raw } : null;
  const imageKey = `img-${currentIndex}-${
    typeof source === "object" ? source.uri : String(source)
  }`;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{exercise.nome}</Text>

      {source ? (
        <Image
          key={imageKey}
          source={source}
          style={styles.image}
          contentFit="cover"
          cachePolicy="none"
          transition={0}
        />
      ) : (
        <View
          style={[
            styles.image,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <Text style={{ color: "#666" }}>Sem imagem</Text>
        </View>
      )}

      <Text style={styles.desc}>{exercise.desc}</Text>

      <View style={styles.footer}>
        {exercise.type === "reps" ? (
          <>
            {/* 👇 AQUI foi adicionado “(cada lado)” */}
            <Text style={styles.info}>
              {exercise.value} repetições (cada lado)
            </Text>
            <Button
              mode="contained"
              onPress={handleCompleteReps}
              style={styles.actionButton}
              labelStyle={styles.actionLabel}
            >
              Concluído
            </Button>
          </>
        ) : (
          <>
            <Text style={styles.info}>{exercise.value} segundos</Text>

            {!running && !finished && (
              <Button
                mode="contained"
                onPress={handleStartTimer}
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
              <>
                <View style={styles.timerBox}>
                  <Text style={styles.timerText}>00:00</Text>
                </View>
                <Button
                  mode="contained"
                  onPress={goNext}
                  style={styles.actionButton}
                  labelStyle={styles.actionLabel}
                >
                  Próximo
                </Button>
              </>
            )}
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f1f2", padding: 18 },
  titulo: {
    fontSize: 22,
    color: "#1843a9",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 450,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: "#ddd",
    overflow: "hidden",
  },
  desc: { fontSize: 16, color: "#333", lineHeight: 22, marginBottom: 14 },
  footer: { alignItems: "center" },
  info: { fontSize: 16, color: "#666", marginBottom: 8 },
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
  timerText: {
    fontSize: 36,
    fontWeight: "900",
    color: "#1843a9",
    textAlign: "center",
  },
});
