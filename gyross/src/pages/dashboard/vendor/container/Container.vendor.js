import React, { Component } from "react";
// import LeftNav from "../left-nav/LeftNav.vendor";
import HeaderVendor from "../header/Header.vendor";
import Profile from "../profile/Profile.vendor";
import FooterVendor from "../footer/Footer.vendor";
import { fetchProfileAsync } from "../../../../redux/actions/vendor/Profile.vendor.action";

import { connect } from "react-redux";

import "./Container.vendor.style.scss";

class ContainerVendor extends Component {
  state = {
    data: {},
  };
  componentDidMount() {
    this.props.fetchProfileAsync();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.vendorProfile !== this.props.vendorProfile) {
      this.setState({
        data: this.props.vendorProfile.data,
      });
    }
  }
  render() {
    return (
      <div className="container-vendor">
        <div className="container-header">
          <HeaderVendor data={this.state.data} />
        </div>
        <div className="container-body">
          <div className="right-content">
            <Profile profile={this.state.data} />
          </div>
        </div>
        <div className="container-footer">
          <FooterVendor />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  vendorProfile: state.vendorProfile,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProfileAsync: () => dispatch(fetchProfileAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerVendor);
