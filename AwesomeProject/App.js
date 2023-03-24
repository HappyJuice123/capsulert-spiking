import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { initializeApp } from "firebase/app";
import React from "react";
import { Camera, CameraType } from "expo-camera";
import { useState } from "react";

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

const Clarifai = require("clarifai");

const clarifai = new Clarifai.App({
  apiKey: "361302f22e754af7ae32fa1efcdb9a0d",
});

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.container}>
      <Text>Hello team Tech Capsule!</Text>
      <StatusBar style="auto" />
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
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

const USER_ID = "jason1201";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "bee2af2ea9864622b5b1eea2faaaf6a4";
const APP_ID = "my-first-application";
// Change these to build your own VTR Workflow
const WORKFLOW_ID = "visual-text-recognition-id";

const WORKFLOWNODE_ID_1 = "detect-concept";
const MODEL_ID_1 = "2419e2eae04d04f820e5cf3aba42d0c7";
const MODEL_VERSION_ID_1 = "75a5b92a0dec436a891b5ad224ac9170";

const WORKFLOWNODE_ID_2 = "image-crop";
const MODEL_ID_2 = "ce3f5832af7a4e56ae310d696cbbefd8";
const MODEL_VERSION_ID_2 = "a78efb13f7774433aa2fd4864f41f0e6";

const WORKFLOWNODE_ID_3 = "image-to-text";
const MODEL_ID_3 = "9fe78b4150a52794f86f237770141b33";
const MODEL_VERSION_ID_3 = "d94413e582f341f68884cac72dbd2c7b";

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostWorkflows(
  {
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    workflows: [
      {
        id: WORKFLOW_ID,
        nodes: [
          {
            id: WORKFLOWNODE_ID_1,
            model: {
              id: MODEL_ID_1,
              model_version: {
                id: MODEL_VERSION_ID_1,
              },
            },
          },
          {
            id: WORKFLOWNODE_ID_2,
            model: {
              id: MODEL_ID_2,
              model_version: {
                id: MODEL_VERSION_ID_2,
              },
            },
            node_inputs: [
              {
                node_id: WORKFLOWNODE_ID_1,
              },
            ],
          },
          {
            id: WORKFLOWNODE_ID_3,
            model: {
              id: MODEL_ID_3,
              model_version: {
                id: MODEL_VERSION_ID_3,
              },
            },
            node_inputs: [
              {
                node_id: WORKFLOWNODE_ID_2,
              },
            ],
          },
        ],
      },
    ],
  },
  metadata,
  (err, response) => {
    if (err) {
      throw new Error(err);
    }

    if (response.status.code !== 10000) {
      console.log(response.status);
      throw new Error(
        "Post workflows failed, status: " + response.status.description
      );
    }
  }
);
