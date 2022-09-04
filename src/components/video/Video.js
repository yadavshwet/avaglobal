import React from "react";
import demo from "../../assets/images/demo_video.mp4";
import "./Video.css";
import { Link } from "react-router-dom";

function Video() {
  return (
    <div className="video-wrapper">
      <video
        autoplay="autoplay"
        src={demo}
        class="desk-video"
        loop="loop"
        muted="muted"
        id="myVideo"
      ></video>
      <div className="headline tracking">
        <div className="purpose">
          <p className="ava-global">ava global</p>
          <p className="logistics">Redefining logistics & transportation</p>
        </div>
        <div className="container-tracking">
          <div className="wrapper-tracking">
            <p id="TYC">Track Your Container</p>
            <div className="tracking-btns">
              <Link to="/track-container" id="container">
                Container Number
              </Link>

              <Link to="/track-container" id="mbl">
                MBL Number
              </Link>

              <Link to="/track-container" id="container">
                Booking Number
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="supply-chain">
        <div className="supply-dash">
          <div className="dash"></div>
          <p>
            LOGISTIC SOLUTIONS & SUPPLY <br />
            CHAIN OPERATIONS.
          </p>
        </div>
      </div>
      <div id="video-overlay"></div>
      <div id="black-overlay"></div>
    </div>
  );
}

export default Video;
