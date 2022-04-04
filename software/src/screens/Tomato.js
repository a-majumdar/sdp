import React, { useContext, useEffect } from "react";
import "../App.css";
import "./SearchPage.css";
import Footer from "../components/organisms/Footer";
import { theUserSearch } from "./Explore";
import PlantBackground from "../assets/ePlant.jpg";
import { PlantDataContext } from "../contexts/PlantDataContext";
import "../screens/SearchPage.css";
import { PropagatorContext } from "../contexts/PropagatorContext";
import { useState } from "react";
import { getDatabase, ref, set, update } from "firebase/database";

import "reactjs-popup/dist/index.css";

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
    plantIdAura,
    plantDescription,
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

  const { propId } = useContext(PropagatorContext);
  const [addedToPropagator, setAddedToPropagator] = useState(false);

  const fileNameExt = commonName + ".jepg";
  console.log(fileNameExt);

  const addToPropagator = () => {
    setAddedToPropagator(true);
    const db = getDatabase();
    set(ref(db, "Propagator_Details/" + propId), {
      plantId: plantIdAura,
    });
  };

  return (
    <>
      <>
        <div className="all-items-explore">
          <div className="left-div-image-add-to-prop">
            {/* Will get rid of these breaks but it was a quick fix to get the header alligned prooperly */}

            <img
              className="image2"
              src={require("../assets/Tomato.jpeg")}
            ></img>
            <button onClick={addToPropagator} className="add-to-prop-btn">
              Add to Propagator
            </button>
            {addedToPropagator && (
              <p style={{ color: "white" }}>Added to propagator.</p>
            )}
            <h1>Plant Id: 0</h1>
            {/* This isn't dynamic yet */}
          </div>
          <div className="right-div">
            <h2 className="plant-name">Tomato Plant</h2>
            <p>
              The tomato is one of the most popular vegetables. They are easy to
              grow, cheap and healthy. Moreover, they can be used and processed
              in many different ways. They can be used in soups, sauces, salads
              and are delicious on bread. The tomato comes from the same family
              as chili peppers, potatoes, squash and tobacco. This family is
              called the nightshade family (Solanaceae).
              {/* <Link
                  to={{ pathname: "https://en.wikipedia.org/wiki/Tomato" }}
                  target="_blank"
                  style={{ margin: 10 }}
                >
                  To Wiki
                </Link> */}
            </p>
            <br></br>

            {/* Need to make this work dynamically */}
            <h2>Optimal plant conditions</h2>
            <div className="all-plant-info">
              <div className="plant-info">
                <p className="data">Tomato</p>
                <p className="data">Plant Name: Solanum lycopersicum</p>
                <p className="data">Humidity is: Low</p>
                <p className="data">Watering is: Frequent</p>
              </div>
              <div className="plant-info">
                <p className="data">pH low is: 6.2</p>
                <p className="data">pH high is: 6.8</p>
                <p className="data">Temp Low is: 18</p>
                <p className="data">Temp High is: 30</p>
                <p className="data">Light is: High</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </>
  );
}
