"use client";
import React from "react";
import WeatherMainFeature from "@/components/WeatherMainFeature";
import { styles } from "@/styles";
import { Icons } from "@/components/Icons";
import { motion } from "framer-motion";
import CardValue from "@/components/MainCards/CardValue";

/**
 * Konwertuje kierunek wiatru (w stopniach) na kierunek kompasowy
 */
const getWindDirection = (deg) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(deg / 45) % 8;
  return directions[index >= 0 ? index : 0];
};

/**
 * Konwertuje m/s na km/h
 */
const getKilometersPerHour = (metersPerSecond) => {
  return (metersPerSecond * 3.6).toFixed(2);
};

const WindStatus = ({ data }) => {
  if (!data || !data.wind) return null;

  const { speed, deg, gust } = data.wind;

  return (
    <WeatherMainFeature title={"Wind Status"}>
      <CardValue value={getKilometersPerHour(speed)} unit={"km/h"} />

      <div className="flex gap-2 items-center">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: deg - 45 }} // Obrót igły kompasu
          transition={{ type: "spring", delay: 0.25 }}
          className={`flex relative aspect-square w-8 rounded-full border-[1px] ${styles.borderColor}`}
        >
          <Icons.WindDirection
            className={
              "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-[calc(50%+1px)]"
            }
          />
        </motion.div>
        <span>{getWindDirection(deg)}</span>
      </div>

      {gust && (
        <div className="text-xs text-neutral-500 mt-2">
          Gusts up to {getKilometersPerHour(gust)} km/h
        </div>
      )}
    </WeatherMainFeature>
  );
};

export default WindStatus;
