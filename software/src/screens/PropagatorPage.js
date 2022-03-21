import React, { useState, useContext, useEffect } from "react";
import { Slider } from "@material-ui/core";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import PlantBackground from "../assets/back.jpg";
import abuta from "../assets/abuta.jpg";
import creambg from "../assets/creambg.jpg";
import graybg from "../assets/graybg.png";
import greenbg from "../assets/greenbg.png";
import sun from "../assets/sun.png";
import tempic from "../assets/thermom.png";
import humid from "../assets/humid.png";
import moist from "../assets/moist.png";
import "../screens/PropagatorPage.css";
import Footer from "../components/organisms/Footer";
import plant from "../assets/greenplant.jpg";
import yourProp from "../assets/yourProp.jpg";
import { AuthContext } from "../contexts/AuthContext";
import { Switch } from "antd";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  orderByChild,
  equalTo,
  query,
  push,
} from "firebase/database";
import {
  PropagatorContext,
  PropogatorContext,
} from "../contexts/PropagatorContext";
import { Line } from "react-chartjs-2";

/**
 * Propogator Section of Our Website
 * @returns
 */

export default function MyProp() {
  const { currentUserUID, currentUserEmail } = useContext(AuthContext);
  const [tempData, setTempData] = useState([]);

  const {
    plantIdWeb,
    propId,
    humidity,
    moisture,
    prop_detials,
    plantCommonName,
    sunlight,
    temperature,
  } = useContext(PropagatorContext);

  /**  ********IN PROGRESS***********
   * This Function gets the (most recent) temperature data from the realtime database and stores it as a list of objects
   * Then, eventually we will use this to display the information in a graph.
   */
  const getTempData = () => {
    setTempData([]);
    const db = ref(getDatabase());
    get(child(db, `Humidity_Temperature_Readings/${propId}`)).then(
      (snapshot) => {
        snapshot.forEach((snapshot) => {
          //Need to change this to the latest 200 Readings for example... Once we have more data...
          const temp1 = snapshot.val().Temperature;
          const time = snapshot.val().Sample_Time;
          const timeNum = new Date().getTime(time);
          tempData.push({ time: timeNum, temp: temp1 });
        });
      }
    );
    console.log(tempData);
  };

  useEffect(() => {
    getTempData();
  }, []);

  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 600, pv: 2600, amt: 1800 },
    { name: "Page C", uv: 800, pv: 2800, amt: 1200 },
  ];

  return (
    <>
      {/*
      <img className="background-image" src={PlantBackground}></img>
      */}
      <div className="bigcontainer">
        <div className="background-image"></div>
        <div class="leftsection">
          <h2> Welcome, {currentUserEmail}!</h2>
          <h2 className="plantmsg">
            Here's how your NAME OF PLANT plant is doing:{" "}
          </h2>
          <div className="yourPlantPic">
            <img class="plantpic" src={abuta} alt="Logo" />
          </div>
          <p>
            Common Name is: Abuta plant Name: Menispermaceae Humidity is: low
            Watering is: frequent
            <br></br>
            pH Low is: 6.2 pH High Is: 6.8 Temp Low is: 18 Temp High is: 30
            Light is: high
          </p>
        </div>

        <div className="rightsection">
          <div className="all-data-display">
            <div className="info-display">
              <h2 className="data-header">Temperature </h2>
              <p className="data">{temperature}</p>
            </div>
            <div className="info-display">
              <h2 className="data-header">Sunlight </h2>
              <p className="data">{sunlight}</p>
            </div>
            <div className="info-display">
              <h2 className="data-header">Moisture </h2>
              <p className="data">{moisture}</p>
            </div>
            <div className="info-display">
              <h2 className="data-header">Humidity </h2>
              <p className="data">{humidity}</p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* big container */}
      <Footer />
    </>
  );
}
