import React, { useEffect } from "react";
import Video from "../video/Video";
import { getCall } from "../api-util";
import apilist from "../apiList.json";

function Home() {
  useEffect(() => {
    const data = getCall(apilist.api.carrierList);
    console.log(data);
  }, []);

  return (
    <div className="home-page">
      <Video />
    </div>
  );
}

export default Home;
