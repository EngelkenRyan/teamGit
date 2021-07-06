import './App.css';
import React, { useState } from 'react';
import TicketMaster from './components/TicketMaster';

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
      <TicketMaster lat={lat} lon={lon} />
    </div>
  );
}


  export default App;