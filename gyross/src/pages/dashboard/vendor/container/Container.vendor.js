import React, { Component } from "react";
// import LeftNav from "../left-nav/LeftNav.vendor";
import HeaderVendor from "../header/Header.vendor";
import Profile from "../profile/Profile.vendor";

import FooterVendor from "../footer/Footer.vendor";

import "./Container.vendor.style.scss";

class ContainerVendor extends Component {
  render() {
    return (
      <div className="container-vendor">
        <div className="container-header">
          <HeaderVendor />
        </div>
        <div className="container-body">
          <div className="right-content">
            <Profile />
          </div>
        </div>
        <div className="container-footer">
          <FooterVendor />
        </div>
      </div>
    );
  }
}

export default ContainerVendor;
