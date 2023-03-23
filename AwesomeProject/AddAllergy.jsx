import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

export const AddAllergy = ({ addAllergy }) => {
  const [newAllergy, setNewAllergy] = useState("Enter your allergies");

  const onChange = (textValue) => setNewAllergy(textValue);

  return (
    <View>
      <TextInput
        placeholder="Allergies"
        style={styles.input}
        onChangeText={onChange}
      ></TextInput>
      <TouchableOpacity onPress={() => addAllergy(newAllergy)}>
        <Text>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    padding: 4,
    width: 220,
  },
});
