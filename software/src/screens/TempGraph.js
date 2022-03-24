import React, { useState, useContext, useEffect } from "react";
import abuta from "../assets/Abuta.jpg";
import { Slider } from "@material-ui/core";
import { Switch } from "antd";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "../screens/TempGraph.css";
import Footer from "../components/organisms/Footer";
import { AuthContext } from "../contexts/AuthContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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
import { PropagatorContext } from "../contexts/PropagatorContext";
import { XAxis, YAxis, LineChart, Line } from "recharts";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
/**
 *
 * @returns A graph of tempurat
 */
function Tempgraph() {
  const { currentUserUID, currentUserEmail } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [tempData, setTempData] = useState(["this", "is default"]);
  const [humData, setHumData] = useState(["this is default"]);
  const [sunData, setSunData] = useState(["n/a"]);
  const [moistData, setMoistData] = useState(["n/a"]);
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

  const getTempData = () => {
    const data = [];
    const hdata = [];
    const db = ref(getDatabase());
    get(child(db, `Humidity_Temperature_Readings/${propId}`)).then(
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const temp1 = childSnapshot.val().Temperature;
          const hum = childSnapshot.val().Humidity;
          
          //console.log("hum = " + hum); //to access data
          const time = childSnapshot.val().Sample_Time;
          //console.log("time = " + time);
          const timeNum = new Date().getTime(time);

          data.push({ time: time, temp: temp1 });
          hdata.push({ time: time, humidity: hum });
          //console.log("data is : " + data);
        });
        console.log(" data is : " + data[0].temp);
        setHumData(hdata);
        setTempData(data);
      }
    );
  };

  const getSunData = () => {
    const dataSun = [];
    // const hdata = [];
    const db = ref(getDatabase());
    get(child(db, `Sunlight_Readings/${propId}`)).then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const sun1 = childSnapshot.val().Visible;
        // const hum = childSnapshot.val().Humidity;
        //console.log("hum = " + hum); //to access data
        const time = childSnapshot.val().Sample_Time;
        //console.log("time = " + time);
        // const timeNum = new Date().getTime(time);

        dataSun.push({ time: time, sun: sun1 });
        // hdata.push({ time: time, humidity: hum });
        //console.log("data is : " + data);
      });
      
      setSunData(dataSun);
      
    });
  };
  const getMoistData = () => {
    const dataMoist = [];
    // const hdata = [];
    const db = ref(getDatabase());
    get(child(db, `Moisture_Readings/${propId}`)).then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const moist1 = childSnapshot.val().Moisture_value;
        // const hum = childSnapshot.val().Humidity;
        //console.log("hum = " + hum); //to access data
        const time = childSnapshot.val().Sample_Time;
        //console.log("time = " + time);
        // const timeNum = new Date().getTime(time);

        dataMoist.push({ time: time, moist: moist1 });
        // hdata.push({ time: time, humidity: hum });
        //console.log("data is : " + data);
      });
      
      setMoistData(dataMoist);
      
    });
  };

  return (
    <>
      <Tabs className="tab">
        {" "}
        {/*Hello World*/}
        <TabList>
          <Tab onClick={() => setTempData(getTempData)}>Temperature</Tab>
          <Tab onClick={() => setHumData(getTempData)}>Humidity</Tab>
          <Tab onClick={() => setSunData(getSunData)}>Sunlight</Tab>
          <Tab onClick={() => setMoistData(getMoistData)}>Moisture</Tab>
        </TabList>
        <TabPanel>
          <LineChart width={500} height={300} data={tempData}>
            <XAxis dataKey="time" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="temp" stroke="#8884d8" />
          </LineChart>
        </TabPanel>
        <TabPanel>
          <LineChart width={500} height={300} data={humData}>
            <XAxis dataKey="time" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="humidity" stroke="#8884d8" />
          </LineChart>
        </TabPanel>
        <TabPanel>
          <LineChart width={500} height={300} data={sunData}>
            <XAxis dataKey="time" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="sun" stroke="#8884d8" />
          </LineChart>
        </TabPanel>
        <TabPanel>
          <LineChart width={500} height={300} data={moistData}>
            <XAxis dataKey="time" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="moist" stroke="#8884d8" />
          </LineChart>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default Tempgraph;