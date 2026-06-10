import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Weather from "./Weather";
import Search from "./Search";
import Icons from "./Icons";
import Footer from "./Footer";
import ReactAnimatedWeather from "react-animated-weather";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <Search />
      <Icons />
      <Weather icon="RAIN" color="black" />
      <Weather icon="SNOW" color="black" />
      <Weather icon="WIND" color="black" />
      <Weather icon="FOG" color="black" />
      <Weather icon="CLEAR_DAY" color="black" />
      <Weather icon="PARTLY_CLOUDY_NIGHT" color="black" />
      <Footer />
    </div>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
