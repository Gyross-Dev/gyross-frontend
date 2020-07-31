import React from "react";
import "./Container.scss";

const Body = () => {
  return (
    <div className="body-container">
      <div className="top-first">
        <img
          className="cart-pic"
          alt="gyro cart"
          src="https://images.unsplash.com/photo-1527832512313-0f39d6eff12f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        />
        <p className="paragraph">
          Are you the only one who goes to the ATM to get cash just to eat a
          Halal cart? No you are not. So Order in "Gyros" and stop thinking
          about cash.
        </p>
      </div>
    </div>
  );
};

export default Body;
