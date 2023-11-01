import React from "react";
import l1 from "../Assets/Group 175880.png";

const Form = () => {
  return (
    <div className="bg">
      <div className="formhead  ">
        <div className="uk-container uk-container-large">
          <div
            className="uk-flex uk-flex-between uk-flex-middle"
            style={{ marginTop: "1.5vh" }}
          >
            <div className="  ">
              <img src={l1}></img>
              <span className="logotext">Berry Talks </span>
            </div>

            <div className=" ">
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
            <div className="uk-grid" uk-grid="">
              <div className="uk-width-1-2">
                {" "}
                <p className="mbr card2body">First Name</p>
                <input
                  placeholder="First Name"
                  className="uk-input-primary forminput"
                />{" "}
              </div>
              <div className="uk-width-1-2">
                <p className="mbr card2body">Last Name</p>

                <input
                  className="uk-input-primary forminput"
                  placeholder="First Name"
                />
              </div>
            </div>

            <div className="uk-grid" uk-grid="">
              <div className="uk-width-1-2">
                {" "}
                <p className="mbr card2body">Email</p>
                <input
                  placeholder="Email"
                  className="uk-input-primary forminput"
                />{" "}
              </div>
              <div className="uk-width-1-2">
                <p className="mbr card2body">Mobile</p>
                <input
                  placeholder="Mobile"
                  className="uk-input-primary forminput"
                />
              </div>
            </div>

            <div className="uk-grid " uk-grid="">
              <div className="uk-width-1-1">
                <p className="mbr card2body">
                  Please briefly describe your requirements
                </p>
                <textarea
                  rows="5"
                  placeholder="Brief description..."
                  className="uk-width-1-1 forminput textbox "
                />
                <p className="mbr">
                  Once you have submitted the form, our team will review your
                  application and get back to you with further instructions.
                </p>
              </div>
            </div>

            <div className="frmbtn uk-flex  uk-align-right uk-margin-large">
              <button className=" wbtn">Cancel </button>
              <button className="  loginbtn">Request a demo </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
