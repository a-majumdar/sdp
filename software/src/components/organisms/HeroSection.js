import React from "react";
import PlantBackground from "../../assets/plants.jpeg";
import "../organisms/HeroSection.css";
import "../../App";
import { Button } from "../atoms/Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <img className="background-image" src={PlantBackground}></img>
      <h1> Welcome To PlantEd</h1>
      <p>
        Learn, Explore and Interact with your plants and give them the best
        start in life.
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => console.log("Learn More Button Clicked")}
        >
          LEARN MORE
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          SIGN UP
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
