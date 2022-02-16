import React from "react";
import "../App.css";
import Cards from "../components/organisms/Cards";
import Footer from "../components/organisms/Footer";
import HomeSection from "../components/organisms/contentSections/HomeSection";

function Home() {
  return (
    <>
      <HomeSection></HomeSection>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
