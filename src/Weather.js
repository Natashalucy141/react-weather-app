import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <li>2 November 2020, 20:42</li>
        <li>Partly cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="partly cloudy emoji"
          ></img>
          <span className="currentTemp">14</span>{" "}
          <span className="unit">℃</span>
        </div>

        <div className="col.6">
          <div className="whiteBox">
            <ul>
              <li>Feels like 15℃</li>
              <li>Humidity: 72%</li>
              <li>Wind: 16 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
