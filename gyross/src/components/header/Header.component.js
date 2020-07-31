import React from "react";
import "./Header.component.scss";
import "../navigation/Navigation.component";
import Navigation from "../navigation/Navigation.component";

const Header = () => {
  return (
    <div className="header-container">
      <Navigation />
    </div>
  );
};

export default Header;
