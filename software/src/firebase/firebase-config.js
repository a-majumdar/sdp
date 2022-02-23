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

/**
 * Function to Create a User in Firebase Authentication Version 9.6.1
 * @param {*} email
 * @param {*} password
 */
export async function createUser(email, password) {
  //Need to make these async so that we wait for their completion
  await createUserWithEmailAndPassword(auth, email, password);
}

/**
 * Function to Log a User in Firebase Authentication Version 9.6.1
 * @param {*} email
 * @param {*} password
 */
export async function login(email, password) {
  //Need to make these async so that we wait for their completion
  signInWithEmailAndPassword(auth, email, password);
}

/**
 * Function to log a user out in Firebase Authentication Version 9.6.1
 */
export function logout() {
  signOut(auth);
}

//*************DATABASE FUNCTIONS*************//

/**
 * Function to add userId and Propogator ID to User_Propogator_relations table in realtime database
 * @param {*} userId - ID of the user currently logged in
 * @param {*} propagatorId - Propogator ID that the user inputs during sign-up
 */
export function addUserPropagatorRelations(userId, propagatorId) {
  const db = getDatabase();
  set(ref(db, "User_Propogator_relations/" + userId), {
    propagatorId: propagatorId,
  });
}

// export function getAllPropogatorsForUser(userId) {
//   const db = getDatabase();
//   const dbRef = ref(db);
//   var propagatorId = null;

//   get(child(dbRef, "User_Propogator_relations/" + userId))
//     .then((snapshot) => {
//       if (snapshot.exists) {
//         propagatorId = snapshot.val().propagatorId;
//         console.log(propagatorId);
//       } else {
//         alert("No data found!");
//       }
//     })
//     .catch((error) => {
//       alert("unsuccessful, error" + error);
//     });
// }

// //get relevant information in firebase by userid
// const db = ref(getDatabase());
// export function getAllInfo(userId) {
//   console.log(userId);
//   var propagatorId = null;
//   var plantId = null;
//   //userid->propagatorid
//   get(child(db, `User_Propagator_relations/${userId}`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       propagatorId = snapshot.val().propagatorId;
//       console.log("propagatorid: " + propagatorId);
//     } else {
//       console.log("No propagator data available");
//     }
//   });
//   console.log("propagator id now is : " + propagatorId);
//   //propagatorid->plantid
//   get(child(db, `Propagator_Details/${propagatorId}`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       plantId = snapshot.val().plantId;
//       console.log("plantId+ " + plantId);
//     } else {
//       console.log("No plant data available");
//     }
//   });
//   //get readings
//   get(child(db, `Temperature_Readings/01`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       var degree = snapshot.val().reading;
//       console.log("temperature reading " + degree);
//     } else {
//       console.log("No temperature data available");
//     }
//   });

//   get(child(db, `Sunlight_Readings/01`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       var degree = snapshot.val().reading;
//       console.log("sunlight reading " + degree);
//     } else {
//       console.log("No sunlight data available");
//     }
//   });

//   get(child(db, `Moisture_Readings/01`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       var degree = snapshot.val().reading;
//       console.log("moisture reading " + degree);
//     } else {
//       console.log("No moisture data available");
//     }
//   });
// }

//Initialize Firebase
export default firebaseConfig;
export const auth = getAuth();
