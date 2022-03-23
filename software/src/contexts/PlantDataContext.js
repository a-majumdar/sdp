import React, { createContext, useContext, useRef, useState } from "react";
import "../App.css";
import Cards from "../components/organisms/expCards";
import Footer from "../components/organisms/Footer";
import { Card, Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import PlantBackground from "../assets/explr.jpg";
import neo4j from "neo4j-driver";
import { Button } from "../components/atoms/Button";
import { Link, useLocation } from "react-router-dom";

/**
 * This Context keeps all the information about the plant from the search engine so we can use it anywhere in our application
 * Main classes that use this are explore and SearchPage
 */
export const PlantDataContext = createContext();

export const PlantDataProvider = ({ children }) => {
  //Plant Info Props
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
