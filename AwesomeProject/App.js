import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBbi_pa_vzAW7v0EiHkLUJwObA5a9jky0c",
  authDomain: "capsulert-project.firebaseapp.com",
  projectId: "capsulert-project",
  storageBucket: "capsulert-project.appspot.com",
  messagingSenderId: "892192871729",
  appId: "1:892192871729:web:eab3cfc4447cbeeb7acc10",
  measurementId: "G-MFQXF1ZV56",
};

const app = initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello team Tech Capsule!</Text>
      <StatusBar style="auto" />
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
});
