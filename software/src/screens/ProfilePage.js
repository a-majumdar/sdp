import React from "react";
import "../App.css";
import { Card, Button, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./ProfilePage.css";
import Footer from "../components/organisms/Footer";
import CardItem from "../components/molecules/CardItem";
import addPropButton from "../assets/addpropbutton.png";

export default function ProfilePage() {
  const [error, setError] = useState();
  const { currentUser, logOut } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logOut();
      history.push("/");
    } catch {
      setError("Failed to logOut");
    }
  }
  //Very Untidy but I was experimenting with putting 2 divs side by side
  return (
    <>
      <h2 className="user">
        Hello, &nbsp;{currentUser.email},&nbsp; you joined on :{" "}
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
