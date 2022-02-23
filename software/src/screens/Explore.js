import React from "react";
import "../App.css";
import Cards from "../components/organisms/expCards";
import Footer from "../components/organisms/Footer";
import ExploreSection from "../components/organisms/contentSections/ExploreSection";

/**
 * Explore section of our website
 * @returns 
 */
export default function Explore() {
  return (
    <>
      <ExploreSection></ExploreSection>
      <Cards />
      <Footer />
    </>
  );
}
