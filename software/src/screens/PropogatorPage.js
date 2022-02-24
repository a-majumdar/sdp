import React, { useState, useContext , useEffect} from "react";

import { Card, Form, Button, Alert } from "react-bootstrap";
import PlantBackground from "../assets/back.jpg";
import "../screens/PropogatorPage.css";
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
import { PropogatorContext } from "../contexts/PropogatorContext";
/**
 * Propogator Section of Our Website
 * @returns
 */
export default function MyProp() {
  const [humidity, setHumidity] = useState();
  const [moisture, setMoisture] = useState();
  const [prop_detials, setPropDetails] = useState();
  const [sunlight, setSunlight] = useState();
  const [temperature, setTemperature] = useState();
  const { currentUserUID, currentUserEmail } = useContext(AuthContext);
  const [propId, setPropId] = useState("");
  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db);
    var propagatorId = null;

    get(child(dbRef, "User_Propogator_relations/" + currentUserUID))
      .then((snapshot) => {
        //Creates a snapshot (what value is at that current location)
        if (snapshot.exists) {
          propagatorId = snapshot.val().propagatorId;
          setPropId(propagatorId); //Sets our useState to the propogatorId we just found to corrsepond to the user
        } else {
          alert("No data found!");
        }
      })
      .catch((error) => {
        alert("unsuccessful, error" + error);
      });
  });

  const [mystyle, setStyle] = useState("but1");
  const changeStyle = () => { //oprn button
    console.log("you just clicked");
    setStyle("cont");
    setStyle2("but3")
  };
  const [mystyle2, setStyle2] = useState("but3");
  const changeStyle2 = () => { //closed button
    console.log("you just clicked");
    setStyle2("cont2");
    setStyle("but1");
  };

  

  return (
    <>
      <img className="background-image" src={PlantBackground}></img>
      <img 
      class="propPageTitle"
      src={yourProp}
      alt="Logo"
      />
      <br></br>
      <h1 >Welcome, {currentUserEmail}</h1>
      <br></br>

      <div class="box">
      <figure>
        <img
          class="picRight"
          src={plant}
          alt="Logo"
          
        />
        <figcaption class="mycaption">Propagator ID: {propId}</figcaption>
        </figure>
        <p class="one">Temperature - {/* The reading  */} <br></br><button class="but1">-</button><button class="but3">+</button><br></br>
        Soil pH - {/* The reading  */}<br></br><button class="but1">Adjust Conditions </button><br></br>
        Sunlight - {/* The reading  */}<br></br><button class="but1">-</button><button class="but3">+</button><br></br>
        Humidity - {/* The reading  */}<br></br><button class="but1">-</button><button class="but3">+</button><br></br>
        Moisture - {/* The reading  */}<br></br><button class="but1">Water</button><br></br>
        Ventilation - {/* The reading  */}<br></br><button className={mystyle} onClick={changeStyle} >Open</button><button className={mystyle2} onClick={changeStyle2}>Closed</button><br></br></p>
        
      </div>

      <button class="but2">Set Conditions Back to Default</button>

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
