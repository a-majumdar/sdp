import React from "react";
import Footer from "../components/organisms/Footer";
import cucumPic from "../assets/cucum.jpg";
import "./tutorial.css"
import { SliderData } from './SliderData';
import ImageSlider from './ImageSlider';

/**
 * Article 1
 * @returns
 */
export default function tutorial() {
    const Header = {
        textAlign: "left",
        marginTop: 200,
        color: "black",
        fontSize: "80px",
      };
     
      return (
        <>
        <h1 style={{marginTop: 150}}>Tutorial</h1>

        
        <ImageSlider slides={SliderData} />
    
     
          

          <Footer />
        </>
      );
    }
