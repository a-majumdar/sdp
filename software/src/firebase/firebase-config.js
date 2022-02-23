import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "firebase/firestore";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  orderByChild,
  equalTo,
  query,
  push,
} from "firebase/database";
import { useState } from "react";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyC7rC18pqqy0cFLL-Gj9YoEBQq2eGItTb0",
  authDomain: "planted-a9629.firebaseapp.com",
  databaseURL:
    "https://planted-a9629-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "planted-a9629",
  storageBucket: "planted-a9629.appspot.com",
  messagingSenderId: "380909345738",
  appId: "1:380909345738:web:5bb67f8deba1bcadb2cd33",
});

//***********AUTHENTICATION FUNCTIONS******//

export async function createUser(email, password) {
  await createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  signOut(auth);
}

//*************DATABASE FUNCTIONS*************//

//add data to each table functions
export function addUserPropagatorRelations(userId, propagatorId) {
  const db = getDatabase();
  set(ref(db, "User_Propogator_relations/" + userId), {
    propagatorId: propagatorId,
  });
}

// Initialize Firebase
export default firebaseConfig;
export const auth = getAuth();
