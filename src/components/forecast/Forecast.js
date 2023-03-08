import React, {useState} from "react";

import "./Forecast.css";
import axios from "axios";

function Forecast({defaultCity}) {
    const [weatherData, setWeatherData] = useState({ready:false});

    function handleResponse(response) {
        setWeatherData({
            ready:true,
            temperature: Math.round(response.data.temperature.current),
            city: response.data.city,
            condition: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            time: response.data.time,
            icon: response.data.condition.icon_url
        });

    }


    if (weatherData.ready) {
        return (
            <div className="forecast">
                <div className="search">
                    <div className="row">
                        <form>
                            <input type="text" name="city" placeholder="Enter city" className="col-8" autoFocus="on"/>
                            <input type="submit" value="Search" className="col-3 btn-primary"/>
                        </form>
                    </div>
                </div>
                <div className="city">
                    <h1>{weatherData.city}</h1>
                    <img src={weatherData.icon} alt="weather" width="100"/>
                </div>
                <div className="content row">

                    <div className="cityInfo col-7">

                        <div className="info">
                            <div>Last updated: {weatherData.time}</div>
                            <div>{weatherData.condition}</div>
                            <div>Humidity: {weatherData.humidity}</div>
                            <div>Wind: {weatherData.wind}km/h</div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="temperature d-flex">
                            <div>{weatherData.temperature}</div>
                            <a href="/proj/June-2022/sheCodes/weather-react/public">°C</a>
                            /
                            <a href="/proj/June-2022/sheCodes/weather-react/public">°F</a>
                        </div>
                    </div>

                </div>
            </div>
        );
    } else {
        const apiKey = 'd1f3fa1bbd2e0t6f3b4o3faabd9a8d79';
        const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${defaultCity}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return 'Loading...';
    }
}

export {Forecast};
