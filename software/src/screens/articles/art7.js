import React from "react";
import Footer from "../../components/organisms/Footer";
import cucumPic from "../../assets/snop.jpg";
import "../articles/art7.css";
import {Helmet} from 'react-helmet';
/**
 * Article 1
 * @returns
 */
export default function art7() {
  const Header = {
    textAlign: "left",
    marginTop: 200,
    color: "black",
    fontSize: "80px",
  };

  return (
    <>
    <Helmet>
                <style>{'body { background-color: #0F0F11; }'}</style>
            </Helmet>
    <h2 style={{ marginTop: 140, marginLeft: 600, marginBottom: 40, color: "white" }}>Snowdrop season is in</h2>
      <div className="all-items">
        
        <div className="left-items">
          <img
            style={{
              marginLeft: 80,
              width: 500,
              height: 500,
            }}
            src={cucumPic}
          />
        </div>
        <div className="right-items">
          
          
          <p style={{fontSize: 18, color: "white"}}>
          After the darkness of winter, snowdrops are a welcome sign that spring will soon be on its way. Our snowdrop guide looks at the best places to see them in the UK, when to plant snowdrops and how to care for the plants.
          <br></br>
          <br></br>
          Is there a more refreshing sight in winter than seeing a little snowdrop flower poking its head up through the leaves? Snowdrops are a symbol of life returning in the midst of winter, and a reminder that spring will soon be returning.
          The snowdrop may appear delicate but it is a hardy little plant, surviving snowfall and cold temperatures. Its Latin classification, Galanthus nivalis, literally means ‘milk flower of the snow’.
          When little else is growing in the British countryside, snowdrops can brighten the otherwise barren landscape – and finding a clutch of little white blooms elevates any weekend walk. 
          <br></br><br></br>
          Snowdrops flower between January and March, often appearing en masse and creating a characteristic ‘white blanket’ coverage. They thrive in lightly shaded woodland areas and can be found all around the UK.
          In the 1950s, snowdrops would not typically flower until late February, but during the past few decades the teardrops of white have appeared ever earlier, and in particularly mild winters, snowdrops may not even wait for a New Year to begin.

          <br></br><br></br>
          The snowdrop is native across Central and Southern Europe, and became naturalised within our native flora. In his book Types of Floral Mechanism (1908), Arthur Church suggests the snowdrop may have been brought to our shores by the Romans, but notes that the first-known cultivation of the plant was made by John Gerard in 1597.
          Snowdrops can be found in woodlands, parks and gardens. Keep an eye out during a local walk this January and you may spot a clump or two.
            
          <br></br><br></br>
          Since the 1950s Kew Gardens have been monitoring the growth of snowdrops. In the mid-part of the 20th century they would generally appear in February, since the 1990’s they have been arriving increasingly quickly. These days they are sometimes found as early in the year as January, an indication of the UK’s changing climate.

          </p>
        </div>
      </div>

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
