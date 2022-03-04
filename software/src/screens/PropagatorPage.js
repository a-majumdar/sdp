import React, { useState, useContext, useEffect } from "react";

import { Card, Form, Button, Alert } from "react-bootstrap";
import PlantBackground from "../assets/back.jpg";
import "../screens/PropagatorPage.css";
import Footer from "../components/organisms/Footer";
import plant from "../assets/greenplant.jpg";
import yourProp from "../assets/yourProp.jpg";
import { AuthContext } from "../contexts/AuthContext";

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
/**
 * Propogator Section of Our Website
 * @returns
 */
export default function MyProp() {
  const { currentUserUID, currentUserEmail } = useContext(AuthContext);
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

  const [mystyle, setStyle] = useState("but1");
  const changeStyle = () => {
    //oprn button
    console.log("you just clicked");
    setStyle("cont");
    setStyle2("but3");
  };
  const [mystyle2, setStyle2] = useState("but3");
  const changeStyle2 = () => {
    //closed button
    console.log("you just clicked");
    setStyle2("cont2");
    setStyle("but1");
  };

  return (
    <>
      <img className="background-image" src={PlantBackground}></img>
      <img class="propPageTitle" src={yourProp} alt="Logo" />
      <br></br>
      <h1>Welcome, {currentUserEmail}</h1>
      <br></br>

      <div class="box">
        <figure>
          <img class="picRight" src={plant} alt="Logo" />
          <figcaption class="mycaption">Propagator ID: {propId}</figcaption>
        </figure>
        <p class="one">
          You are currently growing - {plantCommonName}
          <br></br>
          Temperature - {temperature} <br></br>
          <button class="but1">-</button>
          <button class="but3">+</button>
          <br></br>
          Sunlight - {sunlight}
          <br></br>
          <button class="but1">Low</button>
          <button class="but3">Medium</button>
          <button class="but3">High</button>
          <br></br>
          Humidity - {humidity}
          <br></br>
          <button class="but1">-</button>
          <button class="but3">+</button>
          <br></br>
          Moisture - {moisture}
          <br></br>
          <button class="but1">Water</button>
          <br></br>
          Ventilation - {/* Whether vent is open or not  */}
          <br></br>
          <button className={mystyle} onClick={changeStyle}>
            Open
          </button>
          <button className={mystyle2} onClick={changeStyle2}>
            Closed
          </button>
          <br></br>
        </p>
      </div>

      <button class="but4">Set Conditions Back to Default</button>

      {/*
      <h1>Your plant,</h1>
      <div className="container">
      <img 
      className='img'
      src={plant} alt="Logo" 
      />
      </div>
       style={{width:'25%', height:"28"}}
      <p>Tempertature</p>
      {/* 
      <p>Sunlight</p>
      <p>Soil pH</p>
      <p>Moisture</p>
      <p>Humidity</p>
      <p>Ventilation</p>
      */}

      <Footer />
    </>
  );
}
