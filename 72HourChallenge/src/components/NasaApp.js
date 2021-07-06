import React, { useState } from "react";
import { Button } from "reactstrap";

const Nasa = (props) => {
const {lat, lon} = props;
let date = "2021-07-03";
let url = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&&dim=0.10&api_key=8ex13JiMfUHrXlbYt8DUTqRMWvBpYLygUtWjoy8R`


const [image, setImage] = useState();
const [imagedate , setDate] = useState();

function handleFetch() {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        setImage(data.url);
        setDate(data.date)
        console.log(data);
    },
    error => console.log(error)
    );
};

return (
    <div className="nasaapi">
    <br></br>
    <h4>Your current location is:</h4>
    <h6>Latitude: {lat}
    <br /> 
    Longitude: {lon}</h6>
    <br />
    <h4>Click search to get an image based on your location!</h4>
    <Button size="lg" color="info" onClick={handleFetch}>
        Search
    </Button>
    <hr />
    <br />
    <h4>Image date and time: 
        <br />
        {imagedate}</h4>
    <img width="50%" height="50%" src={image} alt="Satellite Location" />
    </div>
);
};

export default Nasa;