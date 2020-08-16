import React from "react";
import "./Footer.component.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="logo">Gyyro</div>
        <div className="wrapper">
          <div className="left">
            <h2>Contact information</h2>
            <div className="business_nfo">
              <div className="tag">
                <div className="nfo">
                  <div>Address</div>
                  <div>Gyyro 2345</div>
                </div>
              </div>
              <div className="tag">
                <div className="nfo">
                  <div>Phone</div>
                  <div>2345-22222</div>
                </div>
              </div>
              <div className="tag">
                <div className="nfo">
                  <div>Working hours</div>
                  <div>Mon-Sun/ 9am-8pm</div>
                </div>
              </div>
              <div className="tag">
                <div className="nfo">
                  <div>Email</div>
                  <div>nfo@gyross.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <h2>Keep in touch</h2>
            <div>
              <div>
                Get all the latest information on events, sales and offers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
