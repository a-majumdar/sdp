import React from "react";
import "../App.css";
import { Card, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./ProfilePage.css";

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

  return (
    <>
      <div className="username">
        <h1>
          Hello, {currentUser.email}
          <button onClick={handleLogout}>Log Out</button>
        </h1>
      </div>
      <div>
        <h2>Propogators Active: </h2>
        <strong>Basil Plant</strong>
      </div>
      <button>Link a Propogator</button>
      <strong>Previously Grown Plants</strong>
    </>
  );
}
