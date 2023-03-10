import React from 'react';
import {CurrentDate} from "../currentDate/CurrentDate";
import {WeatherTemperature} from "../weatherTemperature/WeatherTemperature";

const WeatherInfo = ({weatherData}) => {
    return (
        <div>
            <div className="city">
                <h1>{weatherData.city}</h1>
                <img src={weatherData.icon} alt="weather" width="100"/>
            </div>
            <div className="content row">

                <div className="cityInfo col-7">

                    <div className="info">
                        <div>Last updated: <CurrentDate date={weatherData.time}/></div>
                        <div>{weatherData.condition}</div>
                        <div>Humidity: {weatherData.humidity}</div>
                        <div>Wind: {weatherData.wind}km/h</div>
                    </div>
                </div>
                <div className="col-5">
                    <WeatherTemperature weatherData={weatherData}/>

                </div>

            </div>
        </div>
    );
};

export {WeatherInfo};