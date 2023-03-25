import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbi_pa_vzAW7v0EiHkLUJwObA5a9jky0c",
  authDomain: "capsulert-project.firebaseapp.com",
  projectId: "capsulert-project",
  storageBucket: "capsulert-project.appspot.com",
  messagingSenderId: "892192871729",
  appId: "1:892192871729:web:eab3cfc4447cbeeb7acc10",
  measurementId: "G-MFQXF1ZV56",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
