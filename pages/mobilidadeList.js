import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";

const EXERCICIOS = [
  {
    id: "1",
    nome: "Mobilidade sumô",
    type: "reps",
    value: 15,
    imagem: require("../assets/mobilidade/sumo.gif"),
    desc: "Em posição de agachamento sumô (pés afastados e pontas viradas para fora), movimente os joelhos alternadamente para os lados, estimulando a rotação do quadril.",
  },
  {
    id: "2",
    nome: "Escorpião",
    type: "reps",
    value: 15,
    imagem: require("../assets/mobilidade/escorpiao.gif"),
    desc: "Deitado de barriga para baixo, com braços abertos e pernas estendidas, eleve uma perna flexionada para trás e cruze-a sobre o corpo, promovendo torção da coluna e quadril.",
  },
  {
    id: "3",
    nome: "Postura do sapo",
    type: "reps",
    value: 15,
    imagem: require("../assets/mobilidade/sapo.gif"),
    desc: "Ajoelhe-se afastando os joelhos ao máximo, com os pés voltados para fora. Apoie os braços à frente e movimente o corpo para frente e para trás para trabalhar joelhos e quadris.",
  },
  {
    id: "4",
    nome: "Rotação alternada",
    type: "reps",
    value: 15,
    imagem: require("../assets/mobilidade/rotacaoalternada.gif"),
    desc: "Sentada com as mãos apoiadas atrás, flexione os joelhos e alterne a rotação interna das pernas para ambos os lados.",
  },
  {
    id: "5",
    nome: "Mobilidade lateral",
    type: "reps",
    value: 15,
    imagem: require("../assets/mobilidade/mobilidadelateral.gif"),
    desc: "Com um joelho apoiado no chão e o outro flexionado lateralmente, movimente o quadril de um lado para o outro, realizando abdução e adução.",
  },
  {
    id: "6",
    nome: "Movimento de bicicleta",
    type: "reps",
    value: 15,
    imagem: require("../assets/mobilidade/bicicleta.gif"),
    desc: "Deitada de costas, realize movimentos de pedalada com as pernas, ativando quadris e joelhos.",
  },
  {
    id: "7",
    nome: "Mobilidade de panturrilha",
    type: "reps",
    value: 15,
    imagem: require("../assets/mobilidade/panturrilha.gif"),
    desc: "Com as mãos apoiadas na parede, posicione um pé à frente com o calcanhar no chão. Empurre o joelho para frente e depois leve o movimento para trás, mobilizando o tornozelo.",
  },
  {
    id: "8",
    nome: "Rotação de tornozelo",
    type: "reps",
    value: 15,
    imagem: require("../assets/mobilidade/tornozelo.gif"),
    desc: "Deitada de costas, eleve uma perna e gire o pé em todas as direções para cima, para baixo e para os lados.",
  },
  {
    id: "9",
    nome: "Circundução de ombros",
    type: "reps",
    value: 15,
    imagem: require("../assets/mobilidade/ombro.gif"),
    desc: "Em pé, deixe os braços ao lado do corpo e realize círculos amplos com os ombros para frente e depois para trás.",
  },
  {
    id: "10",
    nome: "Mobilidade com bastão",
    type: "reps",
    value: 15,
    imagem: require("../assets/mobilidade/bastao.gif"),
    desc: "Segure um bastão com as mãos afastadas e eleve-o acima da cabeça, levando-o até atrás do corpo dentro do seu limite.",
  },
  {
    id: "11",
    nome: "Ativação do cotovelo",
    type: "reps",
    value: 15,
    imagem: require("../assets/mobilidade/cotovelo.gif"),
    desc: "Dobre e estenda o cotovelo lentamente, com o braço apoiado ou suspenso.",
  },
  {
    id: "12",
    nome: "Giro de antebraço",
    type: "reps",
    value: 15,
    imagem: require("../assets/mobilidade/antebraco.gif"),
    desc: "Com o cotovelo dobrado a 90°, gire o antebraço, alternando entre palma para cima (supinação) e palma para baixo (pronação).",
  },
  {
    id: "13",
    nome: "Circundução dos punhos",
    type: "reps",
    value: 15,
    imagem: require("../assets/mobilidade/punho.gif"),
    desc: "Estenda os braços à frente e faça movimentos circulares com os punhos em ambas as direções.",
  },
  {
    id: "14",
    nome: "Desbloqueio de punho",
    type: "reps",
    value: 15,
    imagem: require("../assets/mobilidade/punho2.gif"),
    desc: "Apoie o antebraço em uma superfície e deixe a mão para fora. Flexione o punho para baixo e depois para cima.",
  },
  {
    id: "15",
    nome: "Apertar e abrir",
    type: "reps",
    value: 15,
    imagem: require("../assets/mobilidade/apertaabre.gif"),
    desc: "Feche as mãos com força e abra o máximo possível, estendendo bem os dedos.",
  },
];

export default function MobilidadeList({ navigation }) {
  const renderItem = ({ item }) => {
    const raw = item.image ?? item.imagem ?? null;
    const source = typeof raw === "number" ? raw : raw ? { uri: raw } : null;

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
            <Text style={styles.subtitle}>{item.value} reps • cada lado </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={EXERCICIOS}
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
            navigation.navigate("MobilidadeExercise", {
              exercises: EXERCICIOS,
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
    height: 100,
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
