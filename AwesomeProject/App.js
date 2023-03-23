import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [current, setCurrent] = useState("Home");

  const Home = (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button title="Click to Login" onPress={() => setCurrent(Login)}></Button>
    </View>
  );

  const Login = (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <Button title="Home" onPress={() => setCurrent(Home)}></Button>
    </View>
  );

  return current === "Home" ? Home : current;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
