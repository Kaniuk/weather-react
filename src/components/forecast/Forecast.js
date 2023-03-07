import React from "react";

import {Search} from "../search/Search";
import "./Forecast.css";

function Forecast() {
    return (
        <div className="forecast">
            <div className="search">
                <Search/>
            </div>
            <div className='city'>
                <h1>Kyiv</h1>
                <img src="#" alt="weather" width='100'/>
            </div>
            <div className="content row">

                <div className="cityInfo col-7">

                    <div className="info">
                        <div>Last updated: Friday 10:32</div>
                        <div>Sunny</div>
                        <div>Humidity: 80%</div>
                        <div>Wind: 10 km/h</div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className="temperature d-flex">
                        <div>2</div>
                        <a href="/proj/June-2022/sheCodes/weather-react/public">°C</a>
                        /
                        <a href="/proj/June-2022/sheCodes/weather-react/public">°F</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export {Forecast};
