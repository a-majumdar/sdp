import React, { useRef, useState } from "react";
import "../App.css";
import Cards from "../components/organisms/expCards";
import Footer from "../components/organisms/Footer";
import { Card, Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import PlantBackground from "../assets/explr.jpg";
import neo4j from "neo4j-driver";
import { Button } from "../components/atoms/Button";
import { Link, useLocation } from "react-router-dom";

export const theUserSearch = "";
/**
 * Explore section of our website
 * @returns
 */
export default function Explore() {
  const uri = "neo4j+s://28cce6ce.databases.neo4j.io";
  const user = "neo4j";
  const password = "sdpgroup22isthebest";
  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
  const session = driver.session();
  const session2 = driver.session();
  const history = useHistory();

  //Plant Info Props
  const [plantName, setPlantName] = useState("");
  const [higherNode, setHigherNode] = useState("");
  const [commonName, setCommonName] = useState("");
  const [moistureType, setMoistureType] = useState("");
  const [watering, setWatering] = useState("");
  const [light, setLight] = useState("");
  const [tempHigh, setTempHigh] = useState("");
  const [humidity, setHumidity] = useState("");
  const [phHigh, setPhHigh] = useState("");
  const [tempLow, setTempLow] = useState("");
  const [pHLow, setPhLow] = useState("");

  const routeChange = () => {
    let path = `/SearchPage`;
    history.push(path);
  };
  const [theUserSearch, setUserSearch] = useState("");
  function search(word) {
    try {
      console.log("Debug Test Explore Page (Search Function)");
      //step1: searching the plant name by its common name or (professional) name
      //step2:retrun all plant details (later will also with propogator conditions as it establlished manaully)
      //eg: when we search tomato, it would return all the palnts which has the common/professional name called tomato with their all relevant information

      const readQuery = `match (n:Species)-[:In]-> (p) -[:In]->(l) -[:In] ->(z) -[:In]->(k) -[:In]->(q) 
                    where n.common = $search or n.name = $search
                     return n.name as plant,n.common as common, n.information as info,p.name as a,l.name as b,z.name as c ,k.name as d,q.name as e,n.moisture_type as f,n.watering as g, n.light as h,n.temp_high as i, n.humidity as j, n.pH_high as k, n.temp_low as l, n.pH_low as m`;
      session2.readTransaction((tx) =>
        tx.run(readQuery, { search: word }).then((readResult) => {
          readResult.records.forEach((record) => {
            console.log(`plant name: ${record.get("plant")}`);
            setPlantName(`plant name: ${record.get("plant")}`); //Here, I'm just setting constants equal to what we are getting from the AuraDb database so that we can then pass these as props to whichever class we need them in.
            // console.log(plantName);
            // console.log(`in: ${record.get("a")}`);
            setHigherNode(`in: ${record.get("a")}`);
            console.log("Higher Node is" + higherNode);
            // console.log(`is: ${record.get("common")}`);
            setCommonName(`is: ${record.get("common")}`);
            console.log("Common Name is" + commonName);
            // console.log(`with: ${record.get("info")}`);
            setHumidity(`in: ${record.get("j")}`);
            console.log("Humidity is" + humidity);

            setWatering(`is: ${record.get("g")}`);
            console.log("Watering is" + watering);
            setLight(`is: ${record.get("h")}`);
            console.log("Light is" + light);
            setTempHigh(`is: ${record.get("i")}`);
            console.log("Temp high is" + tempHigh);
            setMoistureType(`is: ${record.get("f")}`);
            console.log("Moistre type is" + moistureType);
            setPhHigh(`is: ${record.get("k")}`);
            console.log("PhHigh" + phHigh);
            setTempLow(`is: ${record.get("l")}`);
            console.log("tempLow" + tempLow);
            setPhLow(`is: ${record.get("m")}`);
            console.log("ph Low is" + pHLow); //Set all info
            // console.log(`in: ${record.get("b")}`);
            // console.log(`in: ${record.get("c")}`);
            // console.log(`in: ${record.get("d")}`);
            // console.log(`in: ${record.get("e")}`);
            // console.log(`is: ${record.get("f")}`);
            // console.log(`is: ${record.get("g")}`);
            // console.log(`is: ${record.get("h")}`);
            // console.log(`is: ${record.get("i")}`);
            // console.log(`is: ${record.get("j")}`);
            // console.log(`is: ${record.get("k")}`);
            // console.log(`is: ${record.get("l")}`);
            // console.log(`is: ${record.get("m")}`);
          });
        })
      );
    } catch (error) {
      console.error("Something went wrong: ", error);
    }
  } //CANT SEARCH ARBITRARY PLANT FOR SOME REASON

  return (
    <>
      <div className="hero-container">
        <img className="background-image" src={PlantBackground}></img>
        <h1>Explore new plants!</h1>
        <Form>
          <label>Search here :</label>
          <input
            type="text"
            required
            value={theUserSearch}
            onChange={(e) => setUserSearch(e.target.value)}
          />
          <button type="submit" onClick={search(theUserSearch)}>
            {" "}
            {/*This should be working if you go into console on the website and type "Tomato"*/}
            Search
          </button>{" "}
          {/* onclick of this button go to search result page */}
        </Form>
        {/* {
          theUserSearch = userSearch
        } */}
        <p>the search was for , {theUserSearch}</p>

        <div className="hero-btns"></div>
      </div>
      <Cards />
      <Footer />
    </>
  );
}
