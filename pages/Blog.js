import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Text,
  Dimensions,
} from "react-native";

export default function Blog({ navigation }) {
  const botoes = [
    {
      id: 1,
      nome: "Aquecimento",
      imagem: require("../assets/aquecimentoblog.png"),
      rota: "BlogAquecimento",
    },
    {
      id: 2,
      nome: "Alongamento",
      imagem: require("../assets/alongamentoblog.png"),
      rota: "BlogAlongamento",
    },
    {
      id: 3,
      nome: "Força",
      imagem: require("../assets/forcablog.png"),
      rota: "BlogForca",
    },
    {
      id: 4,
      nome: "Propriocepção",
      imagem: require("../assets/propriocepcaoblog.png"),
      rota: "BlogPropriocepcao",
    },
    {
      id: 5,
      nome: "Mobilidade",
      imagem: require("../assets/mobilidadeblog.png"),
      rota: "BlogMobilidade",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Blog</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.grid}>
          {botoes.map((b, index) => (
            <TouchableOpacity
              key={b.id}
              style={[
                styles.card,
                index === botoes.length - 1 ? styles.ultimoCard : null,
              ]}
              activeOpacity={0.9}
              onPress={() => navigation.navigate(b.rota)}
            >
              <ImageBackground
                source={b.imagem}
                style={styles.imagemBox}
                imageStyle={styles.imagem}
              >
                <View style={styles.overlay} />
              </ImageBackground>

              <View style={styles.legenda}>
                <Text style={styles.legendaTexto}>{b.nome}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get("window");
const cardWidth = (width * 0.9 - 20) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6ff",
  },

  // HEADER mais compacto
  header: {
    paddingVertical: 6, // reduzido de 16 → 6
    alignItems: "center",
  },

  titulo: {
    fontSize: 22, // levemente menor
    fontWeight: "bold",
    color: "#1843a9",
  },

  // menos espaço ao redor dos cards
  scroll: {
    paddingVertical: 8, // reduzido de 20 → 8
    paddingBottom: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  card: {
    width: cardWidth,
    borderWidth: 3,
    borderColor: "#e8bb44",
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#f2f2f2",
    marginBottom: 14, // reduzido de 20 → 14
  },

  ultimoCard: {
    alignSelf: "center",
  },

  imagemBox: {
    width: "100%",
    aspectRatio: 1,
    justifyContent: "center",
  },

  imagem: {
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.03)",
  },

  legenda: {
    height: 44, // um pouco menor
    backgroundColor: "#f2f2f2",
    borderTopWidth: 2,
    borderColor: "#e8bb44",
    alignItems: "center",
    justifyContent: "center",
  },

  legendaTexto: {
    color: "#1843a9",
    fontSize: 16, // ligeiramente menor
    fontWeight: "bold",
    textShadowColor: "rgba(255,255,255,0.95)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
});
