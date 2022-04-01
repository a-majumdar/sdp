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
      {commonName && (
        <>
          <div className="all-items-explore">
            <div className="left-div-image-add-to-prop">
              {/* Will get rid of these breaks but it was a quick fix to get the header alligned prooperly */}

              {commonName && (
                <img
                  className="image2"
                  src={require("../assets/" + commonName + ".jpeg")}
                ></img>
              )}
              <button onClick={addToPropagator} className="add-to-prop-btn">
                Add to Propagator
              </button>
              {addedToPropagator && (
                <p style={{ color: "white" }}>Added to propagator.</p>
              )}
              <h1>Plant Id: {plantIdAura}</h1>
              {/* This isn't dynamic yet */}
            </div>
            <div className="right-div">
              <h2 className="plant-name">{commonName} Plant</h2>
              <p>
                {plantDescription}
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
                  <p className="data">{commonName}</p>
                  <p className="data">{plantName}</p>
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
      )}
    </>
  );
}
