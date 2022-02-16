import React from "react";
import "../App.css";
import { Card, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useState } from "react";

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
      <Card></Card>
      <div className="w-100 text-center mt-2">
        <strong>Email: </strong> {currentUser.email}
        <Button onClick={handleLogout} variant="link">
          Log Out
        </Button>
      </div>
    </>
  );
}
