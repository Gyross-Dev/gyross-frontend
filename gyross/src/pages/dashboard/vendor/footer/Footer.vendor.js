import React from "react";
import "./Footer.vendor.style.scss";
import { Link } from "react-router-dom";
const FooterVendor = () => {
  return (
    <div className="vendor-footer-container">
      <h1 className="footer-title">Vendor</h1>
      <nav>
        <div className="left">
          <h1 className="label">Help</h1>
          <Link to="/">Item 1</Link>
          <Link to="/">Item 2</Link>
          <Link to="/">Item 1</Link>
          <Link to="/">Item 2</Link>
        </div>
        <div className="right">
          <h1 className="label">Quick Link</h1>
          <Link to="/">Item 1</Link>
          <Link to="/">Item 2</Link>
          <Link to="/">Item 1</Link>
          <Link to="/">Item 2</Link>
        </div>
      </nav>
    </div>
  );
};
export default FooterVendor;
