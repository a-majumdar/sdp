import React, { useRef } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import PlantBackground from "../assets/plants.jpeg";
import Footer from "../components/organisms/Footer";
import { useState } from "react";
import "./SignUp.css";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import {
  addUserPropagatorRelations,
  auth,
  createUser,
} from "../firebase/firebase-config";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const propID = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  
  /**
   * @param {e} e event listner (activate when the user clicks sign up)
   * @returns Signs the user up to firebaseAuth and also links their propogator Id provided during
   * signup to their userId (uid)
   */
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) { //Check 1 Passwords Match?
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true); //This is used in the submit button so that the user can't click submit twice and mess up the request
      await createUser(emailRef.current.value, passwordRef.current.value); //Fetches createUser function from firebase-config.js
      await addUserPropagatorRelations(auth.currentUser.uid, propID.current.value); //Adds data to the database using function from firebase-config.js
      history.push("/profile");
    } catch {
      setError("Failed to create an account"); //For any reason, we fail to create the account
    }
    setLoading(false);
  }

  return (
    <>
      <div className="hero-container">
        <img className="background-image" src={PlantBackground} />
        <Card className="card">
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <Form.Group id="prop-id">
                <Form.Label>Propogator ID</Form.Label>
                <Form.Control ref={propID} required />
              </Form.Group>
              <Button
                disabled={loading}
                className="signup-button"
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
          </Card.Body>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </Card>
      </div>
      <Footer></Footer>
    </>
  );
}
