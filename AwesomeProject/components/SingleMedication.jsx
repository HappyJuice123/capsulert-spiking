import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import CheckBox from "expo-checkbox";

export const SingleMedication = ({ item, handleDelete }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.checkbox}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text>{item}</Text>
      </View>
      <Text onPress={() => handleDelete(item)}>Delete</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 50,
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  checkbox: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
