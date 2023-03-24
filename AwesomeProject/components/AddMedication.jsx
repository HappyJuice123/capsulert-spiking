import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

export const AddMedication = ({ setMedications }) => {
  const [newMedication, setNewMedication] = useState("");

  const handleInput = (newMedication) => {
    setMedications((prevAllergies) => {
      return [...prevAllergies, newMedication];
    });
    setNewMedication("");
  };

  return (
    <View>
      <TextInput
        placeholder={"Enter your medications"}
        style={styles.input}
        value={newMedication}
        onChangeText={(value) => setNewMedication(value)}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handleInput(newMedication)}
      >
        <Text style={styles.btnText}>+ Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    padding: 4,
  },
  btn: {
    backgroundColor: "#c2bad8",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  btnText: {
    textAlign: "center",
  },
});
