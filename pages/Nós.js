import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

export default function Nós() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.title}>Sobre Nós</Text>

        <Image
          source={require("../assets/nos.png")}
          style={styles.sobreImg}
          contentFit="cover"
        />

        <Text style={styles.text}>
          {"\t"}
          {"\t"}Somos estudantes de Fisioterapia da Universidade de Sorocaba
          (UNISO), atualmente cursando o quinto semestre. Para o Projeto
          Integrador deste semestre, escolhemos desenvolver algo relacionado ao
          vôlei, um esporte muito presente em nosso convívio, praticado por
          diversos amigos e pessoas próximas.
        </Text>

        <Text style={styles.text}>
          {"\t"}
          {"\t"}Nosso objetivo foi criar uma proposta que auxiliasse atletas
          amadores que jogam vôlei de forma recreativa, oferecendo orientações
          úteis e acessíveis.
        </Text>

        <Text style={styles.text}>
          {"\t"}
          {"\t"}Para isso, realizamos uma pesquisa de campo que nos ajudou a
          identificar as principais necessidades desses praticantes. A partir
          dos resultados, desenvolvemos um aplicativo com informações e dicas
          sobre como agir em caso de lesões, além de formas de prevenção.
        </Text>

        <Text style={styles.subTitle}>Integrantes</Text>

        <Text style={styles.text}>Beatriz Ferreira de Almeida - 00117377</Text>
        <Text style={styles.text}>Flaviane Henrique Paes Diver - 00117693</Text>
        <Text style={styles.text}>Lívia Gardelli Martins - 00117282</Text>
        <Text style={styles.text}>Mirian Martins do Amaral - 00118027</Text>
        <Text style={styles.text}>Thamiris Fogaça Utsunomiya - 00117922</Text>
        <Text style={styles.text}>Júlia Rodrigues dos Reis - 00114341</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 20,
    backgroundColor: "#e6e6e6ff",
  },
  container: {
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1843a9",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  sobreImg: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: "#333",
    textAlign: "justify",
    marginBottom: 16,
    lineHeight: 22,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1843a9",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 12,
  },
});
