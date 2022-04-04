import React, { useContext, useEffect } from "react";
import "../App.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import "./ProfilePage.css";
import Footer from "../components/organisms/Footer";
import PlantedProfilePic from "../assets/plantedProfilePic.png";
import { logout } from "../firebase/firebase-config";
import { AuthContext } from "../contexts/AuthContext";
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
      <div className="background-image"></div>
      <div className="header2">
        <img className="profile-pic" src={PlantedProfilePic}></img>
        <h2 className="usrlog">Welcome to your profile, {currentUserEmail}</h2>
      </div>
      <br></br>
      <div className="all-items">
        <div className="left-items">
          <br></br>
          <h2 className="actlog">Click to see your propagator: </h2>

          {!propogatorHasPlant ? (
            <Link to={"/MyProp"}>
              <button className="butt2">
                Propogator ID : {propId} {/*Shows Propogator ID for User*/}
              </button>
            </Link>
          ) : (
            <Link to={"/explore"}>
              <button className="butt2">
                Plant Something{" "}
                {/*If the user is yet to plant something redirect them to the explore page*/}
              </button>
            </Link>
          )}
          <br></br>
          <br></br>

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
          <h2 className="actlog">Tutorial: </h2>
          {!propogatorHasPlant ? (
            <Link to={"/tutorial"}>
              <button className="butt2">User Guide</button>
            </Link>
          ) : (
            <Link to={"/explore"}></Link>
          )}
          <br></br>
          <br></br>
          <h2 className="actlog">
            Plant History : Aubergine (12th March 2022){" "}
          </h2>
          {!
          propogatorHasPlant ? (
            <Link to={"/MyProp"}>
              <button className="butt2">View</button>
            </Link>
          ) : (
            <Link to={"/explore"}></Link>
          )}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="right-items"></div>
      </div>

      <br></br>
      <br></br>

      <div className="logoutdiv">
        <button className="butt3">Reset Password</button>
        <button onClick={handleLogout} className="butt3">
          Logout
        </button>
      </div>

      <Footer></Footer>
    </>
  );
}
