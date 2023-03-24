import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import { AddAllergy } from "./AddAllergy";

export function ListAllergies() {
  const [allergies, setAllergies] = useState([]);

  const handleDelete = (item) => {
    setAllergies((prevAllergies) => {
      return prevAllergies.filter((allergy) => allergy !== item);
    });
  };

  return (
    <View>
      <Text>Allergies</Text>
      <AddAllergy setAllergies={setAllergies} />
      <FlatList
        style={styles.list}
        data={allergies}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem}>
            <Text>{item}</Text>
            <Text onPress={() => handleDelete(item)}>Delete</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#fff",
    marginBottom: 30,
  },
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
});
