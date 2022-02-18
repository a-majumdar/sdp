import React from "react";
import "../App.css";
import { Card, Button, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./ProfilePage.css";
import Footer from "../components/organisms/Footer";

export default function ProfilePage() {
  const [error, setError] = useState();
  const { currentUser, logOut, isLinked } = useAuth();
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

  if (isLinked) {
    return <h1>{currentUser.email} has linked their propogator</h1>;
  } else {
    return (
      <>
        <div className="username">
          <h1>
            Hello, {currentUser.email} you're almost ready to start growing!
            <button onClick={handleLogout}>Log Out</button>
          </h1>
        </div>
        <Card className="card_prop">
          <Card.Body>
            <h2 className="text-center mb-4">
              1 more step, link your propogator
            </h2>
            <Form>
              <Form.Group>
                <Form.Label>Propogator Code</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group>
                <Form.Label>Give a name to your propogator</Form.Label>
                <Form.Control />
              </Form.Group>
              <Button className="link-button" to="/">
                Link it!
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Footer></Footer>
      </>
    );
  }
}
