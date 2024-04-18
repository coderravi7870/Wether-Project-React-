import React, { useEffect, useState } from "react";
import "./style.scss";
const Humidity = ({ hum }) => {
  const sunriseTimestamp = hum?.sys?.sunrise;

  // Convert Unix timestamps to milliseconds (required by JavaScript Date object)
  const sunriseDate = new Date(sunriseTimestamp * 1000);

  // Convert to readable date and time strings
  const sunriseReadable = sunriseDate.toLocaleTimeString(); // Convert to local time string

  return (
    <div className="hum_container">
      <div className="hum1">
        <h4>Humidity:</h4>
        <h3>{hum?.main?.humidity}%</h3>
      </div>
      <div className="hum2">
        <h4>Sunrise:</h4>
        <h3>{sunriseReadable}</h3>
      </div>
    </div>
  );
};

export default Humidity;
