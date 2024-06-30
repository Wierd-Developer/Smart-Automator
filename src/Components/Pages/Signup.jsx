import React from "react";
import Layout from "./Layout";
import "../Styles/Signup.css";
import { NavLink } from "react-router-dom";
const Signup = () => {
  return (
    <Layout>
      <div className="signup-page">
        <div className="signup-container">
          <form>
            <div className="form-input">
              <p style={{ fontSize: "25px", fontWeight: "500" }}>
                Smart Automater
              </p>

              <div className="login-details">
                <input
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="fname"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required
                />
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                />
                <input
                  type="number"
                  placeholder="Zip Code"
                  name="zipcode"
                  required
                />
                <button
                  style={{ width: "100%", marginTop: "30px" }}
                  className="signupBtn"
                  type="submit"
                >
                  Register
                </button>
                <NavLink to={"/login"}>
                  <p
                    style={{
                      marginTop: "25px",
                      fontSize: "15px",
                      color: "#222",
                    }}
                  >
                    Already have an account? <u>Login </u>
                  </p>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
