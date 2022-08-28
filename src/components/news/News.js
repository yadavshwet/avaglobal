import React from "react";
import Image from "react-bootstrap/Image";
import news from "../../assets/images/news.png";
import CommCarousel from "../common/CommCarousel";
import "./news.css";

function News() {
  return (
    <div className="parent-container">
      <div className="news-container">
        <div className="news-heading">News & Events</div>
        <CommCarousel />
      </div>
    </div>
  );
}

export default News;
