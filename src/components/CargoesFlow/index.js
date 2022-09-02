import React, { useState, useEffect } from "react";
import "./index.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Package from "../../assets/images/package.png";
import Navbar from "../navbar/Navigation";
import { Loader } from "@googlemaps/js-api-loader";
import response from "../response.json";
// import apilist from "../apiList.json";
import Table from "react-bootstrap/Table";
import Wrapper from "./Timeline";
import Location from "./Location";

const Details = () => {
  // const { shippment } = shippment;
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Container Information</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

const TrackContainer = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="search-container">
      <div className="transport-mode">
        <div className="first-btn">
          <button type="button" className="first">
            <span>Ocean</span>
            <span className="focus-overlay"></span>
          </button>
        </div>
        <div className="second-btn">
          <button type="button" className="second">
            <span>Road</span>
            <span className="focus-overlay"></span>
          </button>
        </div>
        <div className="third-btn">
          <button type="button" className="third">
            <span>Air</span>
            <span className="focus-overlay"></span>
          </button>
        </div>
      </div>

      <div className="trackByContainer">
        <input
          type="search"
          className="container-search-bar"
          placeholder="Please enter the container id, or MBL id"
        />
      </div>

      <select>
        <option value="Select a Carrier"> -- Select a Carrier -- </option>
        {response.carrierList.map((item, index) => (
          <option key={index} value={item.carrierName}>
            {item.carrierName}
          </option>
        ))}
      </select>

      <div className="search-btn">
        <button>Search</button>
      </div>
    </div>
  );
};

// const loader = new Loader({
//   apiKey: "AIzaSyAYQ01FrPXz6ys-0LDT9cTLYmXvc12EbeQ",
//   version: "weekly",
//   // eslint-disable-next-line no-undef
//   ...additionalOptions,
// });

// loader.load().then(() => {
//   // eslint-disable-next-line no-undef
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// });

const ContainerDetails = () => {
  return (
    <div className="container-divs">
      <div className="first-div">
        <div className="container-detail-card">
          <div className="package">
            <img src={Package} alt="packages" id="packages" />
            <div className="d-flex flex-col ml-3">
              <span className="fw-bold fs-4">Container Number</span>
              <span className="text-small fw-bold">TTNU1286200</span>
            </div>
          </div>
          <Container />
        </div>
        <ShippmentSegment />
      </div>
      <div className="second-div">
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722504.475534343!2d51.71162449751142!3d24.33749424689534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1662137409927!5m2!1sen!2sin"
            width="800"
            height="500"
            allowFullScreen=""
            title="map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Location />
      </div>
    </div>
  );
};

const ShippmentSegment = () => {
  return (
    <Card className="mt-5">
      <Card.Body className="ml-2 d-flex flex-col ">
        <div className="fs-5 m-2 font-bold">Shipping Segments</div>
        <Table striped hover>
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Transport Name</th>
              <th>Trip #</th>
              <th>Departure</th>
              <th>Arrival</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

const Container = () => {
  const shippment = response.shippment.data;

  return (
    <Card className="m-4">
      <Card.Body className="ml-2 d-flex flex-col ">
        <div className="grid-container">
          <div className="grid-item">
            <p>Container Type</p>
            <p className="fw-bold">
              {shippment?.containerSize} {shippment.containerType}
            </p>
          </div>
          <div className="grid-item">
            <p>Status</p>
            <p className="fw-bold">{shippment.status}</p>
          </div>
          {shippment.mblNumber && (
            <div className="grid-item">
              <p>MBL #</p>
              <p className="fw-bold">{shippment.mblNumber}</p>
            </div>
          )}

          {
            <div className="grid-item">
              <p>Carrier</p>
              <p className="fw-bold">Maersk</p>
            </div>
          }
        </div>
      </Card.Body>
    </Card>
  );
};

function index() {
  return (
    <>
      <div className="track-container">
        <Navbar styles={{ backgroundColor: "#383838" }} />
        <TrackContainer />
        <Wrapper>
          <ContainerDetails />
        </Wrapper>

        <Wrapper>
          <ContainerDetails />
        </Wrapper>
      </div>
    </>
  );
}

export default index;
