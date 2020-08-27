import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchProfileAsync } from "../../../../redux/actions/vendor/Profile.vendor.action";
import "./Profile.vendor.style.scss";
class ProfileVendor extends React.Component {
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
    if (this.state.data) {
      var {
        name,
        menu,
        username,
        phone,
        email,
        geoLocation,
        password,
      } = this.state.data;
    }
    return (
      <div className="profile-container">
        <div className="title">
          <img
            alt="vendor pic"
            src="https://images.unsplash.com/photo-1573739738911-d73a09ab3033?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />
          <div className="btn-edit">
            <button className="btn edit">Edit</button>
          </div>
        </div>
        <h1 className="title">{name}</h1>
        <p className="email">Email: {email}</p>
        <p className="email">Phone: {phone}</p>
        <p className="email">
          Geo Location [ Lat: {geoLocation ? geoLocation["_latitude"] : null}
          <span>, </span>
          Lng: {geoLocation ? geoLocation["_longitude"] : null}]
        </p>
        <div className="about">
          <h1 className="label">About</h1>
          <div>
            Generating random paragraphs can be an excellent way for writers to
            get their creative flow going at the beginning of the day. The
            writer has no idea what topic the random paragraph will be about
            when it appears. This forces the writer to use creativity to
            complete one of three common writing challenges. The writer can use
            the paragraph as the first one of a short story and build upon it.
          </div>
        </div>
        <div className="activity">
          <h1 className="label">Activity</h1>
          <div>Five start Seller</div>
        </div>
        <div className="rating">
          <h1 className="label">Rating</h1>
          <div>4.94*</div>
        </div>
        <div className="complement">
          <div>
            <h1 className="label">Complement</h1>
            <div>
              <div className="customer-comp">
                <h1>*** Best Gyross Ever ***</h1>
                <p>by Nalayek Donald</p>
              </div>
              <div className="customer-comp">
                <h1>*** Best Gyross Ever ***</h1>
                <p>by Nalayek Donald</p>
              </div>
              <div className="customer-comp">
                <h1>*** Best Gyross Ever ***</h1>
                <p>by Nalayek Donald</p>
              </div>
              <div className="customer-comp">
                <h1>*** Best Gyross Ever ***</h1>
                <p>by Nalayek Donald</p>
              </div>
            </div>
          </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileVendor));
