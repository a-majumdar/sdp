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

export const PlantDataContext = createContext();

export const PlantDataProvider = ({ children }) => {
  //Plant Info Props
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
