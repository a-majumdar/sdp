import React from "react";
import PlantBackground from "../../../assets/explr.jpg";
import "../contentSections/ExploreSection.css";
import "../../../App";
import { Button } from "../../atoms/Button";

function ExploreSection() {
  return (
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
  );
}

export default ExploreSection;
