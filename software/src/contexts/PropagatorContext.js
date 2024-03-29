import { child, get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState, createContext, useContext } from "react";
import { AuthContext } from "./AuthContext";
import neo4j from "neo4j-driver";

/**
 * This Class Acts as an Propagator Context for all our other classes in our application
 * It means we are able to access any constants in here throughout our application without having to pass them as props.
 * Children just means that we are passing an object which in our case is our other pages in our website
 * Here we keep the state of our propagator and all the readings that we get from the database.
 */
export const PropagatorContext = createContext();

export const PropagatorProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [propagatorHasPlant, setPropagatorHasPlant] = useState(false); //Does a propagator have a plant planted at the moment
  const { currentUserUID } = useContext(AuthContext); //What is the ID of the current user
  const [propId, setPropId] = useState(""); //What is the propagator ID for the current user
  const [plantIdWeb, setPlantIdWeb] = useState(); //What is the Plant ID the user is growing
  const [humidity, setHumidity] = useState();
  const [moisture, setMoisture] = useState();
  const [prop_detials, setPropDetails] = useState();
  const [sunlight, setSunlight] = useState();
  const [temperature, setTemperature] = useState();
  const [plantCommonName, setPlantCommonName] = useState();
  const [description, setDescription] = useState();

  /**
   * This function queries the Realtime database and gets all the realtime information from the sensors on our propagator and stores them
   * in a state of our application.
   */
  function getAllInfo() {
    const db = ref(getDatabase());
    const uri = "neo4j+s://28cce6ce.databases.neo4j.io";
    const user = "neo4j";
    const password = "sdpgroup22isthebest";
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session();
    console.log("user id: " + currentUserUID);
    // get propagator id from user id
    get(child(db, `User_Propagator_relations/${currentUserUID}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          var propagatorId = snapshot.val().propagatorId;
          setPropId(propagatorId);
        } else {
          console.log("No propagator data available");
        }
        return propagatorId;
      })
      .then((propagatorId) =>
        Promise.all([
          //get plant id through propagator id
          get(child(db, `Propagator_Details/${propagatorId}`))
            .then((propagatorId) => {
              if (propagatorId.exists()) {
                var plantId = propagatorId.val().plantId;
                setPlantIdWeb(plantId);
              } else {
                console.log("No plant data available");
              } //This Part Gets information from the Neo4j DB regarding the plant that the user is currently growing

              return `match (n:Species) -[:In]-> (p) -[:In]->(l) -[:In] ->(z) -[:In]->(k) -[:In]->(q)
        where ID(n) = ${plantId}
        return n.name as plant,n.common as common,n.description as description, p.name as a,l.name as b,z.name as c ,k.name as d,q.name as e`;
            })
            .then((auraquery) => {
              try {
                const readResult = session.readTransaction((tx) =>
                  tx.run(auraquery)
                );
                return readResult;
              } catch (error) {
                console.error("Something went wrong: ", error);
              }
            })
            .then((readResult) => {
              readResult.records.forEach((record) => {
                //get all plant information from plant id
                var PlantCommon = record.get("common");
                var description = record.get("description");
                console.log(description);
                setPlantCommonName(PlantCommon);
                setDescription(description);
              });
            }),
          //get latest humidity and temperature reading
          get(child(db, `Humidity_Temperature_Readings/${propagatorId}`)).then(
            (ans) => {
              if (ans.exists()) {
                var humidity = Object.values(ans.val()).slice(-1)[0].Humidity;
                var temperature = Object.values(ans.val()).slice(-1)[0]
                  .Temperature;
                setHumidity(humidity);
                setTemperature(temperature);
              } else {
                console.log("No humidity temperature data available");
              }
            }
          ),
          //get latest light reading
          get(child(db, `Light_Reading/${propagatorId}`)).then((ans) => {
            if (ans.exists()) {
              var lightintensity = Object.values(ans.val()).slice(-1)[0]
                .intensity;
              setSunlight(lightintensity);
            } else {
              console.log("No light data available");
            }
          }),
          //get latest moisture reading
          get(child(db, `Moisture_Readings/${propagatorId}`)).then((ans) => {
            if (ans.exists()) {
              var moisturevalue = Object.values(ans.val()).slice(-1)[0]
                .Moisture_value;
              var moisturestatus = Object.values(ans.val()).slice(-1)[0].Status;
              setMoisture(moisturevalue);
            } else {
              console.log("No moisture data available");
            }
          }),
        ])
      );
  }

  useEffect(() => {
    getAllInfo(propId);
  });

  //Here we keep track of current user and render our children (child pages)
  return (
    <PropagatorContext.Provider
      value={{
        propagatorHasPlant,
        propId,
        plantIdWeb,
        setPlantIdWeb,
        humidity,
        description,
        moisture,
        prop_detials,
        sunlight,
        temperature,
        plantCommonName,
      }}
    >
      {loading && children}
    </PropagatorContext.Provider>
  );
};
