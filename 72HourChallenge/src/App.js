import React, { useState } from 'react';
import OpenWeather from './WeatherApi/WeatherApp';

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
  // console.log(`Latitude is ${lat}`)
  // console.log(`Longitude is ${lon}`)
    return (
      <div className="App">
      <OpenWeather lat={lat} lon={lon} />
    </div>
  );
}
  export default App;