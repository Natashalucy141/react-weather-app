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
        <input type="submit" Value="Go"></input>
      </form>
      <h1>LONDON</h1>
      <ul>
        <li>2 November 2020, 20:42</li>
        <li>Partly cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"></img>
          14 ℃
        </div>

        <div className="col.6">
          <ul>
            <li>Change of rain 10 %</li>
            <li>Humidity: 72%</li>
            <li>Wind: 16 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
