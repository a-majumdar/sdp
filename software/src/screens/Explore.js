import React from "react";
import "../App.css";
import Cards from "../components/organisms/expCards";
import Footer from "../components/organisms/Footer";
import HeroSection from "../components/organisms/expHeroSection";

export default function Explore() {
  return (
  <>
    <h1 className="Explore">Explore</h1>;
    <HeroSection></HeroSection> 
    <Cards />
    <Footer />
  </>
  );
}
