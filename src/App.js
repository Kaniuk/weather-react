import React from 'react';

import {Forecast} from "./components/forecast/Forecast";

const App = () => {
    return (
        <div>
            <div className="container"><Forecast/>
                <div><a href="https://github.com/Kaniuk/weather-react">Open-source code,</a> by <a
                    href="https://www.linkedin.com/in/liudmyla-kaniuk-65b29b21b/">Liudmyla Kaniuk</a></div>
            </div>
        </div>
    );
};


export default App;