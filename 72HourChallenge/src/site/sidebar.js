import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import OpenWeather from '../components/OpenWeatherApp';
import TicketMaster from '../components/TicketMaster'
import Nasa from '../components/NasaApp';

const Sidebar = () => {
    const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
    });
  }
  getLocation();

    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/home'>Home</Link></li> 
                    <li><Link to='/openweather'>OpenWeather</Link></li>
                    <li><Link to='/ticketmaster'>TicketMaster</Link></li>
                    <li><Link to='/nasa'>Nasa</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/openweather'><OpenWeather lat={lat} lon={lon} /></Route>
                    <Route exact path='/ticketmaster'><TicketMaster lat={lat} lon={lon} /></Route>
                    <Route exact path='/nasa'><Nasa lat={lat} lon={lon} /></Route>
                </Switch>
            </div>
        </div>
    );
};
export default Sidebar;

