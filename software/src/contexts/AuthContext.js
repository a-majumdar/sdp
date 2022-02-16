import React, { useContext, useState } from "react";
import { auth } from "../firebase/firebase-config";
import { useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signUp = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
  };

  const logIn = (email, password) => {
    auth.signInWithEmailAndPassword(email, password);
  };

  function logOut() {
    return auth.signOut();
  }

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
