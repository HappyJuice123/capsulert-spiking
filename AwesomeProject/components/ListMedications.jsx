import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import CheckBox from "expo-checkbox";
import { AddMedication } from "./AddMedication";

export function ListMedications() {
  const [medications, setMedications] = useState([]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleDelete = (item) => {
    setMedications((prevAllergies) => {
      return prevAllergies.filter((allergy) => allergy !== item);
    });
  };

  return (
    <View>
      <Text>Medications</Text>
      <AddMedication setMedications={setMedications} />
      <FlatList
        style={styles.list}
        data={medications}
        renderItem={({ item }) => (
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
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#fff",
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
  checkbox: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
