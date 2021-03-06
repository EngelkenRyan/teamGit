import React, {useState, useEffect} from 'react';

function OpenWeather (props) {
    const [weather, setWeather] = useState();
    const {lat, lon} = props;
    const [toggle, setToggle] = useState(true);
    const [state, setState] = useState();

    const key = "2f07c92033c8a046ac9d6524f89e2bdf";
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
    

    function fetchWeather() {
    fetch(baseURL)
        .then((response) => response.json())
        .then((data) => setWeather(data.main.temp));
    }
    
    function toggleButton(){
        if (toggle === true){
            setToggle(false)
        } else {
            setToggle(true)
        }}
        
        useEffect(() => {
            fetchWeather();
        }, []);

        return (
            <div>
            <h1>Your Weather</h1>
            <h1>{props.feels_like}</h1>
            
            {toggle === true ? Math.floor(weather * 1.8 - 459.67) +"°F" : Math.floor(weather - 273.12)+"°C" }
            <br></br>
            <br />
            {toggle === true ? <button onClick ={toggleButton}>Change to Centigrade</button>:
            <button onClick ={toggleButton}>Change to Fahrenheit</button>}

        </div>
        );
};
    

export default OpenWeather;