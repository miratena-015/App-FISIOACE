import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BlogAquecimento() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aquecimento</Text>
      <Text style={styles.texto}>
        O Aquecimento é a fase inicial de qualquer treino ou competição.
        Consiste em realizar exercícios leves para preparar o corpo. O principal
        objetivo é aumentar a frequência cardíaca e a temperatura dos músculos,
        tornando-os mais elásticos e prontos para o esforço. A sua importância
        está em reduzir drasticamente o risco de lesões, pois um músculo
        "quente" funciona de forma mais eficiente e reage melhor ao estresse.
        Além disso, melhora a performance geral, permitindo que o atleta comece
        o exercício com mais potência e velocidade.
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
