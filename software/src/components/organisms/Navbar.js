import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/PlantEd Small.png";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../firebase/firebase-config";
import { Button } from "../atoms/Button";
import "../organisms/Navbar.css";

/**
 * Renders a navbar in our application. It is dynamic and so changes whether a user is logged in or not
 * @returns NavBar
 */
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { currentUser } = useContext(AuthContext); //Taken from our AuthContext

  const handleClick = () => setClick(!click); //TODO: Need to get CSS working for Mobile
  const closeMobileMenu = () => setClick(false);

  /**
   * This Function chooses what button to display to the user
   * If the user is logged in the option will be to go to their profile
   * Else they are instructed to Login/SignUp
   * @returns Dynamic Button
   */
  function ButtonAdapt() {
    if (currentUser) {
      //Taken from AuthContext
      return (
        <>
          <Link to="/profile">
            <button className="button-planted">Go to Profile Page</button>
          </Link>
        </>
      );
    }
    if (!currentUser) {
      return (
        <Link to="/sign-up">
          <button className="button-planted">Sign Up/LogIn</button>
        </Link>
      );
    }
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="left side">
          <NavLink to="/" className="logo-button">
            <a href="/" className="logo">
              <img className="logo" src={Logo} alt="" />
            </a>
          </NavLink>
        </div>
        {/* <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div> */}

        <div className="right-side">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/explore"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <ButtonAdapt></ButtonAdapt>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
