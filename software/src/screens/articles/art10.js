import React from "react";
import Footer from "../../components/organisms/Footer";
import cucumPic from "../../assets/flt.jpg";
import "../articles/art8.css";
import {Helmet} from 'react-helmet';
/**
 * Article 1
 * @returns
 */
export default function art10() {
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
    <h2 style={{ marginTop: 140, marginLeft: 600, marginBottom: 40, color: "white" }}>How to make your flat look better with plants</h2>
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
          There are many good things about living in a flat, not least the fact they tend to be more affordable. But one downside can be a lack of outdoor space. If you’re craving a garden or terrace now that the days are growing longer and milder, here are a few ways to cheat and introduce some life-affirming greenery into your abode. OK, you may not be able to recreate a full-stretch English lawn, complete with water feature and rose garden, but if you’re clever, you can add a lush, leafy atmosphere to any space, however small.
          <br></br>
          <br></br>
          Line your windows :  
One of the things those without gardens often miss is simply enjoying a leafy view from the inside. However, curating a line of potted plants near a large window can provide a ‘green fix’.

Pick a variety of different-shaped foliage for a lush, garden-like feel, and don’t forget to include blooms. Put potted flowers high up on shelves and cut flowers on tables to weave in pretty shots of colour.
<br></br>
          <br></br>
          Double up : 
If you have access to any downstairs exterior space, however miserly, try this. Position potted plants either side of a window, both indoors and out, to add leafy depth. Even if your window only looks onto a light well, balcony or communal courtyard or alley, it will create the illusion of a secret garden oasis, as your eye is led beyond the glass.

 <br></br>
 <br></br>
 Be big and bold : 
Larger potted plants can be pricey, but it’s often worth making the initial investment. One large variety, like the one on the left here, will make a big impact. A mature plant will also be established and hardy, so will be more likely to survive the odd dry spell. However, always carefully read instructions on how to care for plants, as each species has different watering, lighting, heating and feeding needs.

Choose botanical wallpaper
If house plants aren’t for you, a simple wall of botanical wallpaper can still bring welcome greenery into an apartment.

This lovely Impressionist-style print features lines of verdant trees for a woodland feel. It may not beat an actual stroll in the forest, but it’s surprisingly uplifting.
 <br></br>
 <br></br>

 Frame a doorway : 
Create the impression of a tropical paradise outside a doorway by placing large potted plants just beyond the frame. The result: a tantalising glimpse of foliage, even if the door only leads to your hall, bathroom or a narrow outdoor space.

<br></br>
<br></br>
Hang some pots
If a full-on living wall feels like too much work, go for the dialled-down version. Wall-mounted plant pots can add some refreshing colour to an otherwise plain scheme. Hanging several of them, as seen here, gives a great effect. They don’t need to be fancy either – simple spiders, ferns and ivy plants all look good.

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
