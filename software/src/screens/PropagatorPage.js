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

/**
 * Propogator Section of Our Website
 * @returns
 */

export default function MyProp() {
  const { currentUserUID, currentUserEmail } = useContext(AuthContext);
  const [tempData, setTempData] = useState([]);

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
  // const getTempData = () => {
  //   return tempData;
  // };

  useEffect(() => {
    const db = ref(getDatabase());
    get(child(db, `Humidity_Temperature_Readings/${propId}`)).then(
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const temp1 = childSnapshot.val().Temperature;
          const time = childSnapshot.val().Sample_Time;
          const timeNum = new Date().getTime(time);
          tempData.push({ time: timeNum, temp: temp1 });
        });
      }
    );
  }, []);

  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 600, pv: 2600, amt: 1800 },
    { name: "Page C", uv: 800, pv: 2800, amt: 1200 },
  ];

  const data2 = [];
  data2.push({ name: "Page A", uv: 400, pv: 2400, amt: 2400 });
  data2.push({ name: "Page A", uv: 400, pv: 2400, amt: 2400 });
  data2.push({ name: "Page A", uv: 400, pv: 2400, amt: 2400 });
  data2.push({ name: "Page A", uv: 400, pv: 2400, amt: 2400 });
  console.log(data2);
  console.log(tempData);

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

          <LineChart width={500} height={300} data={tempData}>
            <XAxis dataKey="time" />
            <YAxis />
            <Line type="monotone" dataKey="temp" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>{" "}
      {/* big container */}
      <Footer />
    </>
  );
}
