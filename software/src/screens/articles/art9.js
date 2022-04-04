import React from "react";
import Footer from "../../components/organisms/Footer";
import cucumPic from "../../assets/car.jpg";
import "../articles/art8.css";
import {Helmet} from 'react-helmet';
/**
 * Article 1
 * @returns
 */
export default function art9() {
  const Header = {
    textAlign: "left",
    marginTop: 200,
    color: "black",
    fontSize: "80px",
  };

  return (
    <>
    <Helmet>
                <style>{'body { background-color: #97c092; }'}</style>
            </Helmet>
    <h2 style={{ marginTop: 140, marginLeft: 600, marginBottom: 40, color: "white" }}>How to grow your own carrots?</h2>
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
          If you want carrots with plenty of flavour, it’s worth growing your own. Apart from the classic-shaped orange carrots, there’s a wide selection of different varieties, available in an array of unexpected colours.
          <br></br>
          <br></br>
          Sow carrot seed sparingly in drills in prepared soil from March to June. Cover with a thin layer of soil and water with a watering can with a rose attached. Seeds should germinate within a couple of weeks. It’s best to avoid thinning carrots to avoid carrot root fly, but keep the area weed free and water only in very dry spells. You should be harvesting fresh carrots in 14-16 weeks.
          <br></br>
          <br></br>
          There are two types of carrot to choose from – early varieties, which are sown in spring and ready to pick about 10 weeks later, and late varieties, which can be sown from the end of spring and are ready to lift in about 14-16 weeks.
          <br></br>
The main sowing season is late March to June, but earlier and later sowings are worth it if you can protect them with fleece or a cloche.
<br></br>
Good soil preparation is essential. Fork it thoroughly to break up lumps and remove as many stones as possible. Carrots thrive in light, well-drained but moisture-retentive soil, so it’s also worth adding some well-rotted organic matter.
<br></br>
Sow carrots directly into the ground. Make a seed drill (shallow trench) about 1cm deep using the edge of a hoe or trowel. Sow the seeds thinly along the bottom of the drill about 5-8cm apart. Cover them with soil, and water well using a watering can with a rose attached.
<br></br>
To extend your cropping period, sow seeds successionally at two-week intervals. You can also sow a selection of carrot varieties that will crop at different times over the season.



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
