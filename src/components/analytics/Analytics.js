import React, { useEffect, useState } from "react";
import data from "../../assets/images/data";
import "./analytics.css";

function Numbers() {
  const { analytics } = data;
  // const [clients, setCounter] = useState(0);
  // const [tons, setCounter] = useState(0);
  // const [shipment, setCounter] = useState(0);

  const autoCounter = (limit) => {
    // const interval = setInterval(() => {
    //   if (counter < limit) {
    //     setCounter((counter) => counter + 1);
    //   } else {
    //     clearInterval(interval);
    //   }
    // }, 1000);
    //   return counter;
  };

  return (
    <div className="analytics">
      <div className="analytics-container">
        {analytics &&
          analytics.map((item) => {
            return (
              <div className="analytics-data" key={item.name}>
                <p className="item-name">{item.name}</p>
                <p className="item-count">{item.count}+</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Numbers;
