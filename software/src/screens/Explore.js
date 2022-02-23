import React from "react";
import "../App.css";
import Cards from "../components/organisms/expCards";
import Footer from "../components/organisms/Footer";
import PlantBackground from "../assets/explr.jpg";

import { Button } from "../components/atoms/Button";

/**
 * Explore section of our website
 * @returns
 */
export default function Explore() {
  return (
    <>
      <div className="hero-container">
        <img className="background-image" src={PlantBackground}></img>
        <h1>Explore new plants!</h1>
        <input
          className="plant-Search"
          type="text"
          placeholder="Search Plants!"
        />
        <Button buttonStyle="btn--medium">Search</Button>
        <div className="hero-btns"></div>
      </div>
      <Cards />
      <Footer />
    </>
  );
}
