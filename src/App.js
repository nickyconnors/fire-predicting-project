import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MapComponent from './MapComponent';

function HomePage() {
  return (
    <div className="app-container">
      <h1>Welcome to the Wildfire Prediction App</h1>
      <p>Explore areas prone to wildfires and monitor predictions in real time.</p>

      <Link to="/map">
        <button className="map-button">Go to Interactive Map</button>
      </Link>
    </div>
  );
}

function MapPage() {
  return (
    <div className="map-container">
      <h2>Interactive Map of Southern California</h2>
      <MapComponent />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
