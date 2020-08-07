import React from "react";
import "./Container.scss";

const Body = () => {
  return (
    <div className="body-container">
      <div className="top-first">
        <img
          className="cart-pic"
          alt="gyro cart"
          src="https://images.unsplash.com/photo-1530649325239-1c2ebf1e3f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
        />
        <div>
          <p className="paragraph">
            Are you the only one who goes to the ATM to get cash just to eat a
            Halal cart? No you are not. So Order in "Gyros" and stop thinking
            about cash.
          </p>
          <button className="btn learn-more">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
