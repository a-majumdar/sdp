import React from "react";
import "../App.css";
import Cards from "../components/organisms/Cards";
import Footer from "../components/organisms/Footer";
import HeroSection from "../components/organisms/auHeroSection";

export default function AboutUs() {
  return (
  <>
    <h1 className="AboutUs">About Us</h1>;
    <HeroSection></HeroSection>
    {/* <Cards /> */}
    <Footer />
  </>
  );
}
