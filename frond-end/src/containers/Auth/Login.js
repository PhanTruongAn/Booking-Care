import React, { useState } from "react";
import "./Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userApi from "../../api/userApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let handlerUseNameChange = (e) => {
    setUsername(e.target.value);
  };
  let handlerPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  let handlerLogin = async () => {
    let userData = {
      userName: username,
      password: password,
    };
    let res = await userApi.userLogin(userData);
    if (res.EC === 0) {
      toast.success(res.EM);
      setUsername("");
      setPassword("");
      console.log(res);
    } else {
      toast.error(res.EM);
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-content row">
          <div className="col-12 text-login">Login</div>
          <div className="col-12 form-group login-input">
            <label>Phone/Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Phone or Email"
              value={username}
              onChange={(e) => handlerUseNameChange(e)}
            />
          </div>
          <div className="col-12 form-group login-input">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => handlerPasswordChange(e)}
            />
          </div>
          <div className="col-12">
            <button type="button" className="btn-login" onClick={handlerLogin}>
              Login
            </button>
          </div>
          <div className="col-12">
            <button className="forgot-password">Forgot your password?</button>
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

      <div
        className="login-button"
        // onClick={toggleLoginForm}
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
export default Login;
