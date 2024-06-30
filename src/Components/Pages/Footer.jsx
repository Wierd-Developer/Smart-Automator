import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import "../Styles/Footer.css";
const Footer = () => {
  const headingRef = useRef();
  useEffect(() => {
    const interval = setInterval(() => {
      ScrollReveal().reveal(headingRef.current, {
        distance: "60px",
        duration: 1500,
        delay: 400,
        origin: "right",
      });
      return () => {
        clearInterval(interval);
      };
    }, 5000);
  }, []);
  return (
    <div className="footer">
      <div ref={headingRef}></div>
      <div className="left-footer">
        <h1 style={{ fontSize: "1rem" }}>Home Automator</h1>
        <h4>
          Amet minim mollit non deserunt ullamc est sit aliqua dolor amet sint.
          <br />
          Amet minim mollit non deserunt ullamco est sit aliqua.
        </h4>
        <div className="social-img">
          <img
            src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617d39269617a61e4b7e818_facebook-fill-white.svg"
            alt=""
          />
          <img
            src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617d3920ad13c50c2c154c0_instagram-fill-white.svg"
            alt=""
          />
          <img
            src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617d392163902a81f2b0c12_tiktok-fill-white.svg"
            alt=""
          />
          <img
            src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617d392163902a81f2b0c1b_linkedin-fill-white.svg"
            alt=""
          />
        </div>
      </div>
      <div className="right-footer">
        <div className="essentials">
          <h3>Services</h3>
          <h4>Furniture assembly</h4>
          <h4>Mount art or shelves</h4>
          <h4>Mount a TV</h4>
          <h4>Plumbing repair</h4>
        </div>
        <div className="resources">
          <h3>Useful Links</h3>
          <h4>Home</h4>
          <h4>About us</h4>
          <h4>Blog</h4>
          <h4>Contact Us</h4>
        </div>
        <div className="resources">
          <h3>Contact</h3>
          <h4>
            Email: <span>info@smartautomator.com</span>
          </h4>
          <h4>
            Phone: <span>+1 (132) 456-7890</span>
          </h4>
          <h4>
            Address: <span>132 Main Street, City, State, Zip Code</span>
          </h4>
          <p>
            Feel free to contact us via email or <br /> phone during our
            business hours:
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
