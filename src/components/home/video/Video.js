import React from "react";
import demo from "../../../images/demo_video.mp4";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video
        autoplay="autoplay"
        src={demo}
        class="desk-video"
        loop="loop"
        muted="muted"
        id="myVideo"
      ></video>
      <div id="overlay"></div>
    </div>
  );
}

export default Video;
