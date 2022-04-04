import React from "react";
import Footer from "../../components/organisms/Footer";
import cucumPic from "../../assets/cucumpic.JPG";
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
                <style>{'body { background-color: #0F0F11; }'}</style>
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
          Cucumbers are the perfect summer vegetable, adding a crisp fresh taste to salads and summer drinks. It’s easy to grow your own cucumbers from seed, and growing them yourself always seems to make them taste better. In addition to the traditional longer varieties, there are also varieties that produce smaller fruits that can be eaten fresh or pickled.
There are two main types of cucumbers – greenhouse cucumbers and outdoor types.Greenhouse cucumbers need plenty of heat, so need to be grown in a greenhouse or polytunnel. They are large plants that produce long, smooth fruits, similar to those in the supermarket. They don’t need pollinating and the male flowers need to be removed to prevent this happening,
 otherwise the fruits will end up bitter and full of seeds. Some greenhouse varieties have been bred to only produce female flowers.
Outdoor or ‘ridge’ cucumbers can tolerate lower temperatures and can be grown in a sunny spot outside. The fruits are shorter and fatter, with a rough, ridged skin. The flowers are pollinated by insects, so both the male and female flowers are needed. Some varieties trail and can be trained up a support or left to sprawl; bush varieties are more upright and
 compact and ideal for smaller spaces. Some cucumber varieties will grow in a greenhouse or outside. It’s important, however, not to grow a ‘ridge’ type in the greenhouse alongside greenhouse varieties, as this will result in cross pollination and bitter, seed-filled fruits.
<br></br>
<br></br>
 Whether you’re growing indoor or outdoor cucumbers, sow the seeds in late winter or early spring, or buy young plants at the garden centre in late spring. Sow the seeds into pots of peat-free, multi-purpose compost. They need a temperature of at least 20ºC to germinate. Pot seedlings on after they have developed their first pair of ‘true’ leaves. If growing
  outdoor cucumbers, harden off your plants by gently acclimatising them to outdoor conditions, after all risk of frost has passed. Tie them into a sturdy support, such as a bamboo cane, and water regularly. When your cucumbers start to flower, feed weekly with a high potash fertiliser, such as a liquid tomato food. Harvest cucumbers as and when they are ready.
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
