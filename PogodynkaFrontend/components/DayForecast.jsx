import React from "react";
import Image from "next/image";
import Card from "@/components/Card";

const DayForecast = ({ weather, active, ...props}) => {
  const dayOfWeek = new Date(weather.date).toLocaleDateString('en-US', { weekday: 'short' });
  const icon = weather.weather?.icon || "01d"; // domyślna ikona jeśli brak danych
  const iconSrc = `/weather/${icon}.svg`;

  return (
    <Card className={"w-full p-4"} active={active} {...props}>
      <span>{dayOfWeek}</span>
      <div className={"relative min-h-[5rem] aspect-ratio"}>
        <Image src={iconSrc} alt={"Weather icon"} fill />
      </div>
      <div className={"flex gap-2 text-sm"}>
        <span>{Math.round(weather.temp_max)}°</span>
        <span className={"text-neutral-400"}>{Math.round(weather.temp_min)}°</span>
      </div>
    </Card>
  );
};

export default DayForecast;