import React, { useRef } from "react";
import { Card, Form, Button, Container, Alert } from "react-bootstrap";
import Footer from "../components/organisms/Footer";
import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase-config";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged In With", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("User Signed Up,", user.email);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <label>Email</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">ARBITRATY ERROR MESSAGE</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">ARBITRARY PASSWORD ERROR MESSAGE</p>
        <button onClick={handleSignUp}>SIGN UP</button>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button>Sign In</button>
              <p>
                Don't have an account? <span>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button>Sign Up</button>
              <p>
                Have an account? <span>Sign In</span>
              </p>
            </>
          )}
        </div>
        <Footer></Footer>
      </div>
    </Container>
  );
}
