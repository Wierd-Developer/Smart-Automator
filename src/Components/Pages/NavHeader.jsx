import React from "react";
import "../Styles/NavHeader.css";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const NavHeader = () => {
  return (
    <div className="nav-header">
      <div className="header-container">
        <div className="header-left">
          <div className="location">
            <div>
              <IoLocationSharp className="location-icon" />
            </div>
            <h4>12880 SW Scholls Ferry Rd Tigard, OR 97223</h4>
          </div>
          <div className="emailId">
            <div>
              <MdEmail />
            </div>
            <h4>info@GreatGreekMediterraneanGrill.com </h4>
          </div>
        </div>
        <div className="social-icons">
          <i>
            <FaTwitter />
          </i>
          <i>
            <MdFacebook />
          </i>
          <i>
            <FaPinterestP />
          </i>
          <i>
            <FaInstagram />
          </i>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
