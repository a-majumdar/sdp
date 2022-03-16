import React from "react";
import { Link } from "react-router-dom";
import Cards from "../components/organisms/Cards";
import Footer from "../components/organisms/Footer";
import { auth } from "../firebase/firebase-config";
import "./Home.css";
import "../App.css";
import PlantBackground from "../assets/plants.jpeg";
import { Button } from "../components/atoms/Button";

/**
 * Home section of our website
 * @returns
 */
function Home() {
  return (
    <>
      <div className="hero-container">
        <img className="background-image" src={PlantBackground}></img>
        <h1 style={{ color: "white" }}>Welcome to PlantED.</h1>
        <p style={{ color: "white" }}>
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
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
