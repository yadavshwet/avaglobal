import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import news from "../../assets/images/news.png";

function CommCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={news} alt="First slide" />
        <Carousel.Caption>
          <div className="news-desc">
            <div>
              Ava Global Logistics wins 'Emerging Agri Business Logistics Co. of
              the year 2017' award at Globoil India 2017.
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={news} alt="Second slide" />

        <Carousel.Caption>
          <div className="news-desc">
            <div>
              Ava Global Logistics wins 'Emerging Agri Business Logistics Co. of
              the year 2017' award at Globoil India 2017.
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={news} alt="Third slide" />

        <Carousel.Caption>
          <div className="news-desc">
            <div>
              Ava Global Logistics wins 'Emerging Agri Business Logistics Co. of
              the year 2017' award at Globoil India 2017.
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CommCarousel;
