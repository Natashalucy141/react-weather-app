import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        React Weather App
        <Weather />
        <footer>
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/natasha-aldridge-68a65ab7/"
            target="_blank"
          >
            Natasha Aldridge
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/Natashalucy141/react-weather-app"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
