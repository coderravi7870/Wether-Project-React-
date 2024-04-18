import React from "react";
import "./style.scss";
const Temp = ({ temp }) => {
  return (
    <div className="temp">
      {temp && <h1>{temp?.main?.temp} °C</h1>}

      <h2>{temp?.name}</h2>
    </div>
  );
};

export default Temp;
