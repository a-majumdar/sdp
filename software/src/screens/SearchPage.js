import React, { useContext } from "react";
import "../App.css";
import Footer from "../components/organisms/Footer";
import SearchPageSection from "../components/organisms/contentSections/SearchPageSection";
import { theUserSearch } from "./Explore";
import PlantBackground from "../assets/ePlant.jpg";
import { PlantDataContext } from "../contexts/PlantDataContext";
/**
 * About Us Section of our website
 * @returns
 */

const mystyle = {
  color: "white",
  textAlign: "center",
  textAlignVertical: "center",
  fontSize: "45px",
  padding: "10px",
};

export default function SearchPage() {
  const {
    plantName,
    setPlantName,
    setHigherNode,
    setPhLow,
    setTempLow,
    setPhHigh,
    setMoistureType,
    tempHigh,
    setTempHigh,
    setLight,
    setWatering,
    setHumidity,
    setCommonName,
    higherNode,
    commonName,
    moistureType,
    watering,
    light,
    humidity,
    phHigh,
    tempLow,
    pHLow,
  } = useContext(PlantDataContext);

  return (
    <>
      {/* <p>stuff is belwo {theUserSearch}</p> */}
      {/* <div>{location.state.name}</div> */}
      <div className="hero-container">
        <img className="background-image" src={PlantBackground}></img>
        <h1> Search Results</h1>
        <p>{plantName}</p>
        <p>{higherNode}</p>
        <p>{commonName}</p>
        <p>{humidity}</p>
        <p>{watering}</p>
        <p>{light}</p>
        {/* <p>{tempHigh}</p>
        <p>{moistureType}</p>
        <p>{phHigh}</p>
        <p>{tempLow}</p>
        <p>{pHLow}</p> */}

        <div className="hero-btns"></div>
      </div>
      <Footer />
    </>
  );
}
