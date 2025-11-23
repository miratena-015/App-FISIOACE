import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";

const FORCA = [
  {
    id: "1",
    nome: "Agachamento",
    type: "reps",
    series: 3,
    value: 12,
    imagem: require("../assets/forca/agachamento.gif"),
    desc: "Flexione os joelhos e quadris até formar 90°, mantendo abdômen firme e joelhos alinhados com os pés.",
  },
  {
    id: "2",
    nome: "Afundo",
    type: "reps",
    series: 3,
    value: 10,
    note: "5 cada lado",
    imagem: require("../assets/forca/afundo.gif"),
    desc: "Dê um passo à frente e flexione ambos os joelhos até formarem 90°, mantendo o equilíbrio e retornando lentamente.",
  },
  {
    id: "3",
    nome: "Saltos pliométricos",
    type: "reps",
    series: 3,
    value: 8,
    imagem: require("../assets/forca/salto.gif"),
    desc: "Agache e, ao subir, salte o mais alto possível. Aterre suavemente, flexionando os joelhos para amortecer o impacto.",
  },
  {
    id: "4",
    nome: "Prancha frontal",
    type: "time",
    series: 3,
    rest: 15,
    value: 45,
    imagem: require("../assets/forca/prancha.gif"),
    desc: "Apoie antebraços e pontas dos pés no chão, mantendo o corpo alinhado e o abdômen contraído.",
  },
  {
    id: "5",
    nome: "Ponte",
    type: "reps",
    series: 3,
    value: 15,
    imagem: require("../assets/forca/ponte2.gif"),
    desc: "Deite-se, flexione os joelhos e eleve o quadril até alinhar ombros e joelhos. Contraia o glúteo no topo.",
  },
  {
    id: "6",
    nome: "Salto em 1 perna",
    type: "reps",
    series: 3,
    value: 10,
    imagem: require("../assets/forca/salto2.gif"),
    desc: "Realize pequenos saltos com uma perna, controlando o equilíbrio. Troque a perna a cada série.",
  },
  {
    id: "7",
    nome: "Ponte Unilateral",
    type: "reps",
    series: 3,
    value: 12,
    note: "cada lado",
    imagem: require("../assets/forca/ponte2.gif"),
    desc: "Deite-se e eleve o quadril apoiando-se em apenas uma perna. Troque o lado a cada série.",
  },
  {
    id: "8",
    nome: "Flexão de braços",
    type: "reps",
    series: 3,
    value: 12,
    imagem: require("../assets/forca/flexao.gif"),
    desc: "Mantenha o corpo reto e mãos alinhadas aos ombros. Desça até o peito quase tocar o chão e empurre de volta.",
  },
  {
    id: "9",
    nome: "Flexão com joelhos apoiados",
    type: "reps",
    series: 3,
    value: 12,
    imagem: require("../assets/forca/flexao2.gif"),
    desc: "Versão mais leve da flexão, com os joelhos apoiados no chão. Ideal para iniciantes.",
  },
  {
    id: "10",
    nome: "Prancha lateral",
    type: "time",
    series: 3,
    rest: 15,
    value: 30,
    note: "cada lado",
    imagem: require("../assets/forca/prancha2.gif"),
    desc: "Apoie-se em um antebraço e na lateral de um pé, mantendo o corpo reto e o abdômen firme.",
  },
  {
    id: "11",
    nome: "Abdominal tradicional",
    type: "reps",
    series: 3,
    value: 15,
    imagem: require("../assets/forca/abdominal.gif"),
    desc: "Flexione o tronco elevando os ombros do chão e volte lentamente, evitando puxar o pescoço.",
  },
  {
    id: "12",
    nome: "Abdominal bicicleta",
    type: "reps",
    series: 3,
    value: 12,
    note: "cada lado",
    imagem: require("../assets/forca/abdominal2.gif"),
    desc: "Simule pedalar no ar, tocando o cotovelo direito no joelho esquerdo e vice-versa.",
  },
  {
    id: "13",
    nome: "Elevação de panturrilhas",
    type: "reps",
    series: 4,
    value: 15,
    imagem: require("../assets/forca/panturrilhaforca.gif"),
    desc: "Fique em pé e eleve os calcanhares, sustentando 2 segundos antes de descer.",
  },
  {
    id: "14",
    nome: "Prancha dinâmica",
    type: "reps",
    series: 3,
    value: 10,
    imagem: require("../assets/forca/prancha3.gif"),
    desc: "Alterne entre prancha baixa e alta, controlando o movimento e evitando girar o corpo.",
  },
  {
    id: "15",
    nome: "Agachamento com isometria",
    type: "time",
    series: 3,
    rest: 15,
    value: 30,
    imagem: require("../assets/forca/agachamento2.gif"),
    desc: "Desça até metade do agachamento e mantenha a posição parada por 30 segundos.",
  },
  {
    id: "16",
    nome: "Extensão de quadril em quatro apoios",
    type: "reps",
    series: 3,
    value: 12,
    note: "cada lado",
    imagem: require("../assets/forca/quadril.gif"),
    desc: "Em quatro apoios, eleve uma perna mantendo o joelho a 90°, e retorne sem arquear as costas.",
  },
];

export default function ForcaPropriocepcaoList({ navigation }) {
  const renderItem = ({ item }) => {
    const raw = item.image ?? item.imagem ?? null;
    const source = typeof raw === "number" ? raw : raw ? { uri: raw } : null;

    const subtitle =
      item.type === "time"
        ? item.series
          ? `${item.series}× ${item.value}s ${
              item.note ? `• ${item.note}` : ""
            }`
          : `${item.value}s ${item.note ? `• ${item.note}` : ""}`
        : item.series
        ? `${item.series}× ${item.value} reps ${
            item.note ? `• ${item.note}` : ""
          }`
        : `${item.value} repetições ${item.note ? `• ${item.note}` : ""}`;

    return (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          {source ? (
            <Image
              source={source}
              style={styles.thumbnail}
              contentFit="cover"
              cachePolicy="none"
              key={typeof source === "object" ? source.uri : String(source)}
            />
          ) : (
            <View
              style={[
                styles.thumbnail,
                { justifyContent: "center", alignItems: "center" },
              ]}
            >
              <Text style={{ color: "#666", fontSize: 12 }}>Sem imagem</Text>
            </View>
          )}

          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{item.nome}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={FORCA}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        removeClippedSubviews={false}
        initialNumToRender={6}
        windowSize={7}
      />

      <View style={styles.footer}>
        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate("ForcaPropriocepcaoExercise", {
              exercises: FORCA,
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
    height: 90,
    borderWidth: 3,
    borderColor: "#e8bb44",
    borderRadius: 12,
    backgroundColor: "#fff",
    overflow: "hidden",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  cardContent: { flexDirection: "row", alignItems: "center" },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#eee",
  },
  title: { color: "#1843a9", fontSize: 18, fontWeight: "700" },
  subtitle: { color: "#666", fontSize: 14 },
  footer: { paddingVertical: 12, alignItems: "center" },
  startButton: { width: "60%", backgroundColor: "#1843a9", borderRadius: 10 },
  startLabel: { color: "#e8bb44", fontWeight: "900", fontSize: 16 },
});
