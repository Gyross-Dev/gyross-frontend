import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import mapStyle from "./map.style";
import { fetchNameLocationAsync } from "../redux/actions/vendor/Name-Location.action";

import { connect } from "react-redux";

class MapContainer extends Component {
  state = {
    nameLocation: {},
    stores: [
      {
        geoLocation: {
          _latitude: 40.690502,
          _longitude: -73.929912,
        },
        name: "Abdullah Halal Cart",
      },
      {
        name: "Shah Halal",
        geoLocation: {
          _latitude: 40.700568,
          _longitude: -73.899513,
        },
      },
      {
        geoLocation: {
          _latitude: 40.785,
          _longitude: -73.98513,
        },
        name: "Shahjahan Halal Cart",
      },
      {
        name: "Mia Halal",
        geoLocation: {
          _longitude: -73.89789,
          _latitude: 40.667892,
        },
      },
      {
        geoLocation: {
          _latitude: 40.687892,
          _longitude: -73.9789001,
        },
        name: "Tomy Miar Halal Cart",
      },
    ],
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

  displayMarkers = () => {
    if (this.state.nameLocation.data) {
      return this.state.nameLocation.data.map((store, index) => {
        return (
          <div key={index}>
            <Marker
              id={index}
              position={{
                lat: store.geoLocation._latitude,
                lng: store.geoLocation._longitude,
              }}
              icon={{
                url:
                  "https://images.unsplash.com/photo-1547620917-786ebcbc55af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
                scaledSize: new window.google.maps.Size(25, 25),
              }}
              onClick={() => console.log("you clicked", store.name)}
            />
            <InfoWindow
              id={index}
              position={{
                lat: store.geoLocation._latitude,
                lng: store.geoLocation._longitude,
              }}
            >
              <div>
                <h2>{store.name}</h2>
              </div>
            </InfoWindow>
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
    <div style={{ width: "100vw", height: "60vh" }}>
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
