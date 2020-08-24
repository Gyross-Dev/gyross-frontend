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
          <div
            to="/"
            className="nav-item dropdown-toggle link_div"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sign in
          </div>

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
        <div className="dropdown show link_div">
          <div
            to="/"
            className="nav-item dropdown-toggle"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sign up
          </div>

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
        <div className="nav-item">
          <div className="link_div">Logout</div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
