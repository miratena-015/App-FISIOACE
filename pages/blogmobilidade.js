import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BlogAquecimento() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mobilidade</Text>
      <Text style={styles.texto}>
        Mobilidade é a capacidade essencial de mover as nossas articulações de
        forma controlada por toda a sua amplitude. Ela é fundamental, pois ao
        invés de apenas alongar, ela ativa as articulações e os músculos. Isso é
        crucial para prevenir lesões. Além da segurança, a mobilidade é
        diretamente ligada ao melhor desempenho, garantindo que você consiga
        usar a máxima potência e eficiência em todos os movimentos técnicos,
        como saltar, sacar ou correr.
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
