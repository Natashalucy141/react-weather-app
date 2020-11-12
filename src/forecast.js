import React, { useState } from "react";
import axios from "axios";
import "./Forecast";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
        <div className="col">
          {new Date(forecast.list[0].dt * 1000).getHours()}:00
          <br />
          <WeatherIcon code={forecast.list[0].weather[0].icon} />
          <br />
          {Math.round(forecast.list[0].main.temp)}℃
          <br />
        </div>
        <div className="col">
          {new Date(forecast.list[1].dt * 1000).getHours()}:00
          <br />
          <WeatherIcon code={forecast.list[1].weather[0].icon} />
          <br />
          {Math.round(forecast.list[1].main.temp)}℃
          <br />
        </div>
        <div className="col">
          {new Date(forecast.list[2].dt * 1000).getHours()}:00
          <br />
          <WeatherIcon code={forecast.list[2].weather[0].icon} />
          <br />
          {Math.round(forecast.list[2].main.temp)}℃
          <br />
        </div>
        <div className="col">
          {new Date(forecast.list[3].dt * 1000).getHours()}:00
          <br />
          <WeatherIcon code={forecast.list[3].weather[0].icon} />
          <br />
          {Math.round(forecast.list[3].main.temp)}℃
          <br />
        </div>
        <div className="col">
          {new Date(forecast.list[4].dt * 1000).getHours()}:00
          <br />
          <WeatherIcon code={forecast.list[4].weather[0].icon} />
          <br />
          {Math.round(forecast.list[4].main.temp)}℃
          <br />
        </div>
      </div>
    );
  } else {
    let apiKey = "c8d55d809a6c73b609c6c00f06672c2d";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
