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
 import { XAxis, YAxis, LineChart, BarChart, Bar, Line, Legend, ResponsiveContainer, Label , CartesianGrid, Tooltip} from "recharts";
import { Button} from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { PureComponent } from 'react';
import { PlantDataContext } from "../contexts/PlantDataContext";

import neo4j from "neo4j-driver";
// import BarChart from '@bit/recharts.recharts.bar-chart';
// import Bar from '@bit/recharts.recharts.bar';
// import XAxis from '@bit/recharts.recharts.x-axis';
// import YAxis from '@bit/recharts.recharts.y-axis';
// import CartesianGrid from '@bit/recharts.recharts.cartesian-grid';
// import Tooltip from '@bit/recharts.recharts.tooltip';
// import Legend from '@bit/recharts.recharts.legend';
/**
 *
 * @returns A graph of tempurat
 */
function Tempgraph() {
  const uri = "neo4j+s://28cce6ce.databases.neo4j.io";
  const user = "neo4j";
  const password = "sdpgroup22isthebest";
  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
  const [lowerTemp, setLowerTemp] = useState();
  const [higherTemp, setHigherTemp] = useState();
  const [humidityAura, setHumidityAura] = useState();
  const [averageTemp, setAverageTemp] = useState();
  const { plantDescription } = useContext(PlantDataContext);
  const { currentUserUID, currentUserEmail } = useContext(AuthContext);
  const session = driver.session();
  const session2 = driver.session();
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
            console.log("the optimal hum is : " + humidityAura);
            setLowerTemp(record.get("upper_temp"));
            setHigherTemp(record.get("lower_temp"));
          });
        })
      );
    } catch (error) {
      console.error("Something went wrong: ", error);
    }
  }

  const { description } = useContext(PropagatorContext);
  var avgTemp = 0;
  const getAverageTemp = () => {
    getOptimalData(plantCommonName);
    console.log("lower temp = " + lowerTemp);
    console.log("higher = " + higherTemp);
    avgTemp = (parseInt(lowerTemp) + parseInt(higherTemp)) / 2;
    setAverageTemp((parseInt(lowerTemp) + parseInt(higherTemp)) / 2);
  };


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
          getAverageTemp();
          console.log("Eric average temp is: " + averageTemp);
          data.push({ time: time, Temperature: temp1, Optimal: avgTemp });
          hdata.push({ time: time, Humidity: hum, Optimal: humidityAura });
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
        const sun1 = childSnapshot.val().UV;
        // const hum = childSnapshot.val().Humidity;
        //console.log("hum = " + hum); //to access data
        const time = childSnapshot.val().Sample_Time;
        //console.log("time = " + time);
        // const timeNum = new Date().getTime(time);

        dataSun.push({ time: time, Sunlight: sun1 });
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

        dataMoist.push({ time: time, Moisture: moist1 });
        // hdata.push({ time: time, humidity: hum });
        //console.log("data is : " + data);
      });
      
      setMoistData(dataMoist);
      
    });
  };
  useEffect(() => {
    setTempData(getTempData);
  }, []);
  //https://www.npmjs.com/package/react-linechart

  const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">Reading {`${label} : ${payload[0].value}`}</p>
          
        </div>
      );
    }
  
    return null;
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
            
            <XAxis  tickLine={false} tick={false} label="Readings (newest - oldest)" />
            <YAxis>
              <Label angle={-90} value='Temperature C (Celsius)' position='insideLeft' style={{textAnchor: 'middle'}} />
            </YAxis>
            <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}  label="{timeTaken}" labelFormatter={(name) => 'Reading: #' + name}/>
            {/* <Legend /> */}
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="Temperature" stroke="#8884d8" activeDot={{r :8}}/>
            <Line type="monotone" dataKey="Optimal" stroke="red" />
            <Legend />
          </LineChart>
          
        </TabPanel>
        <TabPanel>
        <LineChart width={500} height={300} data={humData}>
            
        <XAxis  tickLine={false} tick={false} label="Readings (newest - oldest)" />
            <YAxis>
              <Label angle={-90} value='Humidity (%)' position='insideLeft' style={{textAnchor: 'middle'}} />
            </YAxis>
            <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false} label="{timeTaken}" labelFormatter={(name) => 'Reading: #' + name} />
            {/* <Legend /> */}
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="Humidity" stroke="#8884d8" activeDot={{r :8}}/>
            <Line type="monotone" dataKey="Optimal" stroke="red" />
          </LineChart>
        </TabPanel>
        <TabPanel>
        
          <LineChart width={500} height={300} data={sunData}>
            
          <XAxis  tickLine={false} tick={false} label="Readings (newest - oldest)" />
            <YAxis>
              <Label angle={-90} value='Sunlight (UV)' position='insideLeft' style={{textAnchor: 'middle'}} />
            </YAxis>
            <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false} label="{timeTaken}" labelFormatter={(name) => 'Reading: #' + name} />
            {/* <Legend /> */}
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="Sunlight" stroke="#8884d8" activeDot={{r :8}}/>
            
          </LineChart>
          
          
        </TabPanel>
        <TabPanel>
          <LineChart width={500} height={300} data={moistData}>
          <XAxis  tickLine={false} tick={false} label="Readings (newest - oldest)" />
            <YAxis>
              <Label angle={-90} value='Moisture (g/m^3)' position='insideLeft' style={{textAnchor: 'middle'}} />
            </YAxis>
            <Tooltip  contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}  label="{timeTaken}" labelFormatter={(name) => 'Reading: #' + name} />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="Moisture" stroke="#8884d8" activeDot={{r :8}} />
          </LineChart>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default Tempgraph;
