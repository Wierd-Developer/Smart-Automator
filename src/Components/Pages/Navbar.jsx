import React, { useState } from "react";
import "../Styles/Navbar.css";
import { RiMenu4Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import navLogo from "../../Assets/smartlogo.png";
import heart_icon from "../../Assets/heart-icon.png";
import user_icon from "../../Assets/user_icon.png";
import NavHeader from "./NavHeader";
import { HashLink } from "react-router-hashlink";

const Navbar = () => {
  const [show, setShow] = useState(true);

  const sideNavigation = () => {
    show ? setShow(false) : setShow(true);
    // console.log(show);
  };

  return (
    <>
      <NavHeader />
      <div className="navbar">
        <nav className="nav-container">
          <div className="nav-logo">
            <img src={navLogo} alt="nav-logo" />
          </div>
          <ul className={show ? "hide-menu" : ""}>
            <>
              <NavLink to={"/"}>
                <li>Home</li>
              </NavLink>
              <HashLink to={"#services"}>
                <li>Services</li>
              </HashLink>
              <NavLink>
                <li>SystemFunnels</li>
              </NavLink>
              <NavLink to={"/signup"}>
                <li>Sign Up/Login</li>
              </NavLink>
              <NavLink>
                <li className="task-box">
                  <button>
                    <span>Become a Tasker</span>
                  </button>
                </li>
              </NavLink>
              <NavLink>
                <li className="heart-icon">
                  <img src={heart_icon} alt="" />
                </li>
              </NavLink>
              <NavLink>
                <li className="heart-icon">
                  <img src={user_icon} alt="" />
                </li>
              </NavLink>
            </>
          </ul>
          <div className="sidebar">
            {show ? (
              <RiMenu4Fill
                onClick={sideNavigation}
                style={{ fontSize: "35px", color: "#F9AC25" }}
              />
            ) : (
              <RxCross1
                onClick={sideNavigation}
                style={{ fontSize: "30px", color: "#F9AC25" }}
              />
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
