import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../src/assets/PlantEd Small.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbr-container">
          <NavLink to="/" className={"home-button"}>
            <a href="" className="Logo">
              <img className="Logo" src={Logo} alt="" />
            </a>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
