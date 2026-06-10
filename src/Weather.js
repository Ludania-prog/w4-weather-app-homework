import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  return (
    <ReactAnimatedWeather
      icon={props.icon}
      color={props.color}
      size={60}
      animate={true}
    />
  );
}

