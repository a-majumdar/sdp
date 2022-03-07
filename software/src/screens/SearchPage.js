import React from "react";
import "../App.css";
import Footer from "../components/organisms/Footer";
import SearchPageSection from "../components/organisms/contentSections/SearchPageSection";
import { theUserSearch } from "./Explore";
/**
 * About Us Section of our website
 * @returns 
 */
export default function SearchPage() {

  return (
    <>
    {/* <p>stuff is belwo {theUserSearch}</p> */}
    {/* <div>{location.state.name}</div> */}
      <SearchPageSection></SearchPageSection>
      {/* <Cards /> */}
      

      <Footer />
    </>
  );
}
