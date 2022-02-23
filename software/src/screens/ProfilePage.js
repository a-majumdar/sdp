import React, { useContext } from "react";
import "../App.css";
import { Card, Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import "./ProfilePage.css";
import Footer from "../components/organisms/Footer";
import CardItem from "../components/molecules/CardItem";
import addPropButton from "../assets/addpropbutton.png";
import { createUser, logout } from "../firebase/firebase-config";
import { auth } from "../firebase/firebase-config";
import { AuthContext } from "../contexts/AuthContext";
import { getAllInfo } from "../firebase/firebase-config";

/**
 * Profile Page section of our website
 * @returns
 */
export default function ProfilePage() {
  const [error, setError] = useState();
  const history = useHistory();
  const { currentUserUID } = useContext(AuthContext);

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
  //Very Untidy but I was experimenting with putting 2 divs side by side
  return (
    <>
      <h2>Hello, &nbsp;</h2>
      <div>
        <h2>Active Propogators</h2>
        <h2>{currentUserUID}</h2>
        <Link to={"/MyProp"}>
          <button>Propogator 1</button>
        </Link>
        <h2>
          <button onClick={getAllInfo(currentUserUID)}>
            Get All Propogator Info
          </button>
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
