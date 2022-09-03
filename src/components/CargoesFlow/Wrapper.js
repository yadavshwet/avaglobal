import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./wrapper.css";

function Wrapper(props) {
  return (
    <div className="m-3">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>{props.children}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Wrapper;
