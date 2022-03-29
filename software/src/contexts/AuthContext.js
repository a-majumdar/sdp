import React, { useEffect, useState, createContext } from "react";
import { auth } from "../firebase/firebase-config";

/**
 * This Class Acts as an Authentication Context for all our other classes in our application
 * It means we are able to access any constants in here throughout our application without having to pass them as props.
 * Children just means that we are passing an object which in our case is our other pages in our website
 */
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); //current user of our application
  const [currentUserEmail, setCurrentUserEmail] = useState(""); // users email
  const [currentUserUID, setCurrentUserUID] = useState(""); //users UID
  const [loading, setLoading] = useState(true); //used to create a loading state while doing external calls to databases ect.

  /**
   * This function updates the state of our current user when a user logs in and logs out
   * Saves current user, their email and their user ID so we can use it elsewhere in our application
   */
  const updateProfile = auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
    setCurrentUserEmail(user.email);
    console.log(user);
    console.log(currentUser);
    setCurrentUserUID(user.uid);
    setLoading(false);
    return updateProfile;
  });

  /**
   * I don't think we need this but please do not delete just in case we get errors
   */
  // useEffect(() => {
  //   if (auth.currentUser == null) {
  //     setCurrentUser("");
  //     console.log("Use effect in Auth Context is Running");
  //     setCurrentUserUID("");
  //     setCurrentUserEmail("");
  //     setLoading(false);
  //   } else {
  //     updateProfile();
  //   }
  // }, []);

  //Here we keep track of current user and render our children (child pages)
  return (
    <AuthContext.Provider
      value={{ currentUser, currentUserUID, currentUserEmail }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
