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
  const [isLinked, setIsLinked] = useState(false);

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

  function linkPropogator() {
    //To Implement
  }

  const value = {
    currentUser,
    isLinked,
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
