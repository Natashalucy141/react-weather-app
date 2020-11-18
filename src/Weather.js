import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./HourlyForecast";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

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
      icon: response.data.weather[0].icon,
    });
    setReady(true);
  }

  function search() {
    const apiKey = "c8d55d809a6c73b609c6c00f06672c2d";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    //this will search for a city
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="Search"
            placeholder="Enter a city"
            className="Search-Bar"
            onChange={handleCityChange}
          ></input>
          <input className="searchButton" type="submit" Value="Search"></input>
        </form>
        <WeatherInfo data={weatherData} />
        <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return " loading...";
  }
}
