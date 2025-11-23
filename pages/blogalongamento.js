import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BlogAquecimento() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Alongamento</Text>
      <Text style={styles.texto}>
        É composto por exercícios focados em alongar os músculos e tendões para
        aumentar a flexibilidade e a amplitude de movimento das articulações.
        Ele é crucial para a manutenção da saúde muscular a longo prazo. No
        esporte, ter boa flexibilidade é importante para conseguir executar os
        movimentos melhorando a técnica e a eficácia. Também é frequentemente
        usado de forma leve e controlada no final do treino para ajudar na
        recuperação muscular e reduzir a sensação de tensão pós-esforço.
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
