import React from "react";
import Card from "react-bootstrap/Card";
import "./location.css";

function Location() {
  return (
    <Card.Body className="ml-2 d-flex flex-col justify-center">
      <div className="fs-5 m-2 font-bold w-100">
        <div className="d-flex justify-around">
          <div>
            <span className="location-activity">Location Activities</span>
          </div>
          <div>
            <span className="date-time">Date & Time</span>
          </div>
          <div>
            <span className="duration">Duration</span>
          </div>
        </div>
        <div className="timelineBody">
          <ul className="un-lists">
            <li className="flex lists">
              <div className="timeline-dot"></div>
              <div className="destination">Lagos</div>
              <span>&nbsp;(Destination Port)</span>
            </li>
            <li className="lists">
              <div className="location activity">
                <div>Full Container Gate Out</div>
                <div className="date">01-09-2022</div>
              </div>
            </li>
            <li className="lists">
              <div className="location activity">
                <div>Discharge from Vessel</div>
                <div className="dateTime">01-09-2022 04.23</div>
                <div className="days">3 days</div>
              </div>
            </li>
          </ul>
          <ul className="un-lists">
            <li className="flex lists">
              <div className="timeline-dot"></div>

              <div className="destination">Cotonou</div>
              <span>&nbsp;(Transshipment Port)</span>
            </li>
            <li className="lists">
              <div className="location activity">
                <div>Full Container Gate Out</div>
                <div className="date">01-09-2022</div>
              </div>
            </li>
            <li className="lists">
              <div className="location activity">
                <div>Discharge from Vessel</div>
                <div className="dateTime">01-09-2022 04.23</div>
                <div className="days">3 days</div>
              </div>
            </li>
          </ul>
          <ul className="un-lists">
            <li className="flex lists">
              <div className="timeline-dot"></div>
              <div className="destination">Algeciras</div>
              <span>&nbsp;(Transshipment Port)</span>
            </li>
            <li className="lists">
              <div className="location activity">
                <div>Full Container Gate Out</div>
                <div className="date">01-09-2022</div>
              </div>
            </li>
            <li className="lists">
              <div className="location activity">
                <div>Discharge from Vessel</div>
                <div className="dateTime">01-09-2022 04.23</div>
                <div className="days">3 days</div>
              </div>
            </li>
          </ul>
          <ul className="un-lists">
            <li className="flex lists">
              <div className="timeline-dot"></div>
              <div className="destination">Ennore</div>
              <span>&nbsp;(Origin Port)</span>
            </li>
            <li className="lists">
              <div className="location activity">
                <div>Full Container Gate Out</div>
                <div className="date">01-09-2022</div>
              </div>
            </li>
            <li className="lists">
              <div className="location activity">
                <div>Discharge from Vessel</div>
                <div className="dateTime">01-09-2022 04.23</div>
                <div className="days">3 days</div>
              </div>
            </li>
          </ul>
          <ul className="un-lists">
            <li className="flex lists">
              <div className="timeline-dot"></div>
              <div className="destination">Chennai</div>
              <span>&nbsp;(ex Madras)</span>
            </li>
            <li className="lists">
              <div className="location activity">
                <div>Full Container Gate Out</div>
                <div className="date">01-09-2022</div>
              </div>
            </li>
            <li className="lists">
              <div className="location activity">
                <div>Discharge from Vessel</div>
                <div className="dateTime">01-09-2022 04.23</div>
                <div className="days">3 days</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Card.Body>
  );
}

export default Location;
