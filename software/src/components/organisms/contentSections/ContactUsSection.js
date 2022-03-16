import React from "react";
import PlantBackground from "../../../assets/meadows.jpg";
import "../contentSections/ContactUsSection.css";
import "../../../App";

function ContactUsSection() {
  const Header = {
    padding: "10px 20px",
    textAlign: "center",
    color: "white",
    marginTop: 100,
    fontSize: "100px",
  };
  const mystyle = {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: "25px",
  };

  return (
    <div className="hero-container">
      <img className="background-image" src={PlantBackground}></img>
      <h1 style={Header}> Get in Touch</h1>

      <p style={mystyle}>
        Ananya Majumdar (Project Manager) - s1802817@ed.ac.uk
      </p>
      <p style={mystyle}>
        Oscar Alberigo (Software Developer) - s1861004@ed.ac.uk
      </p>
      <p style={mystyle}>
        Fadi Barazi (Hardware Developer) - s1969801@ed.ac.uk
      </p>
      <p style={mystyle}>
        Dafydd Evans Foster (Hardware Developer) - s1934523@ed.ac.uk
      </p>
      <p style={mystyle}>
        Eric Gallagher (Software Developer) - s1937645@ed.ac.uk@ed.ac.uk
      </p>
      <p style={mystyle}>Casey Gong (Software Developer) - s1912801@ed.ac.uk</p>
      <p style={mystyle}>
        Susanna Lassila (Software Developer) - s1912801@ed.ac.uk
      </p>
      <p style={mystyle}>
        Binbin Zhan (Software Developer) - s1945599@ed.ac.uk
      </p>
      <p style={mystyle}>Bohan Xu (Hardware Developer) - s1931736@ed.ac.uk</p>
      <div className="hero-btns"></div>
    </div>
  );
}

export default ContactUsSection;
