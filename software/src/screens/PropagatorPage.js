import React, { useState, useContext, useEffect } from "react";
import { Slider } from '@material-ui/core'
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
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
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



const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
      thumb:{
      color: "#3399ff",
      },
      
      track: {
        color: 'red'
      },
      rail: {
        color: 'black'
      }
    }
}
});
/**
 * Propogator Section of Our Website
 * @returns
 */

 const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male"},
]
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
  const[toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  }
  const[wtoggle, setwToggle] = useState(false);
  const wtoggler = () => {
    toggle ? setwToggle(false) : setwToggle(true);
  }
 

  
  return (
    <>
      {/* 
      <img className="background-image" src={PlantBackground}></img>
      */}
    <div className="bigcontainer">
    <img className="background-image" src={greenbg}></img>
    <div class="leftsection">
    <h1> Welcome, {currentUserEmail}!</h1>
    <h2 className="plantmsg">Here's how your {plantCommonName} plant is doing: </h2>
      <div className="yourPlantPic">
        <img class="plantpic" src={abuta} alt="Logo" />
      </div>
        <p>Common Name is: Abuta 
            plant Name: Menispermaceae
            Humidity is: low 
            Watering is: frequent
            <br></br>
            pH Low is: 6.2
            pH High Is: 6.8
            Temp Low is: 18
            Temp High is: 30
            Light is: high</p>
    </div>

    
    <div className="rightsection">
    <div className="outTable">
      <table>
        <tr class = "ab">
          <th>{<img class="sun" src={sun} alt="Logo" />}</th>
          <th class="suntext">Sunlight</th>
          <th class="suntext">{sunlight}</th>
        </tr>
        <tr class = "ab">
          <td>{<img class="sun" src={tempic} alt="Logo" />}</td>
          <td class="suntext">Temperature</td>
          <td class="suntext">{temperature}</td>
        </tr>
        <tr class = "ab">
          <td>{<img class="sun" src={humid} alt="Logo" />}</td>
          <td class="suntext">Humidity</td>
          <td class="suntext">{humidity}</td>
        </tr>
        <tr class = "ab">
          <td>{<img class="sun" src={moist} alt="Logo" />}</td>
          <td class="suntext">Moisture</td>
          <td class="suntext">{moisture}</td>
        </tr>
      </table>
    </div>

    

      
      <div class="menu">
      <div className="ventCont">
        <div className="vent">
          <h2>Vent</h2>
        </div>
        <div class ="toggleVent">
          <Switch onClick={toggler}/>
        </div>
        <h2 className="pos">Position</h2>
      </div>
      
      
      
        
        
     
      


      <div class ="slider2">
        
        <div class = "sliderbar2">
          <Slider
            value={val2}
            step={10}
            valueLabelDisplay="on"
            onChange = {updateRange2}
          />
        </div>
      </div>

      <div className="waterCont">
        <div className="watertext">
          <h2>Watering</h2>
        </div>
        <div class ="togglewater">
          <Switch onClick={wtoggler}/>
        </div>
      </div>
      </div>
      </div> {/* rigt section */}
      </div> {/* big container */}


      <Footer />
    </>
  );
}
