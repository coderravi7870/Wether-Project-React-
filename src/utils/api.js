import axios from "axios";

const apiKey = "9d963e3e7a9bf8d6974590ea7a1e3654";

const fetchWeatherData = async (city) => {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
    const { data } = await axios.get(apiUrl);
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
export default fetchWeatherData;
