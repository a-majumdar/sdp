import React from "react";
import Footer from "../../components/organisms/Footer";
import cucumPic from "../../assets/cucum.jpg";
import "../articles/art1.css";

/**
 * Article 1
 * @returns
 */
export default function art1() {
    const Header = {
        textAlign: "left",
        marginTop: 200,
        color: "black",
        fontSize: "80px",
      };
     
      return (
        <>
        <h1 style={{marginTop: 150}}>How to grow the perfect cucumber</h1>
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
      <p style={{position: 'absolute', fontSize: 20, marginLeft: 620}} >
                Cucumbers are Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers are
                Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers are
                Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers Cucumbers areCucumbers are
                Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers are
    </p> 
     
 
            {/* <h1 style={Header}> Cucumbers</h1>
              <img className="image" src={cucumPic}></img>
              <p >
                Cucumbers are Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers are
                Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers are
                Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers Cucumbers areCucumbers are
                Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers are
              </p> */}

        {/* <div class="box">
          <div class="one"><p >
                Cucumbers are Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers are
                Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers are
                Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers Cucumbers areCucumbers are
                Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers are
              </p></div>
              <div class="two"><p >
                Cucumbers are Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers are
                Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers are
                Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers Cucumbers areCucumbers are
                Cucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers areCucumbers are
              </p></div>
          
          
        </div> */}
            {/* <div>
              <p style={mystyle}>
                Ananya Majumdar (Project Manager) - s1802817@ed.ac.uk
              </p>
              <p style={mystyle}>
                Oscar Alberigo (Software Developer) - s1861004@ed.ac.uk
              </p>
              <p style={mystyle}>
                Fadi Barazi (Hardware Developer) - s1969801@ed.ac.uk
              </p>
              <p style={mystyle}>
                Dafydd Evans Foster (Hardware Developer) - s1934523@ed.ac.uk
              </p>
              <p style={mystyle}>
                Eric Gallagher (Software Developer) - s1937645@ed.ac.uk@ed.ac.uk
              </p>
              <p style={mystyle}>
                Casey Gong (Software Developer) - s1912801@ed.ac.uk
              </p>
              <p style={mystyle}>
                Susanna Lassila (Software Developer) - s1912801@ed.ac.uk
              </p>
              <p style={mystyle}>
                Binbin Zhan (Software Developer) - s1945599@ed.ac.uk
              </p>
              <p style={mystyle}>
                Bohan Xu (Hardware Developer) - s1931736@ed.ac.uk
              </p>
            </div> */}

          

          {/* <Footer /> */}
        </>
      );
    }
