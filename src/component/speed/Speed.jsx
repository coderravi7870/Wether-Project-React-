import React from "react";
import "./style.scss";
const Speed = ({ speed }) => {
  const sunsetTime = speed?.sys?.sunset;
  const newData = new Date(sunsetTime * 1000);
  const data = newData.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  return (
    <div className="speed_container">
      <div className="speed1">
        <h4>Air Speed:</h4>
        <h3>{speed?.wind?.speed} KM/H</h3>
      </div>
      <div className="speed2">
        <h4>Sunset:</h4>
        <h3>{data}</h3>
      </div>
    </div>
  );
};

export default Speed;
