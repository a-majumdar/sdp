import React, { useContext, useEffect } from "react";
import "../App.css";
import Footer from "../components/organisms/Footer";
import { theUserSearch } from "./Explore";
import PlantBackground from "../assets/ePlant.jpg";
import { PlantDataContext } from "../contexts/PlantDataContext";
import "../screens/SearchPage.css";
import { Link } from "react-router-dom";
import { PropagatorContext } from "../contexts/PropagatorContext";
import { useState } from "react";
import Tomato from "../assets/Tomato.jpeg";

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
      <div className="all-items-explore">
        <div className="left-div-image-add-to-prop">
          {/* Will get rid of these breaks but it was a quick fix to get the header alligned prooperly */}

          <img className="image" src={Tomato}></img>
          <button className="add-to-prop-btn">Add to Propagator</button>
        </div>
        <div className="right-div">
          <h2 className="plant-name">{commonName} Plant</h2>
          <p>
            The tomato is the edible berry of the plant Solanum lycopersicum,
            commonly known as a tomato plant. The species originated in western
            South America and Central America. The Mexican Nahuatl word tomatl
            gave rise to the Spanish word tomate, from which the English word
            tomato derived. Its domestication and use as a cultivated food may
            have originated with the indigenous peoples of Mexico. The Aztecs
            used tomatoes in their cooking at the time of the Spanish conquest
            of the Aztec Empire, and after the Spanish encountered the tomato
            for the first time after their contact with the Aztecs, they brought
            the plant to Europe, in a widespread transfer of plants known as the
            Columbian exchange. From there, the tomato was introduced to other
            parts of the European-colonized world during the 16th century.
            <Link
              to={{ pathname: "https://en.wikipedia.org/wiki/Tomato" }}
              target="_blank"
              style={{ margin: 10 }}
            >
              To Wiki
            </Link>
          </p>
          <br></br>

          {/* Need to make this work dynamically */}
          <h2>Optimal plant conditions</h2>
          <div className="all-plant-info">
            <div className="plant-info">
              <p className="data">{commonName}</p>
              <p className="data">{plantName}</p>
              <p className="data">{higherNode}</p>
              <p className="data">{humidity}</p>
              <p className="data">{watering}</p>
            </div>
            <div className="plant-info">
              <p className="data">{pHLow}</p>
              <p className="data">{phHigh}</p>
              <p className="data">{tempLow}</p>
              <p className="data">{tempHigh}</p>
              <p className="data">{light}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
