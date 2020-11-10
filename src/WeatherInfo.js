import React from "react";
import FormattedDate from "./FormattedDate";
import Weather from "./Weather";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-uppercase">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description}></img>
          <span className="currentTemp">
            {Math.round(props.data.temperature)}
          </span>{" "}
          <span className="unit">℃</span>
        </div>

        <div className="col.6">
          <div className="whiteBox">
            <ul>
              <li>Feels like {props.data.feelsLike}℃</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
