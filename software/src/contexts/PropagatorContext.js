import { child, get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState, createContext, useContext } from "react";
import { auth } from "../firebase/firebase-config";
import { AuthContext } from "./AuthContext";

/**
 * This Class Acts as an Authentication Context for all our other classes in our application
 * It means we are able to access any constants in here throughout our application without having to pass them as props.
 * Children just means that we are passing an object which in our case is our other pages in our website
 */
export const PropagatorContext = createContext();

export const PropagatorProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [propagatorHasPlant, setPropagatorHasPlant] = useState(true);
  const { currentUserUID } = useContext(AuthContext);
  const [propId, setPropId] = useState("");
  const [plantIdWeb, setPlantIdWeb] = useState();

  function getDetails() {}

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db);

    get(child(dbRef, "User_Propagator_relations/" + currentUserUID))
      .then((snapshot) => {
        //Creates a snapshot (what value is at that current location)
        if (snapshot.exists) {
          var propagatorId = snapshot.val().propagatorId;
          setPropId(propagatorId); //Sets our useState to the propogatorId we just found to corrsepond to the user
        } else {
          alert("No data found!");
        }
        return propagatorId;
      })
      .then((propagatorId) => {
        get(child(db, `Propagator_Details/${propagatorId}`)).then(
          (propagatorId) => {
            if (propagatorId.exists()) {
              console.log("1");
              var plantId = propagatorId.val().plantId;
              setPlantIdWeb(plantId);
            } else {
              console.log("2");
              console.log("No plant data available");
            }
          }
        );
      });
  }, []);

  //Here we keep track of current user and render our children (child pages)
  return (
    <PropagatorContext.Provider
      value={{ propagatorHasPlant, propId, plantIdWeb }}
    >
      {loading && children}
    </PropagatorContext.Provider>
  );
};
