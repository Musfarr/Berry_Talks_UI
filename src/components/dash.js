import React from "react";
import Sidebar from "./sidebar";
import l1 from "../Assets/email.png";
import l2 from "../Assets/sms.png";
import l3 from "../Assets/Group 175954.svg";
import l4 from "../Assets/twittwr.png";
import l5 from "../Assets/whatsapp.png";
import S1 from "../Assets/S1.svg";
import S2 from "../Assets/S2.svg";
import S3 from "../Assets/S3.svg";
import { ChevronDown } from "@carbon/icons-react";
const Dash = () => {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }} className="uk-grid" uk-grid="">
      <div className="uk-width-auto">
        <Sidebar />
      </div>
      <div className="layout uk-width-expand">
        <div className="wrap">
          <div className="uk-container ">
            <div className="dashhead">
              <div className="uk-grid" uk-grid="">
                <div className="uk-width-1-2">
                  <div className="uk-text-left">
                    <div className="lhead">
                      <h2 className="card1head">Hi, Shayaan</h2>
                      <p className="head2"> Convex Interactive | Admin </p>
                    </div>
                  </div>
                </div>
                <div className="uk-width-1-2">
                  <div className="uk-text-right">
                    <div className=" rhead">
                      <p className="head2 uk-margin-remove-bottom">
                        Your Balance
                      </p>
                      <p className="uk-margin-remove-top head3">
                        {" "}
                        $128,529.60{" "}
                        <span>
                          <ChevronDown size={20} />
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="uk-grid"
              uk-grid=""
              uk-height-match="target: >div > .card1"
            >
              <div className="uk-width-1-2">
                <div className="uk-card card uk-card-small uk-card-body card1">
                  <div className="uk-heading-divider uk-flex uk-flex-between">
                    <p className="uk-margin-remove-bottom head1">
                      Package consumption
                    </p>
                    <p className="greenhead1">
                      Amount PKR 30,000 (expiry 25 Sep)
                    </p>
                  </div>
                  <p className="uk-margin-remove-bottom">
                    Active agents (27% Consumed)
                  </p>
                  <progress
                    id="js-progressbar "
                    className="uk-margin-remove-top uk-progress loader"
                    value="10"
                    max="100"
                  ></progress>
                  <p className="uk-margin-remove-bottom">
                    Conversations (70% Consumed)
                  </p>
                  <progress
                    id="js-progressbar "
                    className=" uk-margin-remove-top uk-progress loader"
                    value="70"
                    max="100"
                  ></progress>
                  <p className="uk-margin-remove-bottom">
                    Active agents (90% Consumed)
                  </p>
                  <progress
                    id="js-progressbar "
                    className=" uk-margin-remove-top uk-progress loader"
                    value="90"
                    max="100"
                  ></progress>
                </div>
              </div>

              <div className="uk-width-1-2">
                <div className="uk-card card uk-card-small uk-card-body card1">
                  <div className="uk-heading-divider uk-flex uk-flex-between">
                    <p className="uk-margin-remove-bottom head1">
                      Active Channels
                    </p>
                    <p className="greenhead1">Integrate Channels</p>
                  </div>

                  <img className="logow" src={l5}></img>
                  <span
                    className="uk-badge"
                    style={{ backgroundColor: "#EC2D37", marginLeft: "-10px" }}
                  >
                    23
                  </span>

                  <p
                    className="uk-margin-remove-top "
                    style={{ color: "#29A869" }}
                  >
                    watsapp
                  </p>
                </div>
              </div>
            </div>

            <h4 className="card2head">Channels coming soon</h4>

            <div
              className="uk-grid"
              uk-grid=""
              uk-height-match="target: >div > .uk-card-small"
            >
              <div className="uk-width-1-4">
                <div className="uk-card card uk-card-small uk-card-body">
                  <img src={l1}></img>
                  <p className="card2head">Email</p>
                  <p className="card2body">
                    Begin the configuration of your domains now.
                  </p>
                </div>
              </div>
              <div className="uk-width-1-4">
                <div className="uk-card card uk-card-small uk-card-body">
                  <img src={l2}></img>
                  <p className="card2head">SMS</p>
                  <p className="card2body">
                    Configure the numbers you will utilize for SMS
                    communications.
                  </p>
                </div>
              </div>
              <div className="uk-width-1-4">
                <div className="uk-card card uk-card-small uk-card-body">
                  <img src={l3}></img>
                  <p className="card2head">Live Chat</p>
                  <p className="card2body">
                    Start by adding the Web Widget to your website and connect
                    with customers across the web.{" "}
                  </p>
                </div>
              </div>
              <div className="uk-width-1-4">
                <div className="uk-card card uk-card-small uk-card-body">
                  <img src={l4}></img>
                  <p className="card2head">Twitter</p>
                  <p className="card2body">
                    Configure the numbers you will utilize for SMS
                    communications.{" "}
                  </p>
                </div>
              </div>
            </div>

            <h4 className="card2head">Solutions</h4>
            <div
              className="uk-grid"
              uk-height-match="target: > div > .heightMatch"
            >
              <div className="uk-width-1-3">
                <div className="uk-card card uk-card-body heightMatch">
                  <img src={S1} />
                  <p className="card2head">Apply for Broadcast</p>
                  <p className="card2body">
                    Broadcast provides a quick and effortless method to send
                    one-way messages across multiple channels using a unified
                    visual interface.
                  </p>
                  <p className="greenhead1">Apply now</p>
                </div>
              </div>
              <div className="uk-width-1-3">
                <div className="uk-card card uk-card-body heightMatch">
                  <img src={S2} />
                  <p className="card2head">Live agent chats</p>
                  <p className="card2body">
                    Engage in real-time conversations with customers through
                    live agent chats.
                  </p>
                  <p className="greenhead1">View Chats</p>
                </div>
              </div>
              <div className="uk-width-1-3">
                <div className="uk-card card uk-card-body heightMatch">
                  <img src={S3} />
                  <p className="card2head">Create a Self-Service Chatbot</p>
                  <p className="card2body">
                    Easily build a customer-centric chatbot for seamless
                    self-service assistance and information retrieval.
                  </p>
                  <p className="greenhead1">Build a Chatbot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
