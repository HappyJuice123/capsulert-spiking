import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListAllergies } from "./components/ListAllergies";
import { ListMedications } from "./components/ListMedications";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello team Tech Capsule!</Text>
      <ListAllergies />
      <ListMedications />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    marginTop: 80,
    marginHorizontal: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});
