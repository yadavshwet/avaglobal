import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Navigation from "../navbar/Navigation";
import Video from "./video/Video";
import demo from "../../images/demo_video.mp4";

function Home() {
  return (
    <div className="home-page">
      <Navigation />
      <Video />
    </div>
  );
}

export default Home;
