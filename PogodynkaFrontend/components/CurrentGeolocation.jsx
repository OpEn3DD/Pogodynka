"use client";
import React from "react";
import { Icons } from "@/components/Icons";
import { styles } from "@/styles";

const CurrentGeolocation = ({ onGetGeolocation, className = "" }) => {
  const buttonClicked = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) =>
          onGetGeolocation({
            lat: location.coords.latitude,
            lon: location.coords.longitude,
          }),
        () => console.warn("Geolocation is not supported"),
      );
    }
  };

  return (
    <button
      className={`rounded-xl flex items-center justify-center p-2 aspect-square hover:cursor-pointer hover:brightness-90 border-[1px] hover:border-purple-700 group transition-all ease-in-out ${styles.borderColor} ${className}`}
      onClick={buttonClicked}
    >
      <Icons.Location
        className={" group-hover:text-purple-700 transition-all ease-in-out"}
      />
    </button>
  );
};

export default CurrentGeolocation;
