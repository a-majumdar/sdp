import React from "react";
import PlantBackground from "../../../assets/ePlant.jpg";

import "../../../App";

function SearchPageSection() {
    
  const mystyle = {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: "45px",
    padding: "10px",
  };
  return (
    <div className="hero-container">
      <img className="background-image" src={PlantBackground}></img>
      <h1> Search Results</h1>
      <p style={mystyle}>
        Eric 
      </p>
      {/* <p>the search was for , {userSearch}</p> */}
      <div className="hero-btns"></div>
    </div>
  );
}

export default SearchPageSection;
