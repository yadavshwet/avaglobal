import React from "react";
import demo from "../../assets/images/demo_video.mp4";
import "./Video.css";

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
      <div className="overlay-text">
        <p className="ava-global">ava global</p>
        <p className="logistics">Redefining logistics & transportation</p>
      </div>
      <div className="container-tracking">
        <p>Track Your Container</p>
        <div className="tracking-btns">
          <a href="/" id="container">
            Container Number
          </a>
          <a href="/" id="mbl">
            MBL Number
          </a>
          <a href="/" id="booking">
            Booking Number
          </a>
        </div>
      </div>
      <div className="supply-chain">
        <div className="dash"></div>
        <p>
          LOGISTIC SOLUTIONS & SUPPLY <br />
          CHAIN OPERATIONS.
        </p>
      </div>
      <div id="video-overlay"></div>
      <div id="black-overlay"></div>
    </div>
  );
}

export default Video;
