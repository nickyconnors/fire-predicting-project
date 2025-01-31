import React from 'react';
import MapComponent from './MapComponent';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Wildfire Prediction App</h1>
      <p>Explore areas prone to wildfires and monitor predictions.</p>

      <div style={{ marginTop: '20px', border: '2px solid #ccc', padding: '10px', borderRadius: '10px' }}>
        <h2>Interactive Map of Southern California</h2>
        <MapComponent />
      </div>
    </div>
  );
}

export default App;
