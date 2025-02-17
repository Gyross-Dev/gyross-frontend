import React, { Component } from "react";
import "./map.style.scss";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { Link } from "react-router-dom";
import mapStyle from "./map.style";
import { fetchNameLocationAsync } from "../redux/actions/vendor/Name-Location.action";

import { connect } from "react-redux";

class MapContainer extends Component {
  state = {
    nameLocation: {},
    isOpen: false,
    store: null,
    index: null,
  };
  componentDidMount() {
    this.props.fetchNameLocationAsync();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.nameLocation !== this.props.nameLocation) {
      this.setState({
        nameLocation: this.props.nameLocation,
      });
    }
  }
  handleToggle = (index, curStore) => {
    this.setState({
      isOpen: !false,
      index: index,
      store: curStore,
    });
  };
  handleInfoWindow() {
    this.setState({ index: null, store: null });
  }
  displayMarkers = () => {
    if (this.state.nameLocation.data) {
      return this.state.nameLocation.data.map((store, index) => {
        let lat = store.geoLocation ? store.geoLocation._latitude : 0;
        let lng = store.geoLocation ? store.geoLocation._longitude : 0;
        return (
          <div key={index}>
            <Marker
              id={index}
              position={{ lat, lng }}
              label={{ fontFamily: "Fontawesome", text: "\uf299" }}
              onClick={() => this.handleToggle(index, store)}
            />
            {this.state.isOpen && this.state.store && (
              <InfoWindow
                id={this.state.index}
                key={this.state.index}
                position={{
                  lat: this.state.store.geoLocation._latitude,
                  lng: this.state.store.geoLocation._longitude,
                }}
                onCloseClick={() => this.handleInfoWindow()}
              >
                <div>
                  <h2
                    style={{
                      margin: "6px",
                      textAlign: "center",
                      fontSize: "15px",
                    }}
                  >
                    {this.state.store.name}
                  </h2>
                  <Link
                    to={`menu/${this.state.store.name.split(" ").join("")}/${
                      this.state.store.id
                    }`}
                  >
                    Menu
                  </Link>
                  <span> | </span>
                  <Link
                    to={`menu/${this.state.store.name.split(" ").join("")}/${
                      this.state.store.id
                    }`}
                  >
                    Order Now
                  </Link>
                </div>
              </InfoWindow>
            )}
          </div>
        );
      });
    } else {
      return null;
    }
  };
  render() {
    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 40.650002, lng: -73.949997 }}
        defaultOptions={{ styles: mapStyle }}
      >
        {this.displayMarkers()}
      </GoogleMap>
    );
  }
}
const mapStateToProps = (state) => ({
  nameLocation: state.nameLocation,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNameLocationAsync: () => dispatch(fetchNameLocationAsync()),
});

/////////////////////////////////////////////////////////////////////////////////////

const MapWrapped = withScriptjs(
  withGoogleMap(connect(mapStateToProps, mapDispatchToProps)(MapContainer))
);
const GoogleApiWrapper = () => {
  return (
    <div className="map-container">
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default GoogleApiWrapper;
/////////////////////////////////////////////////////////////////////////////////////
