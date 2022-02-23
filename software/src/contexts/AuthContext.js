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

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser); //Set User so our app keeps track if someone is logged in
  }, []);

  //Here we keep track of current user and render our children (child pages)
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
