import './App.css';
import React, { useState } from 'react';
import Sidebar from './site/sidebar';
import {
  BrowserRouter as Router  
} from 'react-router-dom';

const App = () => {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
    });
  }
  getLocation();

    return (
      <div className="App">
        <Router>
      <Sidebar />
      </Router>
    </div>
  );
}
  export default App;