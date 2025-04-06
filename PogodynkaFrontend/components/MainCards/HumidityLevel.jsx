"use client";
import React from "react";
import { useSelector } from "react-redux";
import WeatherMainFeature from "@/components/WeatherMainFeature";
import BarChart from "@/components/BarChart";
import CardValue from "@/components/MainCards/CardValue";

const getHumidityFeedback = (humidityLevel) => {
  if (typeof humidityLevel !== "number" || isNaN(humidityLevel)) {
    return "Invalid humidity level. Please provide a number.";
  }

  if (humidityLevel < 30) {
    return "Dry 🌵";
  } else if (humidityLevel >= 30 && humidityLevel < 60) {
    return "Normal 👍";
  } else if (humidityLevel >= 60 && humidityLevel < 80) {
    return "Humid 💧";
  } else {
    return "Very Humid 💦";
  }
};

const HumidityLevel = ({data}) => {
  const humidity = data?.main.humidity || 0; // Jeśli brak danych, ustawiamy domyślną wartość 0
  console.log("Humidity Level:", humidity); // Debugging
  console.log(data); // Debugging

  return (
    <WeatherMainFeature title={"Humidity"}>
      <div className={"flex justify-between flex-1 items-center"}>
        <CardValue value={humidity} unit={"%"} />
        <BarChart
          min={0}
          max={100}
          value={humidity}
          bgColor={`bg-blue-600`}
        />
      </div>
      <p>{getHumidityFeedback(humidity)}</p>
    </WeatherMainFeature>
  );
};

export default HumidityLevel;
