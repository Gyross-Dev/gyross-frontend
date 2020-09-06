import React from "react";
import "./Header.vendor.style.scss";
import { Link } from "react-router-dom";
const HeaderVendor = ({ data }) => {
  if (data) {
    var { name, id } = data;
    if (name) name = name.split(" ").join("");
  }
  return (
    <div className="vendor-header-container">
      <nav>
        <Link to={`menu/${name}/${id}`}>Menu</Link>
        <Link to="/menu/form">Update Menu</Link>
        <Link to="/rating&reviews">Rating & Reviews</Link>
      </nav>
    </div>
  );
};
export default HeaderVendor;
