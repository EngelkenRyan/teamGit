import React, { useState } from "react";
import App from '../App';
import { Button } from "reactstrap";

const Nasa = (props) => {

  const baseUrl = "https://api.nasa.gov/planetary/earth/imagery";
  let date = "2021-07-03";
  const dim = "0.4";
  const key = "8ex13JiMfUHrXlbYt8DUTqRMWvBpYLygUtWjoy8R";
  let url = `${baseUrl}?lon=${props.longitude}&lat=${props.latitude}&date=${date}&dim=${dim}&api_key=${key}`;


  const [image, setImage] = useState();

  function handleFetch() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImage(data.url);
        console.log(data);
      },
      error => console.log(error)
      );
  };

  return (
    <div>
      <br></br>
      <h4>Get your current location</h4>
      <br />
      <Button size="lg" color="info" onClick={handleFetch}>
        Search
      </Button>
      <hr />
      <br />
      <h4>Image date {date}</h4>
      <img width="85%" height="85%" src={image} alt="Satellite Location" />
      <div></div>
    </div>
  );
};

export default Nasa;