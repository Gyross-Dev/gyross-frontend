import React from "react";
import "./LeftNav.vendor.style.scss";

import { Link } from "react-router-dom";
const LeftNavVendor = () => {
  return (
    <div className="dashboard-container">
      <h1 className="title">Dashboard</h1>
      <nav className="nav-container">
        <Link className="nav-item">Profile</Link>
        <Link className="nav-item">Menu</Link>
        <Link className="nav-item">Location</Link>
        <Link className="nav-item">Earning</Link>
        <Link className="nav-item">Tax Information</Link>
        <Link className="nav-item">Banking</Link>
        <Link className="nav-item">Help</Link>
      </nav>
    </div>
  );
};

export default LeftNavVendor;
