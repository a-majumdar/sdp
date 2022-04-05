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
import { useState } from "react";

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

  const [image, SetImage] = useState();

  async function showimage() {
    console.log("1111111111");
    const storage = getStorage();
    const listRef = refstore(storage, "img");
    listAll(listRef).then((res) => {
      res.items.forEach((itemRef) => {
        {
          console.log(itemRef);
          console.log(itemRef.fullPath);
          getDownloadURL(itemRef)
            .then((url) => {
              console.log("Image url is" + url);
              SetImage(url);
            })
            .catch((error) => {});
        }
      });
    });
  }

  useEffect(() => {
    showimage();
  }, []);

  return (
    <>
      <div className="hero-container20">
        {/* <div className="background-image"></div> */}
        <img className="background-image2" src={PlantBackground}></img>
        <h1 style={{ color: "white", fontSize: 80 }}>
          Motion Capture, Looking good!
        </h1>
        <img style={{ borderRadius: 20 }} src={image}></img>
      </div>
      <Footer />
    </>
  );
}
