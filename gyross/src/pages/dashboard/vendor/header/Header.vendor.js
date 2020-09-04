import React from "react";
import "./Header.vendor.style.scss";
import { Link } from "react-router-dom";
const HeaderVendor = () => {
  return (
    <div className="vendor-header-container">
      <nav>
        <Link to="/menu/form">Update Menu</Link>
        <Link to="/rating&reviews">Rating & Reviews</Link>
      </nav>
    </div>
  );
};
export default HeaderVendor;
