import React from "react";
import "./Navigation.component.scss";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Profile</li>
        <li>Sign up</li>
        {/* <li>Logout</li> */}
      </ul>
    </div>
  );
};

export default Navigation;
