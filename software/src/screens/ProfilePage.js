import React, { useContext, useEffect } from "react";
import "../App.css";
import PlantBackground from "../assets/back.jpg";
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
import { PropogatorContext } from "../contexts/PropogatorContext";

/**
 * Profile Page section of our website
 * @returns
 */
export default function ProfilePage() {
  const [error, setError] = useState();
  const history = useHistory();
  const { currentUserUID, currentUserEmail } = useContext(AuthContext);
  const { propogatorHasPlant } = useContext(PropogatorContext);
  const [propId, setPropId] = useState("");


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

  /**
   * The UseEffect Method Access' the right PropagatorId for the Current User
   * And display it in the button
   * @param {*} userId
   */
  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db);
    var propagatorId = null;

    get(child(dbRef, "User_Propogator_relations/" + currentUserUID))
      .then((snapshot) => {
        //Creates a snapshot (what value is at that current location)
        if (snapshot.exists) {
          propagatorId = snapshot.val().propagatorId;
          setPropId(propagatorId); //Sets our useState to the propogatorId we just found to corrsepond to the user
        } else {
          alert("No data found!");
        }
      })
      .catch((error) => {
        alert("unsuccessful, error" + error);
      });
  });

  /**
   * NOT IMPLEMENTED YET
   */
  function showPropogatorReadings() {
    const db = getDatabase();
    const dbRef = ref(db);
    var propagatorId = null;
    var humidity = null;
    var moisture = null;
    var prop_details = null;
    var sunlight = null;
    var temperature = null;
    get(child(dbRef, "User_Propogator_relations/" + currentUserUID))
      .then((snapshot) => {
        //Creates a snapshot (what value is at that current location)
        if (snapshot.exists) {
          propagatorId = snapshot.val().propagatorId;
          setPropId(propagatorId); //Sets our useState to the propogatorId we just found to corrsepond to the user
        } else {
          alert("No data found!");
        }
      })
      .catch((error) => {
        alert("unsuccessful, error" + error);
      });
  }

  //Need to add css to make it look pretty.
  return (
    <>
    <img className="background-image" src={PlantBackground}></img>
      <img 
      class="profPageTitle"
      src={yourProfile}
      alt="Logo"
      />
      <br></br>
      <h2 className="usrlog">Current User ID Logged On : {currentUserUID}</h2>
      <br></br>
      <div>
        <h2 className="actlog">Active Propogators: </h2>
        
        {propogatorHasPlant ? (
          <Link to={"/MyProp"}>
            <button className="butt2" onClick={showPropogatorReadings} >
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
        <br></br><br></br>
        {/* <h2>
          <button className="but1" >Link another Propogator</button>
        </h2> */}
      </div>


      <div>
        <h2 className="actlog">Motion Capture: </h2>
        {propogatorHasPlant ? (
          <Link to={"/MyProp"}>
            <button className="butt2" onClick={showPropogatorReadings} >
              Watch
              
            </button>
          </Link>
    
        ) : (
          <Link to={"/explore"}>
            
          </Link>
        )}
        <br></br><br></br><br></br>
      </div>

      <div>
        <h2 className="actlog">Plant History : </h2>
        {propogatorHasPlant ? (
          <Link to={"/MyProp"}>
            <button className="butt2" onClick={showPropogatorReadings} >
              View
              
            </button>
          </Link>
    
        ) : (
          <Link to={"/explore"}>
            
          </Link>
        )}
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
      {/* <div>
        <h2>Plant Again</h2>
        <p>Basil Plant</p>
        <p>Basil Plant</p>
        <p>Basil Plant</p>
      </div> */}
      
      <button onClick={handleLogout} className="logoutbtn">Logout</button>
      
      <Footer></Footer>
    </>
  );
}
