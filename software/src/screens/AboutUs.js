import React from "react";
import "./AboutUs.css";
import Footer from "../components/organisms/Footer";
import PlantBackground from "../assets/plantpic2.png";

/**
 * About Us Section of our website
 * @returns
 */
export default function AboutUs() {
  const mystyle = {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: "45px",
    width: "80%",
    padding: "10px",
  };
  return (
    <>
      <div className="hero-container2">
        <img className="background-image2" src={PlantBackground}></img>
        <h1 style={{ color: "white", fontSize: 80 }}> We are PlantEd.</h1>
        <p style={mystyle}>
          PlantEd is a smart plant care system that intends to enhance the
          learning curve of new plant enthusiasts by providing an interactive
          experience for growing plants indoors, as well as assessing the
          optimal conditions for growth.
        </p>
      </div>
      {/* <Cards /> */}
      <Footer />
    </>
  );
}
