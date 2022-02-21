import React, { useRef } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import PlantBackground from "../assets/plants.jpeg";
import Footer from "../components/organisms/Footer";
import { useState } from "react";
import "./Login.css";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { login } from "../firebase/firebase-config";

export default function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/profile");
    } catch {
      setError("Failed to Sign In");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="hero-container">
        <img className="background-image" src={PlantBackground} />
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
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
              <Button
                disabled={loading}
                className="signup-button"
                type="submit"
              >
                Sign In
              </Button>
            </Form>
          </Card.Body>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/sign-up">Sign Up</Link>
          </div>
        </Card>
      </div>
      <Footer></Footer>
    </>
  );
}
