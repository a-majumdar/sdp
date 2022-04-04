import React from "react";
import Footer from "../../components/organisms/Footer";
import cucumPic from "../../assets/cactus.jpg";
import "../articles/art6.css";
import {Helmet} from 'react-helmet';
/**
 * Article 1
 * @returns
 */
export default function art6() {
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
    <h2 style={{ marginTop: 140, marginLeft: 600, marginBottom: 40, color: "white" }}>What Is So Special About Cactus Plants?</h2>
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
          Cactus are unique plants, but what makes them so special? While some have been documented to live for hundreds of years, others have become an awe thanks to their bizarre growth patterns, unique shapes and unmatched resistance to harsh conditions.
          <br></br>
          <br></br>
          Ever wondered why a cactus plant is highly referred both in its natural habitat and at home? Well, this prickly plant has remained a wonder to both man and animals, thanks to its unique features.  Any animal or human who has come in contact or seen a cactus will attest that no other plant comes close to it in terms of its uniqueness. It goes against the norm expected for most plants, and this has made it stand out.
          <br></br>
          <br></br>
          While each plant is wired differently, most of them are known to be active during the day. This is especially so in terms of their ability to take up nutrients and make food. During the day, the sun provides the best environment and conditions for photosynthesis, thus keeping most plants active. However, cacti seem to take a different route since they work best at night.  Unlike most plants that open their stomata during the day, cacti have their pores open at night.  This is an adaptation meant to help avoid water loss that would otherwise happen during the day when the sun is up.
          <br></br>
          <br></br>
          By virtue of being part of the succulent family, cacti are known to store water within its system. Unlike other succulents that store its water in the leaves, cacti do not have leaves and will let its stems take up this role. The huge, thick stem help function as a water storage ‘tank’.  This explains why most cactus, have huge, round stems. During the dry season, this plant uses up the water already stored in its stems awaiting the little rains that come by occasionally in the deserts.
          <br></br>
          <br></br>
          Cactus is known to display some of the most bizarre growth patterns in the plant kingdom. This may range from its size to shape and texture. Some varieties like the arborescent cacti would take up the shape of the normal tree but will have a single huge trunk coupled by several branches. Then there are the columnar cacti that grow in cylindrical shapes. Depending on the variety, its stems may or may not have branches.
          <br></br>
          <br></br>

          If you are a cactus enthusiast, you will agree that these prickly plants never cease to amaze. With their hundreds of species and respective uniqueness, you would be spoilt for choice on what to go for. Its exotic-looking features are enough to keep you glued to this special family of plants.
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
