import React, { useState, useContext, useEffect } from "react";
import abuta from "../assets/Abuta.jpg";
import { Slider } from "@material-ui/core";
import { Switch } from "antd";
import { createMuiTheme } from "@material-ui/core/styles";
import "../screens/PropagatorPage.css";
import Footer from "../components/organisms/Footer";
import { AuthContext } from "../contexts/AuthContext";
import "react-tabs/style/react-tabs.css";
import { PropagatorContext } from "../contexts/PropagatorContext";
import Tempgraph from "../screens/TempGraph";
import { PlantDataContext } from "../contexts/PlantDataContext";
import axios from 'axios';
const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "#3399ff",
      },

      track: {
        color: "red",
      },
      rail: {
        color: "black",
      },
    },
  },
});
/**
 * Propogator Section of Our Website
 * @returns
 */

export default function MyProp() {
  const { currentUserUID, currentUserEmail } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const {
    plantIdWeb,
    plantIdAura,
    propId,
    humidity,
    moisture,
    CartesianGrid,
    prop_detials,
    plantCommonName,
    sunlight,
    temperature,
  } = useContext(PropagatorContext);

  const { plantDescription } = useContext(PlantDataContext);
  // const ssh = (cmd) => {
  //   const SSH = require("simple-ssh");
  //     const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  //     console.log("inside the system " + thecmd);
  //     var ssh_options = new SSH({
  //       host: "abomasnow",
  //       user: "pi",
  //       pass: "r00t",
  //     });
  //     //'echo "!eVentOpen.py" > file.txt'
  //     ssh_options
  //       .exec(thecmd, {
  //         out: console.log.bind(console),
  //       })
  //       .start();
  // };

  const { description } = useContext(PropagatorContext);

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
  const [val, setVal] = useState([10]);
  const updateRange = (e, data) => {
    setVal(data);
  };
  const [val2, setVal2] = useState([10]);
  const updateRange2 = (e, data) => {
    setVal2(data);
  };
  const [toggle, setToggle] = useState(false); //vent
  const toggler = () => {
    if(toggle){
      setToggle(false);
    } else {
      setToggle(true);
      openVent();
    }
  };
  const [wtoggle, setwToggle] = useState(false);
  const wtoggler = () => {
    if(wtoggle){
      setwToggle(false);
    }else{
      setwToggle(true);
    }
  };
  function openVent() {
    axios({
    method: 'post',
    url: '/openVent',
    
  });
  }

  return (
    <>
      {/*
      <img className="background-image" src={PlantBackground}></img>
      */}
      <div className="bigcontainer">
        <div className="background-image"></div>
        <div className="leftsection">
        <button onClick={openVent}>this</button>
          <h2> Welcome, {currentUserEmail}!</h2>
          <h2 className="plantmsg">
            Here's how your {plantCommonName} plant is doing:{" "}
          </h2>
          <div className="yourPlantPic">
            {plantCommonName && (
              <img
                className="image"
                src={require("../assets/" + plantCommonName + ".jpeg")}
              ></img>
            )}
          </div>
          <p className="plantDescription">{description}</p>
        </div>{" "}
        {/* left section */}
        <div className="rightsection">
          <h1 className="header3">Propagator Data</h1>
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
          <div className="graph"></div>
          <Tempgraph />
          <div class="menu">
            <div className="ventCont">
              <div className="vent">
                <h2>Vent</h2>
              </div>
              <div class="toggleVent">
                <Switch onClick={toggler} />
              </div>
              <h2 className="pos">Position: Rotation</h2>
            </div>
            {/* new pull */}
            <div class="slider2">
              <div class="sliderbar2">
                <Slider
                  value={val}
                  step={10}
                  valueLabelDisplay="on"
                  onChange={updateRange}
                />
              </div>
              <h2 className="pos">Position: Tilt</h2>
            </div>
            <div class="slider2">
              <div class="sliderbar2">
                <Slider
                  value={val2}
                  step={10}
                  valueLabelDisplay="on"
                  onChange={updateRange2}
                />
              </div>
            </div>
            <div className="waterCont">
              <div className="watertext">
                <h2>Watering</h2>
              </div>
              <div class="togglewater">
                <Switch onClick={wtoggler} />
              </div>
            </div>{" "}
            {/* rigt section */}
          </div>{" "}
          {/*menu*/}
        </div>
      </div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <form action="../../post" method="post" className="form">
        <button type="submit">Connected?</button>
      </form>
      <Footer />
    </>
  );
}
