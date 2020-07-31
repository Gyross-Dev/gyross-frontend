import React from "react";
import "./Header.component.scss";
import "../navigation/Navigation.component";
import Navigation from "../navigation/Navigation.component";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">Gyross</div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
