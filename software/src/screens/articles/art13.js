import React from "react";
import Footer from "../../components/organisms/Footer";
import cucumPic from "../../assets/hth.png";
import "../articles/art8.css";
import {Helmet} from 'react-helmet';
/**
 * Article 1
 * @returns
 */
export default function art13() {
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
    <h2 style={{ marginTop: 140, marginLeft: 600, marginBottom: 40, color: "white" }}>The benefits of keeping plants</h2>
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
          Indoor gardening is still enjoying a surge in popularity, fed by Instagram’s greenery-inspired interior designs, plant-based podcasts, and online plant subscription services like Lazy Flora and Grounded.

While social media trends are notorious for rapid flourish-and-fade lifecycles, indoor gardening may endure longer than most because of the many ways houseplants improve health and well-being.

Here’s what research tells us about the benefits of living and working with indoor plants.
<br></br>
<br></br>
1. Indoor plants may help reduce stress levels : 
A studyTrusted Source published in the Journal of Physiological Anthropology found that plants in your home or office can make you feel more comfortable, soothed, and natural.

In the study, participants were given two different tasks: repotting a houseplant or completing a short computer-based task. After each task, researchers measured the biological factors associated with stress, including heart rate and blood pressure.

They found that the indoor gardening task lowered the stress response in participants. The computer task, on the other hand, caused a spike in heart rate and blood pressure, even though the study participants were young men well-accustomed to computerized work.

Researchers concluded that working with plants could reduce both physiological and psychological stress.

<br></br>
<br></br>
2. Real plants may sharpen your attention : 
Sorry, plastic plants won’t help you pass your exams. In a small study involving 23 participants, researchers put students in a classroom with either a fake plant, a real one, a photograph of a plant, or no plant at all.

Brain scans of the participants showed that the students who studied with real, live plants in the classroom were more attentive and better able to concentrate than students in the other groups.
<br></br>
<br></br>
3. Working with plants can be therapeutic : 
For people experiencing the symptoms of mental illness, indoor gardening can be helpful.

ResearchersTrusted Source have used horticultural therapy to increase feelings of well-being among people with depression, anxiety, dementia, and other conditions.
<br></br>
<br></br>
4. Plants may help you recover from illness faster : 
Being able to look at plants and flowers may speed your recovery from an illness, injury, or surgery.

A 2002 review of the research revealed that people recuperating from several kinds of surgery needed less pain medication and had shorter hospital stays than people who weren’t looking at greenery during their recovery periods.

<br></br>
<br></br>
5. Plants may boost your productivity : 
A bromeliad may turn out to be the best cubicle-mate you’ve ever had.

Multiple studies have found that plants in the workspace increase both productivity and creativity. One frequently cited study from 1996 found that students in a campus computer lab worked 12 percent faster and were less stressed when plants were placed nearby.


<br></br>
<br></br>
6. Plants may improve your whole outlook on work : 
A view of the city park might improve anyone’s job satisfaction — but it might surprise you to learn that a potted plant could have a similar effect.

ResearchersTrusted Source interviewed over 440 Amazon employees in India and the United States. They found that those whose office environment included natural elements like indoor plants felt greater job satisfaction and more commitment to the organization than those who didn’t work around natural elements.

<br></br>
<br></br>

7. Plants may improve the quality of indoor air : 
Scientific support for phytoremediation — that’s the word for plants scrubbing contaminants from the air — usually begins with a NASA study conducted in the 1980s.

Researchers then were looking for ways to improve the air quality in a sealed spacecraft, and they concluded that the roots and soil of houseplants reduced airborne volatile organic compounds (VOCs) significantly.

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
