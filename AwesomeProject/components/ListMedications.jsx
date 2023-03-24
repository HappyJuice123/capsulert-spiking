import React, { useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { AddMedication } from "./AddMedication";
import { SingleMedication } from "./SingleMedication";

export function ListMedications() {
  const [medications, setMedications] = useState([]);

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
          <SingleMedication item={item} handleDelete={handleDelete} />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#fff",
  },
});
