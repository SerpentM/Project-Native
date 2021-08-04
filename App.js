import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Upper from "./component/Upper.js";
import Lower from "./component/Lower.js";

export default function App() {
  let x = 1;
  return (
    <SafeAreaView style={styles.container}>
      <Upper />
      <Lower />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF8252",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
