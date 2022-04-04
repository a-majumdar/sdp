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
  const Header = {
    textAlign: "left",
    marginTop: 10,
    color: "black",
    fontSize: "80px",
  };

  return (
    <>
      <div>
        <h1 style={{ marginTop: 200, marginBottom: 100, fontSize: "80px" }}>
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
