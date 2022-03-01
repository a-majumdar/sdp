import React, { useEffect, useState, createContext } from "react";
import { auth } from "../firebase/firebase-config";

/**
 * This Class Acts as an Authentication Context for all our other classes in our application
 * It means we are able to access any constants in here throughout our application without having to pass them as props.
 * Children just means that we are passing an object which in our case is our other pages in our website
 */
export const PropagatorContext = createContext();

export const PropagatorProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [propagatorHasPlant, setPropagatorHasPlant] = useState(true);

  function getDetails() {}

  useEffect(() => {}, []);

  //Here we keep track of current user and render our children (child pages)
  return (
    <PropagatorContext.Provider value={{ propagatorHasPlant }}>
      {loading && children}
    </PropagatorContext.Provider>
  );
};
