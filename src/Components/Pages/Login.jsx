import React from "react";
import Layout from "./Layout";
import "../Styles/Login.css";
import { NavLink } from "react-router-dom";
const Login = () => {
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
                <button
                  style={{ width: "100%", marginTop: "30px" }}
                  className="signupBtn"
                  type="submit"
                >
                  Login
                </button>
                <NavLink to={"/signup"}>
                  <p
                    style={{
                      marginTop: "25px",
                      fontSize: "14px",
                      color: "#222",
                    }}
                  >
                    Don't have an account yet? Sign up <u>here</u>
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

export default Login;
