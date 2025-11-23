import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-paper";
import { Image } from "expo-image";

const AQUECIMENTO = [
  {
    id: "1",
    nome: "Deslocamentos laterais",
    type: "time",
    series: 2,
    work: 30,
    rest: 10,
    image: require("../assets/aquecimento/deslocamento.gif"),
    desc: "Corra em ritmo leve lateralmente por toda a quadra, alternando a direção a cada 30 segundos.",
  },
  {
    id: "2",
    nome: "Elevação de joelhos",
    type: "time",
    series: 2,
    work: 30,
    rest: 10,
    image: require("../assets/aquecimento/joelho.gif"),
    desc: "Corra no mesmo lugar elevando bem os joelhos (skipping).",
  },
  {
    id: "3",
    nome: "Polichinelos",
    type: "time",
    series: 2,
    work: 30,
    rest: 10,
    image: require("../assets/aquecimento/poli.gif"),
    desc: "Realize polichinelos contínuos a um ritmo leve a moderado.",
  },
  {
    id: "4",
    nome: "Mobilidade articular",
    type: "time",
    segments: [
      { label: "Perna direita", duration: 30, kind: "work" },
      { label: "Descanso", duration: 5, kind: "rest" },
      { label: "Perna esquerda", duration: 30, kind: "work" },
      { label: "Descanso", duration: 5, kind: "rest" },
      { label: "Braços", duration: 30, kind: "work" },
    ],
    image: require("../assets/aquecimento/mobilidade.gif"),
    desc: "Faça rotações lentas dos ombros, quadril, joelhos e tornozelos em ambos os sentidos.",
  },
  {
    id: "5",
    nome: "Passe no lugar",
    type: "time",
    series: 2,
    work: 30,
    rest: 10,
    image: require("../assets/aquecimento/passe.gif"),
    desc: "Lance a bola acima da cabeça e devolva em passe alto, mantendo-se parado.",
  },
  {
    id: "6",
    nome: "Passe em movimento",
    type: "time",
    series: 2,
    work: 60,
    rest: 10,
    image: require("../assets/aquecimento/passe2.gif"),
    desc: "Caminhe de um lado ao outro da quadra fazendo o passe alto enquanto se desloca.",
  },
  {
    id: "7",
    nome: "Manchete no lugar",
    type: "time",
    series: 2,
    work: 30,
    rest: 10,
    image: require("../assets/aquecimento/manchete.gif"),
    desc: "Lance a bola acima da cabeça e devolva com a manchete, mantendo-se parado e controlando a bola.",
  },
  {
    id: "8",
    nome: "Passe com precisão (dupla)",
    type: "time",
    series: 2,
    work: 60,
    rest: 10,
    image: require("../assets/aquecimento/passe3.gif"),
    desc: "Em duplas, façam passes alternados sem deixar a bola cair.",
  },
  {
    id: "9",
    nome: "Ataque na rede (dupla)",
    type: "time",
    series: 2,
    work: 60,
    rest: 10,
    image: require("../assets/aquecimento/ataque.gif"),
    desc: "Um jogador lança a bola e o outro realiza o ataque em direção ao parceiro.",
  },
];

export default function AquecimentoList({ navigation }) {
  const renderItem = ({ item }) => {
    const series = item.series ? `${item.series}x` : "";
    const tempo = item.work ? `${item.work}s` : "";
    const info = series || tempo ? `${series} ${tempo}`.trim() : "";

    return (
      <View style={styles.card}>
        <View style={styles.imageBox}>
          <Image
            source={item.image}
            style={styles.image}
            contentFit="cover"
            cachePolicy="none"
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.nome}</Text>
          {info ? (
            <Text style={styles.subtitle}>{info}</Text>
          ) : (
            <Text style={styles.subtitle}>Tempo variável</Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={AQUECIMENTO}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        removeClippedSubviews={false}
      />

      <View style={styles.footer}>
        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate("AquecimentoExercise", {
              exercises: AQUECIMENTO,
              index: 0,
            })
          }
          style={styles.startButton}
          labelStyle={styles.startLabel}
        >
          Iniciar sessão
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f1f2", padding: 14 },
  card: {
    width: "100%",
    height: 120,
    borderWidth: 3,
    borderColor: "#e8bb44",
    borderRadius: 12,
    backgroundColor: "#fff",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  imageBox: {
    width: 120,
    height: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  image: { width: "100%", height: "100%" },
  cardContent: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  title: { color: "#1843a9", fontSize: 18, fontWeight: "700" },
  subtitle: { color: "#666", fontSize: 14 },
  footer: { paddingVertical: 12, alignItems: "center" },
  startButton: { width: "60%", backgroundColor: "#1843a9", borderRadius: 10 },
  startLabel: { color: "#e8bb44", fontWeight: "900", fontSize: 16 },
});
