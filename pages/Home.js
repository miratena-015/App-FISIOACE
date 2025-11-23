import React from "react";
import { Image } from "expo-image";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";

export default function Home({ navigation }) {
  return (
    <ScrollView
      style={{ backgroundColor: "#e6e6e6ff" }}
      contentContainerStyle={styles.scroll}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/home.png")}
          style={styles.gif}
          contentFit="contain"
          transition={1000}
        />

        <View style={styles.topRow}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("SOS")}
            style={styles.button}
            labelStyle={{ color: "#e8ba44", fontWeight: "900", fontSize: 18 }}
          >
            SOS
          </Button>

          <Button
            mode="contained"
            onPress={() => navigation.navigate("Blog")}
            style={styles.button}
            labelStyle={{ color: "#e8ba44", fontWeight: "900", fontSize: 18 }}
          >
            Blog
          </Button>
        </View>

        <View style={styles.bottomRow}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Treinos")}
            style={styles.button}
            labelStyle={{ color: "#e8ba44", fontWeight: "900", fontSize: 18 }}
          >
            Treinos
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1, // permite ocupar a tela toda
  },
  container: {
    flex: 1, // ocupa toda a altura
    justifyContent: "center", // CENTRALIZA VERTICAL
    alignItems: "center", // CENTRALIZA HORIZONTAL
    padding: 20,
  },
  gif: {
    width: 350,
    height: 350,
    marginBottom: 30,
    borderRadius: 60,
    alignSelf: "center",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 15,
  },
  bottomRow: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1843a9",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
});
