import React from "react";
import "./Navigation.component.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <nav>
        <div className="nav-item">
          <Link to="/">Home </Link>
        </div>
        <div className="dropdown show">
          <Link
            to="/"
            className="nav-item dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sign in
          </Link>

          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuLink"
          >
            <Link className="dropdown-item" to="/vendor-login">
              Vendor
            </Link>
            <Link className="dropdown-item" to="/buyer-login">
              Buyer
            </Link>
          </div>
        </div>
        <div className="dropdown show">
          <Link
            to="/"
            className="nav-item dropdown-toggle"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sign up
          </Link>

          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuLink"
          >
            <Link className="dropdown-item" to="/vendor-signup">
              Vendor
            </Link>
            <Link className="dropdown-item" to="/buyer-signup">
              Buyer
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
