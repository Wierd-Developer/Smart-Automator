import React, { useEffect, useRef } from "react";
import "../Styles/ServiceCard.css";
import ScrollReveal from "scrollreveal";
const ServiceCard = ({ title, btn1, btn2, btn3, btn4, btn5, btn6, url }) => {
  const headingRef = useRef();
  useEffect(() => {
    ScrollReveal().reveal(headingRef.current, {
      distance: "60px",
      duration: 1500,
      delay: 400,
      scale: 0.85,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="service-card">
      <div className="service-left">
        <h1>{title}</h1>
        <div className="service-buttons">
          <button className="serviceBtn">{btn1}</button>
          <button className="serviceBtn">{btn2}</button>
          <button className="serviceBtn">{btn3}</button>
          <button className="serviceBtn">{btn4}</button>
          <button className="serviceBtn">{btn5}</button>
          <button className="serviceBtn">{btn6}</button>
        </div>
        <div className="btns">
          <button className="viewBtn">View more</button>
        </div>
      </div>
      <div className="service-right">
        <div className="service-img" ref={headingRef}>
          <img src={url} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
