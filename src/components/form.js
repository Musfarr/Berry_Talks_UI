import React from "react";
import l1 from "../Assets/Group 175880.png";

const Form = () => {
  return (
    <div className="bg">
      <div className="formhead  ">
        <div className="uk-container uk-container-large">
          <div className="uk-flex uk-flex-between uk-flex-middle">
            <div>
              <img src={l1}></img>
              <span className="logotext">Berry Talks </span>
            </div>

            <div>
              <p className="greenhead1 ">Need help</p>
            </div>
          </div>
        </div>
      </div>
      <div className="formbg">
        <div className="uk-container">
          <h1 className="uk-margin-remove-bottom formheading">
            Apply for live agent chats
          </h1>
          <p className="mtr formsubhead ">
            Please provide the details and specific requirements you would like
            to have for the live agent chats feature.
          </p>
          <div className="uk-card uk-card-body card">
            <h1 className="card2head uk-padding-remove-top">
              User information{" "}
            </h1>
            <form>
            <div className="uk-container-small">

              <div className="uk-grid uk-grid-small" uk-grid="">
                <div className="uk-width-1-2">
                  <label htmlFor="First" className="mbr card2body">
                    {" "}
                    First Name{" "}
                  </label>
                  <br />
                  <input
                    id="First"
                    placeholder="First Name"
                    className="uk-input forminput"
                  />
                </div>
                <div className="uk-width-1-2">
                  <label htmlFor="Last" className="mbr card2body">
                    {" "}
                    Last Name{" "}
                  </label>
                  <input
                    id="Last"
                    className="uk-input forminput"
                    placeholder="Last Name"
                  />
                </div>
                <div className="uk-width-1-2">
                  <label htmlFor="Last" className="mbr card2body">
                    {" "}
                    Email{" "}
                  </label>
                  <input
                    id="Last"
                    className="uk-input forminput"
                    placeholder="Email"
                  />
                </div>
                <div className="uk-width-1-2">
                  <label htmlFor="Last" className="mbr card2body">
                    {" "}
                    Mobile number{" "}
                  </label>
                  <input
                    id="Last"
                    className="uk-input forminput"
                    placeholder="Mobile number"
                  />
                </div>
              </div>
              
              {/* <div className="uk-grid" uk-grid="">
                <div className="uk-width-1-2">
                  <label htmlFor="Email" className="mbr card2body">
                    {" "}
                    Email{" "}
                  </label>
                  <br />
                  <input
                    id="Email"
                    placeholder="Email address  "
                    className="uk-input-primary forminput"
                  />
                </div>
                <div className="uk-width-1-2">
                  <label htmlFor="mobile" className="mbr card2body">
                    {" "}
                    Mobile number{" "}
                  </label>
                  <input
                    id="mobile"
                    placeholder="Mobile"
                    className="uk-input-primary forminput"
                  />
                </div>
              </div> */}

              <div className="uk-grid " uk-grid="">
                <div className="uk-width-1-1">
                  <p className="card2body mbr">Please briefly describe your requirements</p>
                  <textarea
                    id="textarea"
                    rows="5"
                    placeholder="Brief description..."
                    className="uk-width-1-1  textbox forminput "
                  />
                  <p className="card2body mbr">
                    Once you have submitted the form, our team will review your
                    application and get back to you with further instructions.
                  </p>
                </div>
              </div>
              </div>

              <div className="frmbtn uk-flex  uk-align-right uk-margin-large">
                <button className=" wbtn">Cancel </button>
                <button type="submit" className="  loginbtn">
                  Request a demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
