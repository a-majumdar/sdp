import React, { createContext, useState } from "react";
import "../App.css";

/**
 * This Context keeps all the information about the plant from the search engine so we can use it anywhere in our application
 * Main classes that use this are explore and SearchPage
 */
export const PlantDataContext = createContext();

export const PlantDataProvider = ({ children }) => {

  //All info regarding a specific Plant from the Neo4j Database
  //These are saved in states and can be used across our application
  const [plantIdAura, setPlantIdAura] = useState("");
  const [plantDescription, setPlantDescription] = useState("");
  const [plantName, setPlantName] = useState("");
  const [higherNode, setHigherNode] = useState("");
  const [commonName, setCommonName] = useState("");
  const [moistureType, setMoistureType] = useState("");
  const [watering, setWatering] = useState("");
  const [light, setLight] = useState("");
  const [tempHigh, setTempHigh] = useState("");
  const [humidity, setHumidity] = useState("");
  const [phHigh, setPhHigh] = useState("");
  const [tempLow, setTempLow] = useState("");
  const [pHLow, setPhLow] = useState("");

  const [theUserSearch, setUserSearch] = useState("");

  return (
    <PlantDataContext.Provider
      value={{
        plantName,
        plantIdAura,
        setPlantIdAura,
        plantDescription,
        setPlantDescription,
        setPlantName,
        setHigherNode,
        setCommonName,
        setMoistureType,
        setWatering,
        setLight,
        setTempLow,
        setTempHigh,
        setHumidity,
        setPhHigh,
        setPhLow,
        higherNode,
        commonName,
        moistureType,
        watering,
        light,
        tempHigh,
        humidity,
        phHigh,
        tempLow,
        pHLow,
        theUserSearch,
        setUserSearch,
      }}
    >
      {children}
    </PlantDataContext.Provider>
  );
};
