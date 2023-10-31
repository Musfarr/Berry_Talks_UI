import React from "react";
import logo from "../Assets/logo.svg";

const Login = () => {
  return (
    <div className="uk-flex">
      <div className="black uk-flex">
        <div className=" logo ">
          <img src={logo}></img>
        </div>
      </div>

      <div className="white">
        <div className="login uk-margin">
          <div>
            <h1 className="loginheading">Login </h1>{" "}
          </div>

          <div className="uk-margin">
            <input
              class="logininput  "
              type="text"
              placeholder="Email or mobile number"
              aria-label="Email or mobile number"
              
            />
          </div>

          <div className="uk-margin">
            <input
              class="logininput"
              type="Password"
              placeholder="password"
              aria-label="password"
              
            />
          </div>
          <div className="uk-margin">
            <p className="pfont">
              This site is protected by captcha and its <u>Privacy Policy</u> and <u>Terms
              of Service</u> apply.
            </p>
          </div>
          <div className="uk-flex uk-flex-between fp ">
            <div>
              <h3 className="forgot-button">Forgot Password ?</h3>
            </div>

            <div>
              <button className=" loginbtn "> Log in </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
