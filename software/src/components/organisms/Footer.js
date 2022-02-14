import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../atoms/Button";
import "../organisms/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscriptiom-heading">
          Join the FUN, Join the PlantED Community!
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />

            <Button buttonStyle="btn--planted">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-links-wraper">
          <div className="footer-link-items">
            <h2>Home</h2>
            <Link>My propogator</Link>
            <Link>Previous Plants</Link>
            <Link>Plant History</Link>
            <Link>Stop Motion</Link>
          </div>
        </div>
        <div className="footer-link-items">
          <h2>About Us</h2>
          <Link>The Team</Link>
          <Link>Our Goals</Link>
          <Link>How it started?</Link>
          <Link>Support Us!</Link>
        </div>
        <div className="footer-link-items">
          <h2>Explore</h2>
          <Link>Growth</Link>
          <Link>Health</Link>
          <Link>Cooking</Link>
          <Link>Mindful Planting</Link>
        </div>
        <div className="footer-link-items">
          <h2>Contact Us</h2>
          <Link>Email</Link>
          <Link>Socials</Link>
          <Link>FAQs</Link>
          <Link></Link>
        </div>
      </div>
      <section className="social-media">
        <Link to="/" className="social-logo">
          PlantED
        </Link>
        <small className="website-rights">PlantED © 2022</small>

        <Link
          className="social-icon-link facebook"
          to="/"
          target="_blank"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link
          className="social-icon-link instagram"
          to="/"
          target="_blank"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </Link>
      </section>
    </div>
  );
}

export default Footer;
