import React, { useState, useContext, useEffect } from "react";
import abuta from "../assets/abuta.jpg";
import { Slider } from '@material-ui/core'
import { Switch } from "antd";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import "../screens/TempGraph.css";
import Footer from "../components/organisms/Footer";
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
import { PropagatorContext } from "../contexts/PropagatorContext";
import { XAxis, YAxis, LineChart, Line } from "recharts";
import { Button } from "react-bootstrap";
import { ButtonGroup} from "react-bootstrap";
/**
 *
 * @returns A graph of tempurat
 */
function Tempgraph() {
  const { currentUserUID, currentUserEmail } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [tempData, setTempData] = useState(["this", "is default"]);
  const [humData, setHumData] = useState(["this is default"]);
  

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
           hdata.push({ time: time, humidity: hum});
          //console.log("data is : " + data);
         });
         console.log(" data is : " + data[0].temp);
         setHumData(hdata);
         setTempData(data);
       }
       
     );
    };
    
  return (
    <>
    {/* <Button
            class = "tempGraphButton"
            
          >Tempertature Button
          </Button> */}

    <LineChart width={500} height={300} data={tempData}>
    <XAxis dataKey="time" />
    <YAxis />
    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
    <Line type="monotone" dataKey="temp" stroke="#8884d8" />
  </LineChart>

  <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" >Readings</Button>
        <Button onClick={() => setTempData(getTempData)} variant="secondary" >Temp</Button>
        <Button variant="secondary" >Hum</Button>
        <Button variant="secondary">Light</Button>
        <Button variant="secondary">Moist</Button>
      </ButtonGroup>
    
  </>
  );
}

export default Tempgraph;
