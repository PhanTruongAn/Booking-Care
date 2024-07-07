import React, { useState } from "react";
import "./Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="login-wrapper">
      {showLoginForm && (
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <div className="col-12">
              <button type="button" className="btn-login">
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot your password?</span>
            </div>
            <div className="col-12 text-center">
              <span>Or Login with:</span>
            </div>
            <div className="col-12 d-flex justify-content-around social-icon">
              <button type="button" className="google">
                <FontAwesomeIcon
                  icon="fa-brands fa-google-plus"
                  fontSize={37}
                  color="red"
                />
              </button>
              <button type="button" className="facebook">
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook"
                  fontSize={37}
                  color="#0866ff"
                />
              </button>
              <button type="button" className="twitter">
                <FontAwesomeIcon
                  icon="fa-brands fa-twitter"
                  style={{
                    fontSize: 23,
                    color: "white",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        className="login-button"
        onClick={toggleLoginForm}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          backgroundColor: "#0dcaf0",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Login
      </div>
    </div>
  );
}
