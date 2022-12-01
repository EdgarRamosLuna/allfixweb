import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Marker = () => <div><i class="fa-solid fa-location-dot" style={{fontSize:25, color:"#fe5a0e"}}></i></div>;
export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 25.450892,
      lng: -102.1793823
    },
    zoom: 6
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAc_fWC63FYIV8dwbn3k17PICrN9A-HpHw" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{ gestureHandling: "cooperative", mapTypeControl: true, streetViewControl: true,}}
      >
        <Marker
          lat={25.450892}
          lng={-102.1793823}
        />
      </GoogleMapReact>
    </div>
  );
}