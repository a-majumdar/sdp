import React from "react";
import PlantBackground from "../../assets/ePlant.jpg";
import "../organisms/auHeroSection.css";
import "../../App";
import { Button } from "../atoms/Button";

function HeroSection() {
    const mystyle = {
    color: "white",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: "45px",
    padding: "10px",
  };
  return (
    <div className="hero-container">
      <img className="background-image" src={PlantBackground}></img>
      <h1> We are PlantEd</h1>
      <p style={mystyle}>
      PlantEd is a smart plant care system that intends to enhance the 
      learning curve of new plant enthusiasts by providing an interactive 
      experience for growing plants indoors, and by assessing the optimal conditions for growth.
      </p>
      <div className="hero-btns">
        
      </div>
    </div>
  );
}

export default HeroSection;
