import React, { useState, useEffect } from "react";
import { getMedication } from "../api";
import { FlatList, Text, View } from "react-native";

export default function DisplayMedication() {
  const [medication, setMedication] = useState([]);

  const medicationName = "Rivaroxaban";

  //   Gliclazide
  //   Rivaroxaban

  useEffect(() => {
    getMedication(medicationName).then((medicationData) => {
      setMedication(medicationData);
    });
  }, []);

  console.log(medication);

  return (
    <View>
      <Text>{medication.name}</Text>
      {/* <FlatList
        style={styles.list}
        data={medication.mainEntityOfPage}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem}>
            <View>
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList> */}
    </View>
  );

  //   const Item = ({ title, description, index }) => (
  //     <View>
  //       <Text style={styles.title}>
  //         {index}. {title}
  //       </Text>
  //       <Text> {description} </Text>
  //     </View>
  //   );

  //   const renderItem = ({ item, index }) => (
  //     <Item description={item.description} title={item.title} index={index} />
  //   );

  //   return (
  //     <View>
  //       {<FlatList data={data} renderItem={renderItem} keyExtractor={index}/>}
  //     </View>
  //   );
}

// const styles = StyleSheet.create({
//   listItem: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     gap: 50,
//     padding: 15,
//     backgroundColor: "#f8f8f8",
//     borderBottomWidth: 1,
//     borderColor: "#eee",
//   },
//   checkbox: {
//     display: "flex",
//     flexDirection: "row",
//     gap: 10,
//   },
// });
