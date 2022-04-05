import React from "react";
import "./MotionCapture.css";
import Footer from "../components/organisms/Footer";
import PlantBackground from "../assets/plantpic2.png";
import {
  getStorage,
  ref as refstore,
  getDownloadURL,
  listAll,
} from "firebase/storage";

import {
  getDatabase,
  ref,
  push,
  set,
  orderByChild,
  equalTo,
  query,
  get,
} from "firebase/database";
import { useEffect } from "react";

/**
 * About Us Section of our website
 * @returns
 */
export default function MotionCapture() {
  const mystyle = {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: "45px",
    width: "80%",
    padding: "10px",
  };

  async function showimage() {
    console.log("heeyyy");
    const storage = getStorage();
    console.log("heeyyyr5");
    const listRef = refstore(storage, "img");
    console.log(storage);
    console.log(listRef);
    console.log("heeyyyr4");
    listAll(listRef)
      .then((res) => {
        var count = 0;
        console.log("heeyyy2");
        res.items.forEach((itemRef) => {
          console.log("heeyyy3");
          if (count == 0) {
            console.log("222");
            console.log(itemRef);
            console.log("123");
            itemRef
              .getDownloadURL()
              .then((url) => {
                //  inserted into an <img> element
                console.log("helloawlhdlja");
                const img = document.getElementById("myimg");
                img.setAttribute("src", url);
              })
              .catch((error) => {});
          }
          count++;
        });

        // All the items under listRef.
        // itemRef
        //   .getDownloadURL()
        //   .then((url) => {
        //     //  inserted into an <img> element

        //     const img = document.getElementById("myimg");
        //     img.setAttribute("src", url);
        //   })
        //   .catch((error) => {});
      })
      .catch((error) => {});
    // getDownloadURL(refstore(storage, `img/`))
    //   .then((url) => {
    //     //  inserted into an <img> element
    //     const img = document.getElementById("myimg");
    //     img.setAttribute("src", url);
    //   })
    //   .catch((error) => {});
  }

  useEffect(() => {
    showimage();
  }, []);

  return (
    <>
      <div className="hero-container2">
        <img className="background-image2" src={PlantBackground}></img>
        <h1 style={{ color: "white", fontSize: 80 }}>
          Lets see how your plant has been doing
        </h1>
        <img style={{ height: 200, width: 200 }} id="myimg"></img>
        <p style={mystyle}>
          PlantEd is a smart plant care system that intends to enhance the
          learning curve of new plant enthusiasts by providing an interactive
          experience for growing plants indoors, as well as assessing the
          optimal conditions for growth.
        </p>
      </div>
      {/* <Cards /> */}
      <Footer />
    </>
  );
}
