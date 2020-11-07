import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="Search"
            placeholder="Enter a city"
            className="Search-Bar"
          ></input>
          <input className="searchButton" type="submit" Value="🔍"></input>
        </form>
        <h1>LONDON</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="partly cloudy emoji"
            ></img>
            <span className="currentTemp">
              {Math.round(weatherData.temperature)}
            </span>{" "}
            <span className="unit">℃</span>
          </div>

          <div className="col.6">
            <div className="whiteBox">
              <ul>
                <li>Feels like {weatherData.feelsLike}℃</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c8d55d809a6c73b609c6c00f06672c2d";

    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return " loading...";
  }
}
