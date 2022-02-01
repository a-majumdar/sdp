import React from "react";
import "../App.css";
import Cards from "../components/organisms/Cards";
import HeroSection from "../components/organisms/HeroSection";

function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <Cards />
    </>
  );
}

export default Home;
