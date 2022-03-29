import React, { useContext, useRef, useState } from "react";
import Cards from "../components/organisms/expCards";
import Footer from "../components/organisms/Footer";
import { Card, Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import PlantBackground from "../assets/explr.jpg";
import neo4j from "neo4j-driver";
import { Button } from "../components/atoms/Button";
import { Link, useLocation } from "react-router-dom";
import { PlantDataContext } from "../contexts/PlantDataContext";
import "./Explore.css";

/**
 * Explore section of our website
 * @returns
 */
export default function Explore() {
  window.onload = function () {
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

            b.innerHTML =
              "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            //alert(b.innerHtml);

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
    autocomplete(document.getElementById("myInput"), sites);
  };

  return (
    <>
      <div className="hero-container3">
        <img className="background-image" src={PlantBackground}></img>
        <h1 style={{ color: "#3D3939", fontSize: 80 }}>Explore new plants!</h1>
        <form autocomplete="off" action="/index.php">
          <input
            className="search-bar"
            id="myInput"
            type="text"
            name="s"
            placeholder="enter the queries"
          ></input>
          <input className="search-btn" type="submit" value="submit"></input>
        </form>
        <div className="hero-btns2"></div>
      </div>
      <Cards />
      <Footer />
    </>
  );
}
