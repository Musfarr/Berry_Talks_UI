import React from 'react'
import logo from "../Assets/logo.svg";
import { Link } from 'react-router-dom';

const Login2 = () => {
  return (
<>
    <div >
        <div className='uk-grid' uk-grid = "">
            <div className='uk-width-1-2 black'>
                <img src={logo}></img>
            </div>

            <div className='uk-width-1-2 white' >
            <div className="login uk-margin">
          <div>
            <h1 className="loginheading">Login </h1>
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
          <div className="uk-flex   ">
            <div>
              <Link to="/form">
              <h3 className="forgot-button">Forgot Password ?</h3>
              </Link>           
            </div>
            <div >
              <Link to="/dash">
              <button className=" loginbtn "> Log in </button>
              </Link>
            </div>
          </div>
        </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login2