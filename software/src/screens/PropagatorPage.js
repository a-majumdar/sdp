import React, { useState, useContext, useEffect } from "react";
import { Slider } from '@material-ui/core'
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
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
  const [val, setVal] = useState([10])
  const updateRange=(e, data)=>{
      setVal(data)
  }
  const [val2, setVal2] = useState([10])
  const updateRange2=(e, data)=>{
      setVal2(data)
  }
  return (
    <>
      {/* 
      <img className="background-image" src={PlantBackground}></img>
      */}
      <img class="propPageTitle" src={yourProp} alt="Logo" />
      <br></br>
      <h1>Welcome, {currentUserEmail}</h1>
      
      <br></br>
      
      <div class="mycont">
      <div class="divData">
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
        <button class="but4">Set Conditions Back to Default</button>
        </div>



      <div class="box">
        <figure>
        <figcaption class="mycaption">Propagator ID: {propId}</figcaption>
          <figcaption class="mycaption">
            ID of Plant Currently Growing: {plantIdWeb}
          </figcaption>
          <img class="picRight" src={plant} alt="Logo" />
          
        </figure>
        </div>
        
        </div>

      

      <div class ="slider1">
      <h2> Position: Rotation {val}</h2>
      <Slider
      
      value={val}
      step={10}
      onChange = {updateRange}
      />
      </div>
      <div class ="slider2">
      <h2>Position: Tilt {val2}</h2>
      <Slider
      
      value={val2}
      step={10}
      onChange = {updateRange2}
      />
      </div>

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
