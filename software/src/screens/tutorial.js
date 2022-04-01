import React from "react";
import Footer from "../components/organisms/Footer";
import cucumPic from "../assets/cucum.jpg";

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
    <img
     style={{
       flex: 1,
       width:500,
       height:500,
       flex: 0.5, 
       justifyContent: 'center', 
       alignItems: 'center', 
       marginTop: 20,
       marginLeft: 20
     }}
     source={cucumPic}
     />
      <p style={{fontSize: 20, marginLeft: 620}} >
                Cucumbers are Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers are
                Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers are
                Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers Cucumbers areCucumbers are
                Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers are
    </p>

          

          <Footer />
        </>
      );
    }
