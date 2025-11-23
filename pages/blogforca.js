import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BlogAquecimento() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Fortalecimento</Text>
      <Text style={styles.texto}>
        O Fortalecimento é o treino de resistência que visa aumentar a força e a
        resistência dos músculos e tendões, seja usando pesos, elásticos ou o
        peso corporal. Ele é a base de todo o preparo. Ele aumenta a potência
        necessária para a execução dos gestos esportivos, protege as
        articulações ao dar suporte muscular e corrige desequilíbrios musculares
        que poderiam levar a lesões crônicas. Um corpo fortalecido suporta
        melhor a intensidade e o volume dos treinos, sendo fundamental para a
        longevidade na prática esportiva.
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
