import React, {useState, useEffect} from 'react';
import App from '../App';

const OpenWeather = (props) => {
    const [events, setEvents] = useState([]);
    const {lat, lon} = props;
    const key = "2f07c92033c8a046ac9d6524f89e2bdf";

    let url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&key=${key}`;

    useEffect(() => {
        const getEvents = async () => {
            const res = await fetch(url);
            const data = await res.json();
            let allEvents = data._embedded.events;
            setEvents(allEvents);
            console.log(events)
            return;
        };
        getEvents();
    }, [url])
    if (lat && lon) {
        return (
            <div>
                test
            </div>
        )
    } else {
        return(
            <div>Unable to find weather forecast using your location.</div>
        )
    }
}

export default OpenWeather;