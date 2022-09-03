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
import Wrapper from "./Wrapper";
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
  const [selectedTab, setSelectedTab] = useState("");
  const [carrierlist, setCarrierlist] = useState(response.carrierList);

  const handleClick = (shipmentType) => {
    setSelectedTab(shipmentType);

    const aa = response.carrierList.filter(
      (item) => item.shipmentType === shipmentType
    );
    console.log(aa);
    setCarrierlist(aa);
  };

  return (
    <div className="search-container">
      <div className="transport-mode">
        <div className="first-btn">
          <button
            type="button"
            className={
              carrierlist === "INTERMODAL_SHIPMENT" ? "selected first" : "first"
            }
            onClick={() => handleClick("INTERMODAL_SHIPMENT")}
          >
            <span>Ocean</span>
            <span className="focus-overlay"></span>
          </button>
        </div>
        <div className="second-btn">
          <button
            type="button"
            className={
              carrierlist === "TRUCK_SHIPMENT" ? "selected second" : "second"
            }
            onClick={() => handleClick("TRUCK_SHIPMENT")}
          >
            <span>Road</span>
            <span className="focus-overlay"></span>
          </button>
        </div>
        <div className="third-btn">
          <button
            type="button"
            className={
              carrierlist === "AIR_SHIPMENT" ? "selected third" : "third"
            }
            onClick={() => handleClick("AIR_SHIPMENT")}
          >
            <span>Air</span>
            <span className="focus-overlay"></span>
          </button>
        </div>
      </div>

      <div className="trackByContainer">
        <span></span>
        <div className="line"></div>
        <input
          type="search"
          className="container-search-bar"
          placeholder="Please enter the container id, or MBL id"
        />
      </div>

      <select>
        <option value="Select a Carrier"> -- Select a Carrier -- </option>
        {carrierlist.length > 0 &&
          carrierlist.map((item, index) => (
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
        <Card className="mt-4">
          <h3 className="tracking-events">Tracking Events</h3>
          <Card.Body className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722504.475534343!2d51.71162449751142!3d24.33749424689534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1662137409927!5m2!1sen!2sin"
              width="800"
              height="500"
              allowFullScreen=""
              title="map"
              loading="lazy"
              id="maps"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Card.Body>
          <Location />
        </Card>
      </div>
    </div>
  );
};

const ShippmentSegment = () => {
  const segment =
    response.shippment.data.transportJourneys.portToPort.segmentData;
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
            {segment &&
              segment.map((item, i) => {
                return (
                  <tr>
                    <td>{item.origin}</td>
                    <td>{item.destination}</td>
                    <td>{item.transportName}</td>
                    <td>{item.tripNumber}</td>
                    <td>{item.atd}</td>
                    <td>{item.ata}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

const Container = () => {
  const shippment = response.shippment.data;
  const segment = response.shippment.data.transportJourneys.portToPort;

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

        <hr></hr>
        <div className="tracking-details">Tracking Details</div>

        <div className="grid-container-segment">
          <div className="grid-item-seg">
            <p>Shipper</p>
            <div className="d-flex">
              <p>Origin Port:</p>
              <p className="fw-bold ml-2">{segment.originHub}</p>
            </div>
            <div className="d-flex">
              <p>Port Gate in:</p>
              <p className="fw-bold ml-2">{segment.gateInTime}</p>
            </div>
            <div className="d-flex">
              <p>Port ATD:</p>
              <p className="fw-bold ml-2">{segment.portAtd}</p>
            </div>
          </div>

          <div className="grid-item-seg">
            <p>Consignee</p>
            <div className="d-flex">
              <p>Destination Port:</p>
              <p className="fw-bold ml-2">{segment.destinationHub}</p>
            </div>
            <div className="d-flex">
              <p>Port ATA:</p>
              <p className="fw-bold ml-2">{segment.portAta}</p>
            </div>
          </div>
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
