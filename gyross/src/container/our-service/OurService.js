import React from "react";
import "./OurService.style.scss";

const OurService = () => {
  return (
    <div className="our_service_container">
      <div className="per_service">
        <img
          className="image-detail"
          alt="flash"
          src="https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
        <h1>Quick Menu</h1>
        <div className="detail">Find real time menu with specials</div>
      </div>
      <div className="per_service">
        <img
          className="image-detail"
          alt="flash"
          src="https://images.unsplash.com/photo-1500496733680-167c3db69389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
        <h1>True Price</h1>
        <div className="detail">Find real Price menu with specials</div>
      </div>
      <div className="per_service">
        <img
          className="image-detail"
          alt="flash"
          src="https://images.unsplash.com/photo-1520956571254-1fcfd1cdbec8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
        <h1>9G Speed Delivery</h1>
        <div className="detail">We hired flash</div>
      </div>
      <div className="per_service">
        <img
          className="image-detail"
          alt="flash"
          src="https://images.unsplash.com/photo-1534226287181-36d1f9179bdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
        <h1>Free Orsaline</h1>
        <div className="detail">In case food poision</div>
      </div>
    </div>
  );
};

export default OurService;
