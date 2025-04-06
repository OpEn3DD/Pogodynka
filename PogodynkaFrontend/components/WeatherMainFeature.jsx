import React from "react";
import Card from "@/components/Card";

const WeatherMainFeature = ({ title, children }) => {
  return (
    <Card className={"h-full w-full p-4 flex flex-col justify-between"}>
      <span>{title}</span>
      {children}
    </Card>
  );
};

export default WeatherMainFeature;
