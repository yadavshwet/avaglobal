import React from "react";

function Location() {
  return (
    <div>
      <div className="container">
        <div className="rightbox">
          <div className="rb-container">
            <ul className="rb">
              <li className="rb-item" ng-repeat="itembx">
                <div className="timestamp">
                  3rd May 2020
                  <br /> 7:00 PM
                </div>
                <div className="item-title">
                  Chris Serrano posted a photo on your wall.
                </div>
              </li>
              <li className="rb-item" ng-repeat="itembx">
                <div className="timestamp">
                  19th May 2020
                  <br /> 3:00 PM
                </div>
                <div className="item-title">
                  Mia Redwood commented on your last post.
                </div>
              </li>

              <li className="rb-item" ng-repeat="itembx">
                <div className="timestamp">
                  17st June 2020
                  <br /> 7:00 PM
                </div>
                <div className="item-title">
                  Lucas McAlister just send you a message.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
