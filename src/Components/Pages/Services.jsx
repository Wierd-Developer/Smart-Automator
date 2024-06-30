import React from "react";
import "../Styles/Services.css";

import Servicebar from "./Servicebar";

const Services = () => {
  return (
    <div className="services">
      <div className="services-container">
        <h1>
          Check out <br /> our home improvement services
        </h1>
        <Servicebar />
      </div>
    </div>
  );
};

export default Services;
