import React from "react";
import "../App.css";
import Cards from "../components/organisms/Cards";
import Footer from "../components/organisms/Footer";
import HeroSection from "../components/organisms/cuHeroSection";

export default function ContactUs() {
  return (
  <>
    <h1 className="ContactUs">Contact Us</h1>;
    <HeroSection></HeroSection>
    {/* <Cards /> */}
    <Footer />
  </>
  );
}
