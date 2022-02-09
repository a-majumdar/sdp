import React, { useRef } from "react";
import { Card, Form, Button, Container, Alert } from "react-bootstrap";
import PlantBackground from "../assets/plants.jpeg";
import Footer from "../components/organisms/Footer";
import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase-config";
import "./SignUp.css";

export default function SignUp() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleSignIn = () => {
    clearErrors();
    auth.signInWithEmailAndPassword(email, password).catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleSignUp = () => {
    clearErrors();
    auth.createUserWithEmailAndPassword(email, password).catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  const handleLogout = () => {
    auth.signOut();
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <>
      <img className="background-image" src={PlantBackground}></img>
      <Container className="login" style={{ minHeight: "130vh" }}>
        <div className="loginContainer" style={{ maxWidth: "400px" }}>
          <label>Email</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button className="button" onClick={handleSignIn}>
                  Sign In
                </button>
                <p>
                  Don't have an account?
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    {" "}
                    Sign Up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button onClick={handleSignUp}>Sign Up</button>
                <p>
                  Have an account?
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    {" "}
                    Sign In
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}
