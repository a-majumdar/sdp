import React from "react";
import Footer from "../../components/organisms/Footer";
import cucumPic from "../../assets/cucumpic.JPG";
import "../articles/art1.css";
import {Helmet} from 'react-helmet';
import Egraph from "../../screens/eGraph";

/**
 * Article 1
 * @returns
 */
export default function art1() {
  const Header = {
    textAlign: "left",
    marginTop: 200,
    color: "black",
    fontSize: "80px",
  };

  return (
    <>
    
    <h2 style={{ marginTop: 140, marginLeft: 600, marginBottom: 40, color: "white" }}>How to grow the perfect cucumber</h2>
      <div className="all-items">
        
        <div className="left-items">

          
        </div>
        <div className="right-items">
        <Egraph />
        </div>
      </div>

      
    </>
  );
}
