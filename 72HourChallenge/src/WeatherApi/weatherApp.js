import React, {useState, useEffect} from 'react';
import App from '../App';

const OpenWeather = (props) => {
    const key = "2f07c92033c8a046ac9d6524f89e2bdf";
    
    const [displayW, setDisplayW] = useState("");
    const [fah, setFah] = useState(true);
    console.log(props.weather);
    let temp= props.weather.main.temp;
    console.log(temp)
    
    let cel = Math.round((temp - 32) * (5/9),3);
    function toggleFah() {
        setFah(fah => !fah)
        
        console.log(cel)
        return cel;
    }
    let conditions = props.weather.weather[0].description;
    conditions = conditions.charAt(0).toUpperCase() + conditions.slice(1);
    let iconNum = props.weather.weather[0].icon;
    let iconURL = `http://openweathermap.org/img/w/${iconNum}.png`

    return (
        <div id="weatherBox">
            <h3>{props.weather.name}</h3>
            <p><span id="tiny">Latitude: {props.latitude}<br />Longitude: {props.longitude}</span></p>
            {/* <button onClick={showWeather}>Get Weather!</button> */}
            {/* <div>{displayW}</div> */}
            { props.weather.weather !== undefined ? 
            <div>
            <h4>{conditions}</h4>
            <img src={iconURL} />
            <p>Temperature: {fah === true ? `${temp}°f`: `${cel}°c`}<br />
            <button onClick={toggleFah}>&#176;f / &#176;c</button></p>
            <p>Wind speed: {props.weather.wind.speed}</p> 
            </div>
            : ""}
        </div>
    );
}


export default OpenWeather;