import React, { useState, useEffect } from "react";
import { getMedication } from "../Utils/api";
import { Text, View } from "react-native";

export default function DisplayMedication() {
  const [name, setName] = useState("");
  const [descriptions, setDescriptions] = useState([]);

  const medicationName = "Rivaroxaban";
  // Test Medication name: Rivaroxaban, Gliclazide

  useEffect(() => {
    getMedication(medicationName).then((responseData) => {
      console.log(responseData, "<<< response data object");
      console.log(responseData.name, "<<<< Medication Name");
      console.log(
        responseData.hasPart,
        "<<< Array of nested objects with medication descriptions"
      );
      setName(responseData.name);
      setDescriptions(responseData.hasPart);
    });
  }, []);

  return (
    <View>
      <Text>{name}</Text>
      <Text>
        {/* FlatList to display each item description */}
        {descriptions.map((item) => {
          return item.description;
        })}
      </Text>
    </View>
  );
}
