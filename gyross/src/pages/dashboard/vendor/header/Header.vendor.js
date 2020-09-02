import React from "react";
import "./Header.vendor.style.scss";
import { Link } from "react-router-dom";
const HeaderVendor = () => {
  return (
    <div className="vendor-header-container">
      <nav>
        <Link to="/menu/update">Update Menu</Link>
        {/* <Link to="/">Update Profile</Link> */}
        {/* <Link to="/">tax information</Link> */}
      </nav>
    </div>
  );
};
export default HeaderVendor;
