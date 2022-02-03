import React from "react";
import PlantBackground from "../../assets/explr.jpg";
import "../organisms/expHeroSection.css";
import "../../App";
import { Button } from "../atoms/Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <img className="background-image" src={PlantBackground}></img>
      {/* <h1> We are PlantEd</h1> */}
      {/* <p>
        Learn, Explore and Interact with your plants and give them the best
        start in life.
      </p> */}
      <div className="hero-btns">
        
      </div>
    </div>
  );
}

export default HeroSection;