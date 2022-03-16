import React from "react";
import "../App.css";
import Footer from "../components/organisms/Footer";
import PlantBackground from "../assets/ePlant.jpg";

/**
 * About Us Section of our website
 * @returns
 */
export default function AboutUs() {
  const mystyle = {
    color: "black",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: "45px",
    padding: "10px",
  };
  return (
    <>
      <div className="hero-container">
        <img className="background-image" src={PlantBackground}></img>
        <h1 style={{ color: "black" }}> We are PlantEd</h1>
        <p style={mystyle}>
          PlantEd is a smart plant care system that intends to enhance the
          learning curve of new plant enthusiasts by providing an interactive
          experience for growing plants indoors, as well as assessing the
          optimal conditions for growth.
        </p>
        <div className="hero-btns"></div>
      </div>
      {/* <Cards /> */}
      <Footer />
    </>
  );
}
