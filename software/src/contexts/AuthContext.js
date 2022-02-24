import React, { useEffect, useState, createContext } from "react";
import { auth } from "../firebase/firebase-config";

/**
 * This Class Acts as an Authentication Context for all our other classes in our application
 * It means we are able to access any constants in here throughout our application without having to pass them as props.
 * Children just means that we are passing an object which in our case is our other pages in our website
 */
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [currentUserUID, setCurrentUserUID] = useState("");
  const [propID, setCurrentPropID] = useState("");
  const [loading, setLoading] = useState(true);

  const updateProfile = auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
    setCurrentUserEmail(user.email);
    console.log(user);
    console.log(currentUser);
    setCurrentUserUID(user.uid);
    setLoading(false);
    return updateProfile;
  });

  useEffect(() => {
    if (auth.currentUser == null) {
      setCurrentUser("");
      setCurrentUserUID("");
      setCurrentUserEmail("");
      setLoading(false);
    } else {
      updateProfile();
    }
  }, []);

  //Here we keep track of current user and render our children (child pages)
  return (
    <AuthContext.Provider
      value={{ currentUser, currentUserUID, currentUserEmail }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
