import React from "react";

import {Search} from "../search/Search";
import "./Forecast.css";

function Forecast() {
    return (
        <div className="forecast">
            <div className="search">
                <Search/>
            </div>
            <div className="content">
                <div className="sityInfo">
                    <h1>Kyiv</h1>
                    <div className="info">
                        <div>Last updated: Friday 10:32</div>
                        <div>Sunny</div>
                        <div>Humidity: 80%</div>
                        <div>Wind: 10 km/h</div>
                    </div>
                </div>
                <div>
                    <div className="temperature">
                        <div>2</div>
                        <a href="/proj/June-2022/sheCodes/weather-react/public">°C</a>/<a
                        href="/proj/June-2022/sheCodes/weather-react/public">°F</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Forecast};
