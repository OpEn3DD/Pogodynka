import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { styles } from "@/styles";
import WindStatus from "./MainCards/WindStatus";
import SunriseSunset from "./MainCards/SunriseSunset";
import HumidityLevel from "./MainCards/HumidityLevel";
import VisibilityDistance from "./MainCards/VisibilityDistance";
import Precipitation from "./MainCards/Precipitation";
import Pressure from "./MainCards/Pressure";

const DayHighlights = ({ className = "" }) => {
  const { weatherData, selectedDay } = useSelector((state) => state.weather);

  // ✅ Hook zawsze wywoływany – warunki przeniesione do środka
  const midDay = useMemo(() => {
    if (!weatherData || !weatherData.list) return null;

    const groupedByDate = {};
    weatherData.list.forEach((item) => {
      const date = item.dt_txt?.split(" ")[0];
      if (!groupedByDate[date]) groupedByDate[date] = [];
      groupedByDate[date].push(item);
    });

    const allDates = Object.keys(groupedByDate);
    const selectedDate = allDates[selectedDay];
    const forecasts = groupedByDate[selectedDate];

    return (
      forecasts?.find((f) => f.dt_txt.includes("12:00:00")) || forecasts?.[0]
    );
  }, [weatherData, selectedDay]);

  // 🌤️ Warunek po hookach – jeśli dane jeszcze się ładują
  if (!weatherData || !weatherData.city || !midDay) {
    return <div>Loading highlights...</div>; // lub spinner/placeholder
  }

  const highlights = [
    () => <WindStatus data={midDay} />,
    () => <SunriseSunset data={weatherData.city} />,
    () => <HumidityLevel data={midDay} />,
    () => <VisibilityDistance data={midDay} />,
    () => <Precipitation data={midDay} />,
    () => <Pressure data={midDay} />,
  ];

  return (
    <div className={`flex flex-col ${styles.gaps} ${className}`}>
      <h2 className={"text-2xl"}>Today's Highlights</h2>
      <div className={`h-full grid grid-cols-3 grid-rows-2 gap-2`}>
        {highlights.map((Item, index) => (
          <div key={index}>{Item()}</div>
        ))}
      </div>
    </div>
  );
};

export default DayHighlights;
