import { useEffect, useState } from 'react';

const TicketMaster = (props) => {

    const [events, setEvents] = useState([]);
    const {lat, lon} = props;
    const key = '6oISORFdGLuqsWGTg1FJGwS9IQncf489'
    
    let url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${key}&latlong=${lat},${lon}&radius=15&unit=miles&sort=random&locale=*`;

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
                <h2>Here are a few events coming near you!</h2>
                <ul>
                    {events.map((event, index) => {
                        return(
                            <li key={index}>
                                <h5>Date: </h5> <h4>{event.dates.start.localDate}</h4>
                                <h5>Genre: </h5> <h4>{event.classifications[0].genre.name}</h4>
                                <h3>Event: </h3> <h2>{event.name}</h2>
                                <img src={event.images[1].url} height={'10%'} width={'40%'} alt="pic of event" />
                                <br />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    } else {
        return(
            <div>Unable to find events using your location.</div>
        )
    }
}

export default TicketMaster;

