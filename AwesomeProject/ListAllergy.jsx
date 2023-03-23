import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export function ListAllergy({ allergy }) {
  return (
    <TouchableOpacity style={styles.listAllergy}>
      <View>
        <Text>{allergy}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listAllergy: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
