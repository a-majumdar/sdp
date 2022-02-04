import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC7rC18pqqy0cFLL-Gj9YoEBQq2eGItTb0",
  authDomain: "planted-a9629.firebaseapp.com",
  databaseURL:
    "https://planted-a9629-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "planted-a9629",
  storageBucket: "planted-a9629.appspot.com",
  messagingSenderId: "380909345738",
  appId: "1:380909345738:web:5bb67f8deba1bcadb2cd33",
});

// Initialize Firebase
export const auth = firebaseConfig.auth();
export default firebaseConfig;
