import React from "react";
import PlantBackground from "../../../assets/ePlant.jpg";

import "../../../App";

function SearchPageSection() {
    //I just copied everything to the one page, just because we will be passing loads of props and it might get confusing if we use a lot of small sections
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
