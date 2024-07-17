import "./Weather.css";
import React from 'react';

const Weather = ({day, img, imgAlt, conditions, time}) => {
    return (
        <div className="weather">
            <h2>Day of the Week</h2>
            <img src={img} alt={imgAlt} />
            <p><span>conditions: </span>current weather conditions</p>
            <p><span>time: </span>{time}</p>
        </div>
    );
};

export default Weather;