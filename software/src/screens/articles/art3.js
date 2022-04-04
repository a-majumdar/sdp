import React from "react";
import Footer from "../../components/organisms/Footer";
import cucumPic from "../../assets/Tomato.jpeg";
import "../articles/art3.css";
import { Helmet } from "react-helmet";
/**
 * Article 1
 * @returns
 */
export default function art3() {
  const Header = {
    textAlign: "left",
    marginTop: 200,
    color: "black",
    fontSize: "80px",
  };

  return (
    <>
      <Helmet>
        <style>{"body { background-color: #97c092; }"}</style>
      </Helmet>
      <h2
        style={{
          marginTop: 140,
          marginLeft: 600,
          marginBottom: 40,
          color: "white",
        }}
      >
        The art of tomato growing
      </h2>
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
          <p style={{ fontSize: 18, color: "white" }}>
            Start with healthy plants. Whether homegrown or store-bought, plants
            should be short and stocky (6 to 10 in. tall). Avoid plants with
            blossoms or fruit. You'll pay more for plants in individual 4-in.
            pots, but they usually have larger root systems than those growing
            in cell packs. As a result, they will grow faster after
            transplanting. Choose the right site. Tomatoes grow best in full sun
            (at least 8 hours daily) and well-drained soil rich in organic
            matter. Work a couple inches of compost or decomposed manure into
            the upper 6 in. of soil prior to planting. If a soil test shows the
            pH is below 6.0, apply lime.
            <br></br>
            <br></br>
            Plant right. Set plants in the garden after the danger of frost and
            when the soil temperatures are above 60°F. (Experienced gardeners
            sometimes plant earlier and shelter plants to protect them from cold
            and frost.)
            <br></br>
            <br></br>
            Space plants 1 1/2 to 3 ft. apart (closer for determinate varieties,
            which spread less). Wide spacing assures good air circulation, which
            discourages diseases.
            <br></br>
            <br></br>
            Plant seedlings in the ground deeper than they were growing in their
            pots so the lowest leaves are just above the soil level. Roots will
            grow along the length of the buried stem, resulting in stronger
            plants. And, don't forget to water freshly planted seedlings. Most
            experts recommend fertilizing at planting time. But go easy on the
            fertilizer. In this case, less is best because too much nitrogen
            fertilizer results in vigorous vines with few tomatoes. The
            recommendation from Clemson University Extension is fairly standard:
            Pour about 1 pint of starter solution (2 tbs. of 10-10-10 or 5-10-5
            fertilizer per gallon of water) around each plant.
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
