import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { auth } from "../../firebase/firebase-config";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider() {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}></AuthContext.Provider>;
}
