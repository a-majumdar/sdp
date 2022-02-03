import React from "react";
import PlantBackground from "../../assets/meadows.jpg";
import "../organisms/cuHeroSection.css";
import "../../App";
import { Button } from "../atoms/Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <img className="background-image" src={PlantBackground}></img>
      
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