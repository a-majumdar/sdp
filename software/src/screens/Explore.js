import React from "react";
import "../App.css";
import Cards from "../components/organisms/expCards";
import Footer from "../components/organisms/Footer";
import HeroSection from "../components/organisms/expHeroSection";

export default function Explore() {
  return (
    <>
      <HeroSection></HeroSection>
      <Cards />
      <Footer />
    </>
  );
}
