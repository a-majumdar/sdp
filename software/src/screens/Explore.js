import React, { useContext, useRef, useState, useEffect } from "react";
import Cards from "../components/organisms/expCards";
import Footer from "../components/organisms/Footer";
import { Card, Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import PlantBackground from "../assets/explr.jpg";
import neo4j from "neo4j-driver";
import { Link, useLocation } from "react-router-dom";
import { PlantDataContext } from "../contexts/PlantDataContext";
import "./Explore.css";

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
  const [theUserSearch, setUserSearch] = useState("");

  const {
    plantName,
    setPlantName,
    setHigherNode,
    setPhLow,
    setTempLow,
    setPhHigh,
    setMoistureType,
    tempHigh,
    setTempHigh,
    setLight,
    setWatering,
    setHumidity,
    setCommonName,
    plantDescription,
    setPlantDescription,
    plantIdAura,
    setPlantIdAura,
    higherNode,
    commonName,
    moistureType,
    watering,
    light,
    humidity,
    phHigh,
    tempLow,
    pHLow,
  } = useContext(PlantDataContext);

  async function search(word) {
    try {
      console.log("Debug Test Explore Page (Search Function)");
      //step1: searching the plant name by its common name or (professional) name
      //step2:retrun all plant details (later will also with propogator conditions as it establlished manaully)
      //eg: when we search tomato, it would return all the palnts which has the common/professional name called tomato with their all relevant information

      const readQuery = `match (n:Species)-[:In]-> (p) -[:In]->(l) -[:In] ->(z) -[:In]->(k) -[:In]->(q) 
                      where n.common = $search or n.name = $search
                       return n.name as plant,n.common as common, n.description as description, n.information as info,p.name as a,l.name as b,z.name as c ,k.name as d,q.name as e,n.moisture_type as f,n.watering as g, n.light as h,n.temp_high as i, n.humidity as j, n.pH_high as k, n.temp_low as l, n.pH_low as m`;

      const AnanyaQuery = `
      MATCH (n)
      WHERE n.common = $search or n.name = $search
      RETURN 
        ID(n) AS plantID,
        n.name AS plant,
        n.common AS common,
        n.description AS description, 
        n.humidity AS humidity,
        n.light AS light,
        n.moisture_type AS moisture_type, 
        n.pH_high AS upper_pH,
        n.pH_low AS lower_pH,
        n.temp_high AS upper_temp,
        n.temp_low AS lower_temp, 
        n.watering AS watering_style`;
      session2.readTransaction((tx) =>
        tx.run(AnanyaQuery, { search: word }).then((readResult) => {
          readResult.records.forEach((record) => {
            console.log(`plant name: ${record.get("plant")}`);
            setPlantName(`plant name: ${record.get("plant")}`); //Here, I'm just setting constants equal to what we are getting from the AuraDb database so that we can then pass these as props to whichever class we need them in.
            // console.log(plantName);
            // console.log(`in: ${record.get("a")}`);
            //setHigherNode(record.get("a"));
            setPlantIdAura(record.get("plantID").low);
            console.log(record.get("plantID").low);
            //NEED TO CHNAGE THIS TO GET THE ID OF THE QUERIED PLANT IN SEARCH

            // console.log(`is: ${record.get("common")}`);
            setCommonName(record.get("common"));
            setPlantDescription(record.get("description"));

            // console.log(`with: ${record.get("info")}`);
            setHumidity(`Humidity is: ${record.get("humidity")}`);

            setWatering(`Watering is: ${record.get("watering_style")}`);
            setLight(`Light is: ${record.get("light")}`);
            setTempHigh(`Temp High is: ${record.get("upper_temp")}`);
            setMoistureType(`Moisture Type is: ${record.get("moisture_type")}`);
            setPhHigh(`pH High Is: ${record.get("upper_pH")}`);
            setTempLow(`Temp Low is: ${record.get("lower_temp")}`);
            setPhLow(`pH Low is: ${record.get("lower_pH")}`);
          });
        })
      );
    } catch (error) {
      console.error("Something went wrong: ", error);
    }
  }

  // const openInNewTab = (url) => {
  //   const newWindow = window.location.re(url, "noopener,noreferrer");
  //   if (newWindow) newWindow.opener = null;
  // };

  var sites = [
    "Tomato",
    "Solanum lycopersicum",
    "Potato",
    "Solanum tuberosum",
    "Aubergine",
    "Solanum melongena",
    "Nicotianoideae",
    "Ranunculales",
    "Menispermaceae",
    "Abuta",
    "Solanum",
    "Solaneae",
    "Solanoideae",
    "Solanaceae",
    "Solanales",
    "Asterids",
    "Eudicots",
    "Angiosperms",
    "Abuta acutifolia",
    "Abuta amara",
    "Abuta antioquiana",
    "Abuta aristeguietae",
    "Capsicum",
    "Convolvulaceae",
    "Aniseieae",
    "Cardiochlamyeae",
    "Convolvuleae",
    "Cresseae",
    "Cuscuteae",
    "Dichondreae",
    "Aniseia",
    "Odonellia",
    "Tetralocularia",
    "Aniseia argentina",
    "Aniseia luxurians",
    "Aniseia martinicensis",
    "Capisceae",
    "Capsicum annuum",
    "Pepper",
    "Lamiales",
    "Gesneriaceae",
    "African violet",
    "Streptocarpus",
    "Streptocarpella",
    "Saintpaulia",
    "Streptocarpus afroviola",
    "Streptocarpus albus",
    "Streptocarpus brevipilosus",
    "Streptocarpus geotzeanus",
    "Streptocarpus inconspicuus",
    "Streptocarpus ionanthus",
    "Streptocarpus nitidus",
    "Streptocarpus shumensis",
    "Streptocarpus teitensis",
    "Streptocarpus ulugurensis",
    "Lamiaceae",
    "Ocimum",
    "Sweet basil",
    "Ocimum basilicum",
    "Holy basil, tulsi",
    "Ocimum tenuiflorum",
    "Asterales",
    "Asteraceae",
    "Tageteae",
    "Marigold",
    "Tagetes",
  ];

  function autocomplete(inp, arr) {
    var currentFocus;

    inp.addEventListener("input", function (e) {
      var a,
        b,
        i,
        val = this.value;

      closeAllLists();
      if (!val) {
        return false;
      }
      currentFocus = -1;

      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");

      this.parentNode.appendChild(a);

      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");

          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);

          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

          b.addEventListener("click", function (e) {
            inp.value = this.getElementsByTagName("input")[0].value;

            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });

    inp.addEventListener("keydown", function (e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;

        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;

        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      if (!x) return false;

      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = x.length - 1;

      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }

    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });
  }
  // autocomplete(document.getElementById("myInput"), sites);

  useEffect(() => {
    autocomplete(document.getElementById("myInput"), sites);
  }, []);

  return (
    <>
      <div className="hero-container3">
        <img className="background-image" src={PlantBackground}></img>
        <h1 style={{ color: "#3D3939", fontSize: 80 }}>Explore new plants!</h1>
        <form autocomplete="off" className="form">
          <input
            className="search-bar"
            id="myInput"
            type="text"
            name="s"
            placeholder="search for any plant."
          ></input>
          <Link to={"/searchPage"}>
            <button
              className="search-btn"
              type="submit"
              value="submit"
              onClick={() => {
                search(document.getElementById("myInput").value);
              }}
            >
              Search
            </button>
          </Link>
          <a href="http://172.20.118.159:4444/" target="_blank" rel="noopener">
            <p style={{ marginLeft: 155 }}>Image Search</p>
          </a>
          {/* <input className="search-btn" type="submit" value="Search"></input> */}
        </form>
      </div>
      <Cards />
      <Footer />
    </>
  );
}
