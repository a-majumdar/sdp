import React, { useState, useContext, useEffect } from "react";
import abuta from "../assets/abuta.jpg";
import { Slider } from "@material-ui/core";
import { Switch } from "antd";
import { createMuiTheme } from "@material-ui/core/styles";

import "../screens/PropagatorPage.css";
import Footer from "../components/organisms/Footer";
import { AuthContext } from "../contexts/AuthContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PropagatorContext } from "../contexts/PropagatorContext";
import { XAxis, YAxis, LineChart, Line } from "recharts";
import { Button, TabContainer, TabPane } from "react-bootstrap";
import Tempgraph from "../screens/TempGraph";
import Humgraph from "../screens/HumGraph";
import SunlightGraph from "./SunlightGraph";
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
    propId,
    humidity,
    moisture,
    CartesianGrid,
    prop_detials,
    plantCommonName,
    sunlight,
    temperature,
  } = useContext(PropagatorContext);

  /**  ********IN PROGRESS***********
   * This Function gets the (most recent) temperature data from the realtime database and stores it as a list of objects
   * Then, eventually we will use this to display the information in a graph.
   */

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
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  const [wtoggle, setwToggle] = useState(false);
  const wtoggler = () => {
    toggle ? setwToggle(false) : setwToggle(true);
  };

  return (
    <>
      {/*
      <img className="background-image" src={PlantBackground}></img>
      */}
      <div className="bigcontainer">
        <div className="background-image"></div>
        <div className="leftsection">
          <h2> Welcome, {currentUserEmail}!</h2>
          <h2 className="plantmsg">
            Here's how your {plantCommonName} plant is doing:{" "}
          </h2>
          <div className="yourPlantPic">
            <img class="plantpic" src={abuta} alt="Logo" />
          </div>
          <p>
            Common Name is: {plantCommonName} Humidity is: low Watering is:
            frequent
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
          <div className="graph"></div>
          <Tabs>
            <TabList>
              <Tab>Temperature</Tab>
              <Tab>Humidity</Tab>
              <Tab>Sunlight</Tab>
            </TabList>
            <TabPanel>
              <Tempgraph />
            </TabPanel>
            <TabPanel>
              <Humgraph />
            </TabPanel>
            <TabPanel>
              <SunlightGraph />
            </TabPanel>
          </Tabs>
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
      {/* big container */}
      <Footer />
    </>
  );
}
