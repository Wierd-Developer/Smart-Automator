import React from "react";
import "../Styles/Servicebar.css";
import { NavLink } from "react-router-dom";
import { FaWrench } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { FaPaintRoller } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
const Servicebar = ({ children }) => {
  return (
    <>
      <div className="service-bar">
        <h1>Check out our home improvement services</h1>
        <div className="services-title">
          <NavLink to={"/"}>
            <div>
              <FaWrench style={{ color: "#FFF", fontSize: "2rem" }} />
            </div>
            <h6>Assembly</h6>
          </NavLink>
          <NavLink to={"/cleaning"}>
            <div>
              <MdCleaningServices style={{ color: "#FFF", fontSize: "2rem" }} />
            </div>
            <h6>Cleaning</h6>
          </NavLink>
          <NavLink to={"/moving"}>
            <div>
              {" "}
              <LiaTruckMovingSolid
                style={{ color: "#FFF", fontSize: "2rem" }}
              />
            </div>
            <h6>Moving</h6>
          </NavLink>
          <NavLink to={"/painting"}>
            <div>
              <FaPaintRoller style={{ color: "#FFF", fontSize: "2rem" }} />
            </div>
            <h6>Painting</h6>
          </NavLink>
          <NavLink to={"/home-repair"}>
            <div>
              <FaHammer style={{ color: "#FFF", fontSize: "2rem" }} />
            </div>
            <h6>Home Repair</h6>
          </NavLink>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
};

export default Servicebar;
