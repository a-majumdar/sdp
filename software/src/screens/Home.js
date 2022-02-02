import React from "react";
import "../App.css";
import Cards from "../components/organisms/Cards";
import Footer from "../components/organisms/Footer";
import HeroSection from "../components/organisms/HeroSection";

function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
