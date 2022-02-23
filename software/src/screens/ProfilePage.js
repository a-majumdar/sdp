import React from "react";
import "../App.css";
import { Card, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./ProfilePage.css";
import Footer from "../components/organisms/Footer";
import CardItem from "../components/molecules/CardItem";
import addPropButton from "../assets/addpropbutton.png";
import { logout } from "../firebase/firebase-config";
import { auth } from "../firebase/firebase-config";

/**
 * Profile Page section of our website
 * @returns 
 */
export default function ProfilePage() {
  const [error, setError] = useState();
  const history = useHistory();

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
      <h2 className="user">
        Hello, &nbsp;{auth.currentUser.email} &nbsp; you joined on :
        {/*when user joined*/}
      </h2>
      <div className="prop-container">
        <h2 className="prop-title">Your Propogators</h2>
        <img className="add-prop-img" src={addPropButton}></img>
        <img className="add-prop-img" src={addPropButton}></img>
        <img className="add-prop-img" src={addPropButton}></img>
      </div>
      <h1>
        <button onClick={handleLogout}>Logout</button>
      </h1>
      <h2>Plant Again</h2>
      <p>Basil Plant</p>
      <Footer></Footer>
    </>
  );
}
