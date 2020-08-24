import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

export class MapContainer extends Component {
  state = {
    stores: [
      { latitude: 40.690502, longitude: -73.929912, name: "Halal Public" },
      { latitude: 40.700102, longitude: -73.89925407, name: "Special Gyyros" },
      { latitude: 40.750102, longitude: -73.89925407, name: "Special Gyyros" },
      { latitude: 40.910102, longitude: -73.89025407, name: "Special Gyyros" },
      { latitude: 40.650002, longitude: -73.939997, name: "Mia Halal" },
      { latitude: 40.660202, longitude: -73.949991, name: "Shah Halal" },
      { latitude: 40.670012, longitude: -73.999934, name: "Halal Guys" },
      { latitude: 40.680302, longitude: -73.969956, name: "Mia Halal" },
    ],
  };

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <div key={index}>
          <Marker
            id={index}
            position={{
              lat: store.latitude,
              lng: store.longitude,
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
              lat: store.latitude,
              lng: store.longitude,
            }}
          >
            <div>
              <h2>{store.name}</h2>
            </div>
          </InfoWindow>
        </div>
      );
    });
  };

  render() {
    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 40.650002, lng: -73.949997 }}
      >
        {this.displayMarkers()}
      </GoogleMap>
    );
  }
}

const MapWrapped = withScriptjs(withGoogleMap(MapContainer));
export default function GoogleApiWrapper() {
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
}
