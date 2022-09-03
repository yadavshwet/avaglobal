import React from "react";
import "./message.css";

function Message() {
  return (
    <div className="msg-container">
      <div className="msg-info">
        <div className="message-btn">Message from Director</div>
        <div className="message-data">
          To serve our customers with flexible and innovative logistics
          solutions. To be a strategic supply chain partner and provide
          customized solutions of highest standard to our customers.
        </div>
      </div>
      <div className="msg-video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/j9qGmO8Yy-Y"
          title="Sundar Pichai, CEO of Google and Alphabet"
          frameBorder="2"
          id="director-message"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Message;
