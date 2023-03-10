import React, {useState} from "react";
import axios from "axios";

import "./Forecast.css";
import {WeatherInfo} from "../weatherInfo/WeatherInfo";

function Forecast({defaultCity}) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(defaultCity);

    function handleResponse(response) {
        setWeatherData({


            ready: true,
            temperature: Math.round(response.data.temperature.current),
            city: response.data.city,
            condition: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            time: new Date(response.data.time * 1000),
            icon: response.data.condition.icon_url
        });

    }


    function search() {
        const apiKey = 'd1f3fa1bbd2e0t6f3b4o3faabd9a8d79';
        const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(e) {
        e.preventDefault();
        search();
        form.reset();

    }

    function handleCityChange(e) {
        setCity(e.target.value);
    }

    const form = document.getElementsByTagName('form')[0];

    if (weatherData.ready) {
        return (
            <div className="forecast">
                <div className="search">
                    <div className="row">
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="city" placeholder="Enter city" className="col-8" autoFocus="on"
                                   onChange={handleCityChange}/>
                            <input type="submit" value="Search" className="col-3 btn-primary"/>
                        </form>
                    </div>
                </div>
                <WeatherInfo weatherData={weatherData}/>
            </div>
        );
    } else {
        search();
        return 'Loading...';
    }
}

export {Forecast};
