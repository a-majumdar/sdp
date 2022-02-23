import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Cards from "../components/organisms/Cards";
import Footer from "../components/organisms/Footer";
import HomeSection from "../components/organisms/contentSections/HomeSection";
import { auth } from "../firebase/firebase-config";

/**
 * Home section of our website
 * @returns
 */
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
