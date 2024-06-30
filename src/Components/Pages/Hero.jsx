import React, { useEffect, useRef } from "react";
import "../Styles/Hero.css";
import { FaSearch } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const Hero = () => {
  const headingRef = useRef();
  useEffect(() => {
    ScrollReveal().reveal(headingRef.current, {
      distance: "60px",
      duration: 2500,
      delay: 400,
      origin: "bottom",
    });
  }, []);
  return (
    <div className="hero" ref={headingRef}>
      <div className="overlay"></div>
      <div className="hero__container">
        <h1>Create the best smart home</h1>
        <h4>
          Ready to dive into the internet of things to automate your home? Start
          with the op
        </h4>
        <h4>products we’ve tested for every room</h4>
        <div className="serach-box">
          <input type="text" placeholder="search" />
          <div>{<FaSearch />}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
