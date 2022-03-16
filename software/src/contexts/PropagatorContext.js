import { child, get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState, createContext, useContext } from "react";
import { auth } from "../firebase/firebase-config";
import { AuthContext } from "./AuthContext";
import neo4j from "neo4j-driver";

/**
 * This Class Acts as an Authentication Context for all our other classes in our application
 * It means we are able to access any constants in here throughout our application without having to pass them as props.
 * Children just means that we are passing an object which in our case is our other pages in our website
 */
export const PropagatorContext = createContext();

export const PropagatorProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [propagatorHasPlant, setPropagatorHasPlant] = useState(false);
  const { currentUserUID } = useContext(AuthContext);
  const [propId, setPropId] = useState("");
  const [plantIdWeb, setPlantIdWeb] = useState();
  const [humidity, setHumidity] = useState();
  const [moisture, setMoisture] = useState();
  const [prop_detials, setPropDetails] = useState();
  const [sunlight, setSunlight] = useState();
  const [temperature, setTemperature] = useState();
  const [plantCommonName, setPlantCommonName] = useState();

  function getTempDataForGraph(propId) {
    const db = ref(getDatabase());
    get(child(db, `Humidity_Temperature_Readings/${propId}`)).then(
      (snapshot) => {
        var tempdata = [];
        snapshot.forEach((childSnapshot) => {
          var temperature = Object.values(childSnapshot).Temperature;
          console.log("ALJWDJKHWAKJDAWHDKJAHKWDHK");
        });
      }
    );
  }

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
          console.log("propagatorid: " + propagatorId);
        } else {
          console.log("No propagator data available");
        }
        return propagatorId;
        console.log("propogator Id is" + propagatorId);
      })
      .then((propagatorId) =>
        Promise.all([
          //get plant id through propagator id
          get(child(db, `Propagator_Details/${propagatorId}`))
            .then((propagatorId) => {
              if (propagatorId.exists()) {
                var plantId = propagatorId.val().plantId;
                setPlantIdWeb(plantId);
                console.log("plantId: " + plantId);
              } else {
                console.log("No plant data available");
              }
              return `match (n:Species) -[:In]-> (p) -[:In]->(l) -[:In] ->(z) -[:In]->(k) -[:In]->(q) 
        where ID(n) = ${plantId}
        return n.name as plant,p.name as a,l.name as b,z.name as c ,k.name as d,q.name as e`;
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
                var plantName = record.get("plant");
                console.log(`plant name: ${record.get("plant")}`);
                console.log(`in: ${record.get("a")}`);
                var PlantCommon = record.get("a");
                setPlantCommonName(PlantCommon);
                console.log(`in: ${record.get("b")}`);
                console.log(`in: ${record.get("c")}`);
                console.log(`in: ${record.get("d")}`);
                console.log(`in: ${record.get("e")}`);
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
                console.log(
                  "humidity: " + Object.values(ans.val()).slice(-1)[0].Humidity
                );
                console.log(
                  "temperature: " +
                    Object.values(ans.val()).slice(-1)[0].Temperature
                );
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
              console.log(
                "light intensity: " +
                  Object.values(ans.val()).slice(-1)[0].intensity
              );
              // .forEach((haha) => console.log(haha.Humidity))
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
              console.log(
                "moisture value: " +
                  Object.values(ans.val()).slice(-1)[0].Moisture_value
              );
              console.log(
                "moisture status: " +
                  Object.values(ans.val()).slice(-1)[0].Status
              );
            } else {
              console.log("No moisture data available");
            }
          }),
        ])
      );
  }

  useEffect(() => {
    getTempDataForGraph();
    getAllInfo();
  });

  //Here we keep track of current user and render our children (child pages)
  return (
    <PropagatorContext.Provider
      value={{
        propagatorHasPlant,
        propId,
        plantIdWeb,
        humidity,
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
