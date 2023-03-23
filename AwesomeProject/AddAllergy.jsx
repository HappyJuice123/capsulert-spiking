import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

export const AddAllergy = ({ setAllergies }) => {
  const [newAllergy, setNewAllergy] = useState("");

  const handleInput = (newAllergy) => {
    setAllergies((prevAllergies) => {
      return [...prevAllergies, newAllergy];
    });
    setNewAllergy("");
  };

  return (
    <View>
      <TextInput
        placeholder={"Enter your allergies"}
        style={styles.input}
        value={newAllergy}
        onChangeText={(value) => setNewAllergy(value)}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handleInput(newAllergy)}
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
