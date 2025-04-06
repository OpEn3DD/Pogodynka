"use client";
import React from "react";
import { useSelector } from "react-redux";
import WeatherMainFeature from "@/components/WeatherMainFeature";
import CardValue from "@/components/MainCards/CardValue";

const getVisibilityFeedback = (visibilityMeters) => {
  if (typeof visibilityMeters !== "number" || isNaN(visibilityMeters)) {
    return "Invalid visibility. Please provide a number (in meters).";
  }

  if (visibilityMeters < 100) {
    return "Very Poor Visibility 🌫️";
  } else if (visibilityMeters >= 100 && visibilityMeters < 1000) {
    return "Poor Visibility ☁️";
  } else if (visibilityMeters >= 1000 && visibilityMeters < 5000) {
    return "Moderate Visibility 🌤️";
  } else if (visibilityMeters >= 5000 && visibilityMeters < 10000) {
    return "Good Visibility ☀️";
  } else if (visibilityMeters === 10000) {
    return "Excellent Visibility 💯";
  } else {
    return "Visibility Exceeds Maximum Range";
  }
};

const VisibilityDistance = () => {
  // Pobieramy dane z Redux store
  const { weatherData } = useSelector((state) => state.weather);

  // Jeżeli dane są dostępne, używamy visibility z pogody
  const visibility = weatherData?.list?.[0]?.visibility; // Zakładając, że mamy dane w `weatherData`

  return (
    <WeatherMainFeature title={"Visibility"}>
      <CardValue
        value={visibility ? Math.round(visibility / 1000 * 100) / 100 : 0} // Przekształcamy widoczność na kilometry
        unit={"km"}
      />
      <p>{visibility ? getVisibilityFeedback(visibility) : "No visibility data available"}</p>
    </WeatherMainFeature>
  );
};

export default VisibilityDistance;
