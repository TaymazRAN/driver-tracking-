// src/App.js
import React from "react";
import Map from "./Map";

function App() {
  const startPoint = [35.722121267096426, 51.3346089864697];
  const endPoint = [35.71561985684204, 51.354130102559694];

  return (
    <div className="App">
      <h1>Driver Tracking Map</h1>
      <Map startPoint={startPoint} endPoint={endPoint} />
    </div>
  );
}

export default App;
