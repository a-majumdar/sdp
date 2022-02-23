import React from "react";
import "../App.css";
import Footer from "../components/organisms/Footer";
import ContactUsSection from "../components/organisms/contentSections/ContactUsSection";

/**
 * Contact Us section of our website
 * @returns 
 */
export default function ContactUs() {
  return (
    <>
      <ContactUsSection></ContactUsSection>
      {/* <Cards /> */}
      <Footer />
    </>
  );
}
