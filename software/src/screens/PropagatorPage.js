import React, { useState, useContext, useEffect } from "react";

import abuta from "../assets/Abuta.jpg";
import { Slider } from "@material-ui/core";
import { Switch } from "antd";
import { createMuiTheme } from "@material-ui/core/styles";
import "../screens/PropagatorPage.css";
import Footer from "../components/organisms/Footer";
import { AuthContext } from "../contexts/AuthContext";
import neo4j from "neo4j-driver";
import "react-tabs/style/react-tabs.css";
import { PropagatorContext } from "../contexts/PropagatorContext";
import Tempgraph from "../screens/eGraph";
import { PlantDataContext } from "../contexts/PlantDataContext";
import axios from "axios";
import PlantBackground from "../assets/wht.jpg";
//18.28 03/04-21
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
//18.07
/**
 * Propogator Section of Our Website
 * @returns
 */

export default function MyProp() {
  const uri = "neo4j+s://28cce6ce.databases.neo4j.io";
  const user = "neo4j";
  const password = "sdpgroup22isthebest";
  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
  const session = driver.session();
  const session2 = driver.session();
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

  const [lowerTemp, setLowerTemp] = useState();
  const [higherTemp, setHigherTemp] = useState();
  const [humidityAura, setHumidityAura] = useState();
  const [averageTemp, setAverageTemp] = useState();
  const [moistureAura, setMoistureAura] = useState();
  const [lightAura, setLightAura] = useState();

  const { plantDescription } = useContext(PlantDataContext);

  async function getOptimalData(plantCommonName) {
    try {
      console.log("Debug Test Explore Page (Search Function)");
      //step1: searching the plant name by its common name or (professional) name
      //step2:retrun all plant details (later will also with propogator conditions as it establlished manaully)
      //eg: when we search tomato, it would return all the palnts which has the common/professional name called tomato with their all relevant information

      const AnanyaQuery = `
      MATCH (n)
      WHERE n.common = $search or n.name = $search
      RETURN
        n.common AS common,
        n.humidity AS humidity,
        n.light AS light,
        n.moisture_type AS moisture_type,
        n.pH_high AS upper_pH,
        n.pH_low AS lower_pH,
        n.temp_high AS upper_temp,
        n.temp_low AS lower_temp,
        n.watering AS watering_style`;
      session2.readTransaction((tx) =>
        tx.run(AnanyaQuery, { search: plantCommonName }).then((readResult) => {
          readResult.records.forEach((record) => {
            setHumidityAura(record.get("humidity"));
            setLowerTemp(record.get("upper_temp"));
            setHigherTemp(record.get("lower_temp"));
            setMoistureAura(record.get("moisture_type"));
            setLightAura(record.get("light"));
          });
        })
      );
    } catch (error) {
      console.error("Something went wrong: ", error);
    }
  }

  const { description } = useContext(PropagatorContext);
  var ericTemp = 0;
  const getAverageTemp = () => {
    getOptimalData(plantCommonName);
    console.log("lower temp = " + lowerTemp);
    console.log("higher = " + higherTemp);
    setAverageTemp((parseInt(lowerTemp) + parseInt(higherTemp)) / 2);
    ericTemp = (parseInt(lowerTemp) + parseInt(higherTemp)) / 2;
    console.log("hello" + averageTemp);
  };

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
  function moveProp() {
    axios({
      method: "post",
      url: "/moveProp",
      data: val,
    });
  }
  const [val, setVal] = useState([0]);
  const updateRange = (e, data) => {
    //possition
    setVal(data);
    if (data == 0) {
      console.log("do nothing its 0");
    } else if (data == 10) {
      console.log("Move prop 10");
      axios({
        method: "post",
        url: "/move10",
      });
    } else if (data == 20) {
      console.log("Move prop 20");
      axios({
        method: "post",
        url: "/move20",
      });
    } else if (data == 30) {
      console.log("Move prop 30");
      axios({
        method: "post",
        url: "/move30",
      });
    } else if (data == 40) {
      console.log("Move prop 40");
      axios({
        method: "post",
        url: "/move40",
      });
    } else if (data == 50) {
      console.log("Move prop 50");
      axios({
        method: "post",
        url: "/move50",
      });
    } else if (data == 60) {
      console.log("Move prop 60");
      axios({
        method: "post",
        url: "/move60",
      });
    } else if (data == 70) {
      console.log("Move prop 70");
      axios({
        method: "post",
        url: "/move70",
      });
    } else if (data == 80) {
      console.log("Move prop 80");
      axios({
        method: "post",
        url: "/move80",
      });
    } else if (data == 90) {
      console.log("Move prop 90");
      axios({
        method: "post",
        url: "/move90",
      });
    } else if (data == 100) {
      console.log("Move prop 100");
      axios({
        method: "post",
        url: "/move100",
      });
    }
  };

  const checkOptimalForTemp = () => {
    getAverageTemp();

    console.log("average temp" + ericTemp);
    if (temperature > ericTemp + 3) {
      openVent();
    }
    if (temperature < ericTemp - 3) {
      console.log("hello");
      heat();
    }
  };
  const checkOptimalForMoist = () => {
    getOptimalData(plantCommonName);
    var optMoist;
    if (lightAura === "high") {
      optMoist = 3;
    } else if (lightAura === "medium") {
      optMoist = 2;
    } else if (lightAura === null) {
      optMoist = 1;
    } else {
      optMoist = 0;
    }

    if (moisture < optMoist) {
      // if current moisture is less than the optimal
      console.log("Not enough moisutre in plant begin watering");
      water();
    } else {
      console.log("Plant does not need watering");
    }
  };

  const checkOptimalForHum = () => {
    getOptimalData(plantCommonName);
    var optHum;
    if (humidityAura === "low") {
      optHum = 33;
    } else if (humidityAura === "medium") {
      optHum = 66;
    } else {
      optHum = 100;
    }

    if (humidity > optHum) {
      console.log("Too much humidity opening the vent");
      openVent();
    }
    if (humidity < optHum) {
      console.log("Too little humidity closing the vent");
      closeVent();
    }
  };
  const checkOptimalForSun = () => {
    getOptimalData(plantCommonName);
    var optSun;
    if (lightAura === null) {
      optSun = 10;
    } else if (lightAura === "medium") {
      optSun = 20;
    } else {
      optSun = 30;
    }

    if (sunlight > optSun) {
      console.log("Too much sun turning propagator away");
      moveProp();
    }
    if (sunlight < optSun) {
      console.log("Not enough sun directing propagator too more sun");
      sunTrack();
    }
  };

  const [val2, setVal2] = useState([0]);
  const updateRange2 = (e, data) => {
    setVal2(data);
  };
  const [toggle, setToggle] = useState(false); //vent
  const toggler = () => {
    if (toggle) {
      setToggle(false);
      closeVent();
      console.log("close vent initiated");
    } else {
      setToggle(true);
      openVent();
      console.log("open vent initiated");
    }
  };
  const [htoggle, sethToggle] = useState(false); //vent
  const htoggler = () => {
    if (htoggle) {
      sethToggle(false);
      heat();
      console.log("heating on");
    } else {
      sethToggle(true);
      heatOff();
      console.log("heating off");
    }
  };
  const [wtoggle, setwToggle] = useState(false);
  const wtoggler = () => {
    if (wtoggle) {
      setwToggle(false);
      console.log("watering is off");
    } else {
      setwToggle(true);
      console.log("watering initiated");
      water();
    }
  };

  //not sure why this toggle isn't working
  const [stoggle, setsToggle] = useState(false);
  const stoggler = () => {
    if (stoggle == true) {
      setsToggle(false);
      console.log("sun tracking is off");
    } else {
      setsToggle(true);
      console.log("sun tracking initiated");
      sunTrack();
    }
  };
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const [dtoggle, setdToggle] = useState(false);
  async function dtoggler() {
    if (dtoggle == true) {
      setdToggle(false);
      console.log("Auto mode is off");
    } else {
      // when auto mode is on run these scripts
      setdToggle(true);
      console.log("Auto mode is On");
      checkOptimalForHum();
      await sleep(5000);
      checkOptimalForTemp();
      await sleep(5000);
      checkOptimalForMoist();
      await sleep(5000);
      checkOptimalForSun();
    }
  }
  function heat() {
    axios({
      method: "post",
      url: "/heat",
    });
  }
  function heatOff() {
    axios({
      method: "post",
      url: "/heatOff",
    });
  }

  function water() {
    axios({
      method: "post",
      url: "/water",
    });
  }
  function move() {
    axios({
      method: "post",
      url: "/moveProp",
    });
  }

  function sunTrack() {
    axios({
      method: "post",
      url: "/sunTrack",
    });
  }
  function openVent() {
    axios({
      method: "post",
      url: "/openVent",
    });
  }
  function closeVent() {
    axios({
      method: "post",
      url: "/closeVent",
    });
  }
  function heat() {
    axios({
      method: "post",
      url: "/heat",
    });
  }

  function camera() {
    axios({
      method: "post",
      url: "/camera",
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
          {/* <button onClick={openVent}>this</button> */}
          <h2 className="helloMsg"> Welcome, {currentUserEmail}!</h2>
          <h2 className="plantmsg">
            Here's how your {plantCommonName} plant is doing:{" "}
          </h2>
          <div className="yourPlantPic">
            {plantCommonName && (
              <img
                className="image2"
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
            </div>
            <div className="waterCont">
              <div className="watertext">
                <h2>Watering</h2>
              </div>
              <div class="togglewater">
                <Switch onClick={wtoggler} />
              </div>
            </div>{" "}
            <div className="waterCont">
              <div className="watertext">
                <h2>Sun Tracking</h2>
              </div>
              <div class="togglewater">
                <Switch onClick={stoggler} />
              </div>
            </div>{" "}
            <div className="waterCont">
              <div className="watertext">
                <h2>Heating</h2>
              </div>
              <div class="togglewater">
                <Switch onClick={htoggler} />
              </div>
            </div>{" "}
            <div className="waterCont">
              <div className="watertext">
                <h2>Auto-mode</h2>
              </div>
              <div class="togglewater">
                <Switch onClick={dtoggler} />
              </div>
            </div>{" "}
            {/* rigt section */}
          </div>{" "}
          {/*menu*/}
        </div>
      </div>
      
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <form action="../../post" method="post" className="form">
        <button type="submit">Connected?</button>
      </form> */}
      <Footer />
    </>
  );
}
