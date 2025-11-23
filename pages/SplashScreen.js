import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Tabs");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/fisioace.png")} style={styles.logo} />
      <Text style={styles.title}>Fisioace</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1843a9",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 220,
    height: 220,
    marginBottom: 20,
    resizeMode: "contain",
    borderRadius: 20,
  },
  title: {
    color: "#e8ba44",
    fontSize: 28,
    fontWeight: "bold",
  },
});
