import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBilJYgdpMwOUEsEzRI4nLvVpKHVVm1gcU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={13} defaultCenter={{ lat: 33.645052, lng: -117.834781}}>
    <Marker position={{ lat: 33.645052, lng: -117.834781 }} />
  </GoogleMap>
));

const enhance = _.identity;

const ReactGoogleMaps = () => (

  <MyMapComponent key="map" />

);

export default enhance(ReactGoogleMaps);
