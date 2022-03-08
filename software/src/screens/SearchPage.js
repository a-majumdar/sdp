import React from "react";
import "../App.css";
import Footer from "../components/organisms/Footer";
import SearchPageSection from "../components/organisms/contentSections/SearchPageSection";
import { theUserSearch } from "./Explore";
import PlantBackground from "../assets/ePlant.jpg";
/**
 * About Us Section of our website
 * @returns
 */

const mystyle = {
  color: "white",
  textAlign: "center",
  textAlignVertical: "center",
  fontSize: "45px",
  padding: "10px",
};

export default function SearchPage() {
  return (
    <>
      {/* <p>stuff is belwo {theUserSearch}</p> */}
      {/* <div>{location.state.name}</div> */}
      <div className="hero-container">
        <img className="background-image" src={PlantBackground}></img>
        <h1> Search Results</h1>
        <p style={mystyle}>Eric</p>
        <div className="hero-btns"></div>
      </div>
      <Footer />
    </>
  );
}
