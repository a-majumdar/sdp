import React from "react";
import "../App.css";
import "../screens/PropogatorPage.css";
import Footer from "../components/organisms/Footer";
import plant from "../assets/plant1.png";

/**
 * Propogator Section of Our Website
 * @returns 
 */
export default function MyProp() {
  return (
    <>
      <h1>Your plant,</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="box">
        <img
          className="img"
          src={plant}
          alt="Logo"
          style={{
            width: 400,
            height: 500,
            marginRight: 10,
            marginBottom: 12,
            marginTop: 12,
          }}
        />
        <p class="one">Temperature - {/* The reading  */}</p>
        <p class="two">Soil pH - {/* The reading  */}</p>
        <p class="three">Sunlight - {/* The reading  */}</p>
        <p class="one">Humidity - {/* The reading  */}</p>
        <p class="two">Moisture - {/* The reading  */}</p>
        <p class="three">Ventilation - {/* The reading  */}</p>
      </div>

      {/*
      <h1>Your plant,</h1>
      <div className="container">
      <img 
      className='img'
      src={plant} alt="Logo" 
      />
      </div>
       style={{width:'25%', height:"28"}}
      <p>Tempertature</p>
      {/* 
      <p>Sunlight</p>
      <p>Soil pH</p>
      <p>Moisture</p>
      <p>Humidity</p>
      <p>Ventilation</p>
      */}

      <Footer />
    </>
  );
}
