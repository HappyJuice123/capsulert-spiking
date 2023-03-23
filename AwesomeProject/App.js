import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [allergies, setAllergies] = useState([]);
  const [newAllergy, setNewAllergy] = useState("");

  const onChange = (textValue) => setNewAllergy(textValue);

  return (
    <View style={styles.container}>
      <Text>Hello team Tech Capsule!</Text>
      <TextInput
        placeholder="Enter your allergies"
        style={styles.input}
        onPress={() => setNewAllergy("")}
        onChangeText={onChange}
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
          setAllergies((prevAllergies) => {
            return [...prevAllergies, newAllergy];
          });
        }}
      >
        <Text>Add Item</Text>
      </TouchableOpacity>
      <FlatList
        data={allergies}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}

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
