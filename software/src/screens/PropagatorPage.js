import React, { useState, useContext, useEffect } from "react";
import abuta from "../assets/abuta.jpg";
import "../screens/PropagatorPage.css";
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

/**
 * Propogator Section of Our Website
 * @returns
 */

export default function MyProp() {
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

  /**  ********IN PROGRESS***********
   * This Function gets the (most recent) temperature data from the realtime database and stores it as a list of objects
   * Then, eventually we will use this to display the information in a graph.
   */

  
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

    //  const getHumidData = () => {
    //   const hdata = [];
    //   const db = ref(getDatabase());
    //    get(child(db, `Humidity_Temperature_Readings/${propId}`)).then(
    //      (snapshot) => {
    //        snapshot.forEach((childSnapshot) => {
    //          const temp1 = childSnapshot.val().Temperature;
    //          //console.log("temp1 = " + temp1); //to access data
    //          const time = childSnapshot.val().Sample_Time;
    //          //console.log("time = " + time);
    //          const timeNum = new Date().getTime(time);
            
    //          hdata.push({ time: time, temp: temp1 });
    //         
    //        });
    //        
    //        setHumData(hdata);
    //      }
         
    //    );
    //console.log("the new data is : " + tempData); //to access data
//    console.log(data); //to access data
  
  };

  // useEffect(() => {
  //   getTempData();
  // });

  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 600, pv: 2600, amt: 1800 },
    { name: "Page C", uv: 800, pv: 2800, amt: 1200 },
  ];

  const data2 = [];
  data2.push({ name: "Page A", uv: 100, pv: 2400, amt: 2400 });
  data2.push({ name: "Page B", uv: 200, pv: 2400, amt: 2400 });
  data2.push({ name: "Page C", uv: 300, pv: 2400, amt: 2400 });
  data2.push({ name: "Page D", uv: 600, pv: 2400, amt: 2400 });
  //console.log("data 2 is " + data2[0].name);
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
          
          <Button
            onClick={() => setTempData(getTempData)}
          >Tempertature Button
          </Button>

          <Button
            onClick={() => setHumData(getTempData)}
          >
            Humidity button
          </Button>
          <LineChart width={500} height={300} data={tempData}>
            <XAxis dataKey="time" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="temp" stroke="#8884d8" />
          </LineChart>
          <LineChart width={500} height={300} data={humData}>
            <XAxis dataKey="time" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="humidity" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>{" "}
      {/* big container */}
       <Footer />
    </>
  );
}
