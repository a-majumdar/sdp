import React from "react";
import Footer from "../components/organisms/Footer";
import cucumPic from "../assets/cucum.jpg";
import "./tutorial.css";
import { SliderData } from "./SliderData";
import ImageSlider from "./ImageSlider";

/**
 * Article 1
 * @returns
 */
export default function tutorial() {
  return (
    <>
      <div>
        <div className="background-image"></div>
        <h1
          style={{
            marginTop: 140,
            marginBottom: 100,
            color: "white",
            fontSize: "80px",
          }}
        >
          Tutorial
        </h1>
        <ImageSlider slides={SliderData} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <Footer />
    </>
  );
}
