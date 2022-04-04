import React from "react";
import Footer from "../../components/organisms/Footer";
import cucumPic from "../../assets/war.jpg";
import "../articles/art8.css";
import {Helmet} from 'react-helmet';
/**
 * Article 1
 * @returns
 */
export default function art12() {
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
    <h2 style={{ marginTop: 140, marginLeft: 600, marginBottom: 40, color: "white" }}>Making delicious cress</h2>
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
          So nutrient-rich that you can eat it to fend off scurvy, watercress is a magic green that adds color, spice, and tang to all kinds of dishes. And though you can find it in most grocery stores year-round, the real time for watercress is now: young, local, springtime watercress—usually found at a farmer's market—is the best watercress gets.
          <br></br>
          <br></br>
          So how should you eat it? I'll get to that in a minute. First, two pointers:
          <br></br>
          Once it's harvested, watercress doesn't last very long, so eat it as soon as you can. If it looks a little wilted when you buy it, shock it in a bowl of ice water. And if you must keep it for a few days, store the watercress in the fridge much the same way you'd store fresh herbs—wrapped in a damp paper towel inside a plastic bag, or placed in a glass of water like a bouquet of flowers and tented with a plastic bag.
          <br></br>
          <br></br>
          In the grocery store, you'll often find two different kinds of cress: Thick-stemmed bunches wrapped with a rubber band, and thin-stemmed bunches still attached to their roots, often sold in a plastic bag to lock in humidity and preserve freshness. The latter is upland cress, which is a completely different plant but interchangeable with watercress—and especially good in salads where you might not want the thicker more woodsy stems of traditional watercress.
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
