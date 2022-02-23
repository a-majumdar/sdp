import React, { useContext, useEffect } from "react";
import "../App.css";
import { Card, Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import "./ProfilePage.css";
import Footer from "../components/organisms/Footer";
import CardItem from "../components/molecules/CardItem";
import addPropButton from "../assets/addpropbutton.png";
import {
  createUser,
  getAllPropogatorsForUser,
  logout,
} from "../firebase/firebase-config";
import { auth } from "../firebase/firebase-config";
import { AuthContext } from "../contexts/AuthContext";
import { getAllInfo } from "../firebase/firebase-config";
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

/**
 * Profile Page section of our website
 * @returns
 */
export default function ProfilePage() {
  const [error, setError] = useState();
  const history = useHistory();
  const { currentUserUID, currentUserEmail } = useContext(AuthContext);
  const [propId, setPropId] = useState("");

  /**
   * Function to deal with logout of the user, calls logout from firebase-config.js
   */
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/"); //Redirects back to home page
    } catch {
      setError("Failed to logOut");
    }
  }

  /**
   * The UseEffect Method Access' the right PropagatorId for the Current User
   * And display it in the button
   * @param {*} userId
   */
  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db);
    var propagatorId = null;

    get(child(dbRef, "User_Propogator_relations/" + currentUserUID))
      .then((snapshot) => { //Creates a snapshot (what value is at that current location)
        if (snapshot.exists) {
          propagatorId = snapshot.val().propagatorId;
          setPropId(propagatorId); //Sets our useState to the propogatorId we just found to corrsepond to the user
        } else {
          alert("No data found!");
        }
      })
      .catch((error) => {
        alert("unsuccessful, error" + error);
      });
  });

  //Need to add css to make it look pretty.
  return (
    <>
      <h2>Hello, {currentUserEmail} &nbsp;</h2>
      <h2>Current User ID Logged On - {currentUserUID}</h2>
      <div>
        <h2>Active Propogators</h2>

        <Link to={"/MyProp"}>
          <button>Propogator ID : {propId}</button>
        </Link>
        <h2>
          <button>Get Prop Info</button>
          <button>Link another Propogator</button>
        </h2>
      </div>

      <div>
        <h2>Plant Again</h2>
        <p>Basil Plant</p>
        <p>Basil Plant</p>
        <p>Basil Plant</p>
      </div>
      <h1>
        <button onClick={handleLogout}>Logout</button>
      </h1>
      <Footer></Footer>
    </>
  );
}
