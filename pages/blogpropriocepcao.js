import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BlogAquecimento() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Propriocepção</Text>
      <Text style={styles.texto}>
        A Propriocepção é a capacidade de saber onde cada parte do corpo está no
        espaço, sem precisar olhar. O treino proprioceptivo envolve exercícios
        de equilíbrio e estabilidade, muitas vezes realizados em superfícies
        instáveis. A sua importância é vital para a prevenção de lesões,
        especialmente em esportes com muitos saltos ou mudanças rápidas de
        direção.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f1f2",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1843a9",
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    color: "#333",
  },
});
