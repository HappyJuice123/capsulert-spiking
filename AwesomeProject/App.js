import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListAllergies } from "./ListAllergies";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello team Tech Capsule!</Text>
      <ListAllergies />
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
  title: { textAlign: "center", marginBottom: 20 },
});
