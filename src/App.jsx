import { useEffect, useState } from "react";

import InputForm from "./component/inputForm/InputForm";
import "./App.scss";
import Temp from "./component/temp/Temp";
import Humidity from "./component/humidity/Humidity";
import Speed from "./component/speed/Speed";
import fetchWeatherData from "./utils/api";
function App() {
  const [city, setCity] = useState(null);
  const [wetherData, setwetherData] = useState(null);
  const [invalidWeatherData, setInvalidWeatherData] = useState(null);

  useEffect(() => {
    apiTesting();
  }, [city]);
  const apiTesting = () => {
    if (city !== null)
      fetchWeatherData(city)?.then((res) => {
        if (res) {
          setwetherData(res);
          setInvalidWeatherData(null);
        } else {
          setInvalidWeatherData("Please Enter Valid City Name");
        }
      });
  };

  return (
    <>
      <div className="container">
        <div className="ItemsContainer">
          <InputForm setCity={setCity} />
          {invalidWeatherData !== null ? (
            <div>{invalidWeatherData}</div>
          ) : (
            <>
              <Temp temp={wetherData} />
              <div className="items">
                <Humidity hum={wetherData} />
                <Speed speed={wetherData} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
