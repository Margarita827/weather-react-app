import React from "react";
import axios from "axios";

export default function Weather(props)  {

    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.temperature}ºC`);
    }
        let apiKey = "o84c2a432ct7ef09733306be2507e42f";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
        return <h2>Hello from weather</h2>;
    
}