import React, { useContext, useEffect } from "react";
import "../App.css";
import PlantBackground from "../assets/profile-background.jpeg";
import { Card, Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import "./ProfilePage.css";
import yourProfile from "../assets/youProfile.jpg";
import Footer from "../components/organisms/Footer";
import CardItem from "../components/molecules/CardItem";
import addPropButton from "../assets/addpropbutton.png";
import {
  createUser,
  getAllPropogatorsForUser,
  logout,
} from "../firebase/firebase-config";
import { auth } from "../firebase/firebase-config";
import { AuthContext } from "../contexts/AuthContext";
import { getAllInfo } from "../firebase/firebase-config";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  orderByChild,
  equalTo,
  query,
  push,
} from "firebase/database";
import {
  PropagatorContext,
  PropagatorProvider,
} from "../contexts/PropagatorContext";

/**
 * Profile Page section of our website
 * @returns
 */
export default function ProfilePage() {
  const [error, setError] = useState();
  const history = useHistory();
  const { currentUserUID, currentUserEmail } = useContext(AuthContext);
  const { propogatorHasPlant } = useContext(PropagatorContext);
  const { propId } = useContext(PropagatorContext);
  const { plantIdWeb } = useContext(PropagatorContext);

  /**
   * Function to deal with logout of the user, calls logout from firebase-config.js
   */
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/"); //Redirects back to home page
    } catch {
      setError("Failed to logOut");
    }
  }

  //Need to add css to make it look pretty.
  return (
    <>
      <img className="background-image" src={PlantBackground}></img>
      <img className="profPageTitle" src={yourProfile} alt="Logo" />
      <br></br>
      <h2 className="usrlog">Welcome to your profile, {currentUserEmail}</h2>
      <br></br>
      <div>
        <h2 className="actlog">Active Propogators: </h2>

        {!propogatorHasPlant ? (
          <Link to={"/MyProp"}>
            <button className="butt2">
              Propogator ID : {propId} {/*Shows Propogator ID for User*/}
            </button>
          </Link>
        ) : (
          <Link to={"/explore"}>
            <button className="but1">
              Plant Something{" "}
              {/*If the user is yet to plant something redirect them to the explore page*/}
            </button>
          </Link>
        )}
        <br></br>
        <br></br>
        <br></br>
        {/* <h2>
          <button className="but1" >Link another Propogator</button>
        </h2> */}
      </div>
      <div>
        <h2 className="actlog">Motion Capture: </h2>
        {!propogatorHasPlant ? (
          <Link to={"/MyProp"}>
            <button className="butt2">Watch</button>
          </Link>
        ) : (
          <Link to={"/explore"}></Link>
        )}
        <br></br>
        <br></br>
        <br></br>
      </div>

      <div>
        <h2 className="actlog">Plant History : </h2>
        {propogatorHasPlant ? (
          <Link to={"/MyProp"}>
            <button className="butt2">View</button>
          </Link>
        ) : (
          <Link to={"/explore"}></Link>
        )}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      {/* <div>
        <h2>Plant Again</h2>
        <p>Basil Plant</p>
        <p>Basil Plant</p>
        <p>Basil Plant</p>
      </div> */}

      <button onClick={handleLogout} className="logoutbtn">
        Logout
      </button>

      <Footer></Footer>
    </>
  );
}
