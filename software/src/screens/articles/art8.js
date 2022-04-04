import React from "react";
import Footer from "../../components/organisms/Footer";
import cucumPic from "../../assets/chil.jpg";
import "../articles/art8.css";
import {Helmet} from 'react-helmet';
/**
 * Article 1
 * @returns
 */
export default function art8() {
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
    <h2 style={{ marginTop: 140, marginLeft: 600, marginBottom: 40, color: "white" }}>Spice your life up with chillis</h2>
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
          There are thousands of chilli varieties to grow, in a huge range of colours, shapes, sizes and levels of heat, from mild to extremely hot. Many have unique flavours, with some offering a hint of lemon and others having a more fruity taste.
          <br></br>
          A chilli’s heat is measured on the Scoville scale, a test created in 1912, in which the more water needed to dilute a chilli solution before a human taster can no longer detect the chilli determines the number of Scovilles. Today, testing is done by machines. A score of around 3,000 Scovilles is deemed hot, with record-breaking chillies such as ‘Carolina Reaper’ topping two million mark.
          <br></br>
          Many chilli varieties are available to buy in supermarkets but you will have a much greater range to choose from if you grow chillies yourself. They’re very easy to grow from seed, and grow best in containers, which means they are perfect for a sunny patio or balcony. You can also buy ready-grown chilli plants at the garden centre in spring.
          <br></br>
          Sow chilli seed indoors as early as January if you have a heated propagator, or from March if you don’t. Transplant seedlings into individual 7.5cm pots when the first true leaves appear. Eventually, transplant them into 30cm pots of peat-free, multi-purpose compost. Wait until all risk of frost has passed before moving them to their final growing positions outside, in a sunny spot. For the hottest chillies, grow in a greenhouse. Chillies are tender plants, so will not survive the winter. It’s best to sow seeds for fresh plants each year.
            <br></br>
          Chillies need a warm, sunny spot for the best results and the hottest chillies. Ideally, grow them in a greenhouse or raise them in pots on a south-facing patio or windowsill. Chillies need a long season to grow, so it’s best to sow seed as early as January in moist, peat-free multi-purpose compost, and keep in a heated (PlantEd) propagator under a growing light, to prevent seedlings going leggy (sow seed in March if you don’t have a heated propagator). Pot on into individual pots when the first true leaves appear. Keep potting on if growing in pots or plant out into the greenhouse when night temperatures exceed 10ºC – ensure the soil or compost is free-draining. Feed weekly with a high potash fertiliser once plants have started flowering, and harvest chillies as and when they appear.


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
