import React from "react";
import "../App.css";
import Footer from "../components/organisms/Footer";
import AboutUsSection from "../components/organisms/contentSections/AboutUsSection";

/**
 * About Us Section of our website
 * @returns 
 */
export default function AboutUs() {
  return (
    <>
      <AboutUsSection></AboutUsSection>
      {/* <Cards /> */}
      <Footer />
    </>
  );
}
