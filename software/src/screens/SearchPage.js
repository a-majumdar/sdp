import React, { useContext, useEffect } from "react";
import "../App.css";
import Footer from "../components/organisms/Footer";
import SearchPageSection from "../components/organisms/contentSections/SearchPageSection";
import { theUserSearch } from "./Explore";
import PlantBackground from "../assets/ePlant.jpg";
import { PlantDataContext } from "../contexts/PlantDataContext";
import "../screens/SearchPage.css";
import { Link } from "react-router-dom";
import { PropagatorContext } from "../contexts/PropagatorContext";
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
      <img className="background-image" src={PlantBackground}></img>
      <div className="hero-container">
        <br></br>
        {/* Will get rid of these breaks but it was a quick fix to get the header alligned prooperly */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 className="header"> Search Results</h1>
        <p>{commonName}</p>
        <p>{plantName}</p>
        <p>{higherNode}</p>
        <p>{humidity}</p>
        <p>{watering}</p>
        <p>{pHLow}</p>
        <p>{phHigh}</p>
        <p>{tempLow}</p>
        <p>{tempHigh}</p>
        <p>{light}</p>

        <Link to={"/MyProp"}>
          <button> Add to Propagator </button>
        </Link>

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
