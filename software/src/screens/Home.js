import React from "react";
import { Link } from "react-router-dom";
import Cards from "../components/organisms/Cards";
import Footer from "../components/organisms/Footer";
import { auth } from "../firebase/firebase-config";
import "./Home.css";
import "../App.css";
import PlantBackground from "../assets/plants.jpeg";
import { Button } from "../components/atoms/Button";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

/**
 * Home section of our website
 * @returns
 */
function Home() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div className="hero-container">
        <img className="background-image" src={PlantBackground}></img>
        <h1 style={{ color: "white", marginTop: 10 }}>Welcome to PlantED.</h1>
        <p style={{ color: "white" }}>
          Learn, Explore and Interact with your plants and give them the best
          start in life.
        </p>
        <div className="hero-btns">
          <Link to="/Explore">
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              onClick={() => console.log("Learn More Button Clicked")}
            >
              LEARN MORE
            </Button>
          </Link>
          {!currentUser && (
            <Link to="/sign-up">
              <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
              >
                SIGN UP
              </Button>
            </Link>
          )}
        </div>
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
