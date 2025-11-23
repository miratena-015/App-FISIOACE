import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Text } from "react-native-paper";

export default function Treinos({ navigation }) {
  const botoes = [
    {
      id: 1,
      nome: "Aquecimento",
      emoji: "🔥",
      rota: "AquecimentoList",
    },
    {
      id: 2,
      nome: "Mobilidade",
      emoji: "🤸‍♀️",
      rota: "MobilidadeList",
    },
    {
      id: 3,
      nome: "Força + Propriocepção",
      emoji: "💪",
      rota: "ForcaPropriocepcaoList",
    },
  ];

  const abrirTreino = (rota) => {
    navigation.navigate(rota);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Treinos</Text>
      </View>

      <View style={styles.conteudo}>
        {botoes.map((b) => (
          <TouchableOpacity
            key={b.id}
            style={styles.botao}
            activeOpacity={0.9}
            onPress={() => abrirTreino(b.rota)}
          >
            <ImageBackground
              source={{ uri: b.imagem }}
              style={styles.fundoImagem}
              imageStyle={styles.imagem}
            >
              <View style={styles.textBox}>
                <Text style={styles.texto}>
                  {b.emoji} {b.nome}
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6ff",
  },
  header: {
    backgroundColor: "#e6e6e6ff",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1843a9",
  },
  conteudo: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 20,
  },
  botao: {
    width: "100%",
    height: 110,
    borderWidth: 3,
    borderColor: "#e8bb44",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 16,
    backgroundColor: "#f2f2f2",
  },
  fundoImagem: {
    flex: 1,
    justifyContent: "center",
  },
  imagem: {
    resizeMode: "cover",
  },
  textBox: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  texto: {
    color: "#1843a9",
    fontSize: 26, // 🔹 texto maior
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 34, // 🔹 melhora o espaçamento vertical
  },
});
