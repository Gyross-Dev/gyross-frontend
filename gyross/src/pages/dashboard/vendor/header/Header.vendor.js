import React from "react";
import "./Header.vendor.style.scss";
import { Link } from "react-router-dom";
const HeaderVendor = () => {
  return (
    <div className="vendor-header-container">
      <nav>
        <Link>Item 1</Link>
        <Link>Item 2</Link>
        <Link>Item 3</Link>
        <Link>Item 4</Link>
      </nav>
    </div>
  );
};
export default HeaderVendor;
