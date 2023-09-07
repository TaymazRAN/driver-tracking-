// src/components/Map.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ startPoint, endPoint }) => {
  return (
    <MapContainer
      center={startPoint}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={startPoint}>
        <Popup>Start Point</Popup>
      </Marker>
      <Marker position={endPoint}>
        <Popup>End Point</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
