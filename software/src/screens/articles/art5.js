import React from "react";
import Footer from "../../components/organisms/Footer";
import cucumPic from "../../assets/aloevera.jpg";
import "../articles/art5.css";
import {Helmet} from 'react-helmet';
/**
 * Article 1
 * @returns
 */
export default function art5() {
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
    <h2 style={{ marginTop: 140, marginLeft: 600, marginBottom: 40, color: "white" }}>The amazing benefits of aloe vera</h2>
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
          Aloe vera is a popular medicinal plant that people have used for thousands of years.

Aloe vera, or Aloe barbadensis, is a thick, short-stemmed plant that stores water in its leaves. It is best known for treating skin injuries, but it also has several other uses that could potentially benefit health.
This article lists eight potential health benefits of aloe vera. It also covers some of the risks associated with use.
<br></br>
<br></br>
1. It contains healthful plant compounds :  The cosmetic, pharmaceutical, and food industries use aloe vera extensively, and the plant has an estimated annual market value of $13 billionTrusted Source globally.

Aloe vera is known for its thick, pointed, and fleshy green leaves, which may grow to about 12–19 inches (30–50 centimeters) in length.

Each leaf contains a slimy tissue that stores water, and this makes the leaves thick. This water filled tissue is the “gel” that people associate with aloe vera products.

The gel contains most of the beneficial bioactive compounds in the plant, including vitamins, minerals, amino acids, and antioxidants
<br></br>
<br></br>
2. It has antioxidant and antibacterial properties :  Antioxidants are important for health. Aloe vera gel containsTrusted Source powerful antioxidants belonging to a large family of substances known as polyphenols.

These polyphenols, along with several other compounds in aloe vera, help inhibit the growth of certain bacteria that can cause infections in humans.

Aloe vera is known forTrusted Source its antibacterial, antiviral, and antiseptic properties. This is part of why it may help heal wounds and treat skin problems.

<br></br>
<br></br>
3. It accelerates wound healing : People most often use aloe vera as a topical medication, rubbing it onto the skin rather than consuming it. In fact, it has a long history of use in treating sores, and particularly burns, including sunburn.
<br></br>
<br></br>
4. It reduces dental plaque : Tooth decay and diseases of the gum are very common health problems. One of the best ways to prevent these conditions is to reduce the buildup of plaque, or bacterial biofilms, on the teeth.
<br></br>
<br></br>
5. It helps treat canker sores :  Many people experience mouth ulcers, or canker sores, at some point in their lives. These usually form underneath the lip, inside the mouth, and last for about a weekTrusted Source.

Studies have shown that aloe vera treatment can accelerate the healing of mouth ulcers.

<br></br>
<br></br>
6. It reduces constipation :  Aloe vera may also help treat constipation.

This time it is the latex, not the gel, that provides the benefits. The latex is a sticky yellow residue present just under the skin of the leaf.

The key compound responsible for this effect is called aloin, or barbaloin, which has well-establishedTrusted Source laxative effects.

<br></br>
<br></br>
7. It may improve skin and prevent wrinkles :  There is some preliminary evidence to suggest that topical aloe vera gel can slow aging of the skin.

In a 2009 studyTrusted Source of 30 females over the age of 45, taking oral aloe vera gel increased collagen production and improved skin elasticity over a 90-day period.

<br></br>
<br></br>
8. It lowers blood sugar levels : People sometimes use aloe vera as a remedy for diabetes. This is because it may enhance insulin sensitivity and help improve blood sugar management.

<br></br>
<br></br>
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
