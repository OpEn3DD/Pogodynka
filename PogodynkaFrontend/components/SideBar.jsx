"use client";
import React from "react";
import { useSelector } from "react-redux";
import UserLocation from "@/components/UserLocation";
import { styles } from "@/styles";
import Image from "next/image";
import StaggerList from "@/components/StaggerList";
import CityPreview from "@/components/CityPreview";
import PopUpContainer from "@/components/PopUpContainer";
import WeatherSecondaryFeature from "@/components/WeatherSecondaryFeature";

const SideBar = ({ className = "" }) => {
  const { city, weatherData, loading, error } = useSelector((state) => state.weather);

  // Funkcja pomocnicza, która wyciąga dane tylko jeśli są dostępne
  const getWeatherInfo = () => {
    if (!weatherData || !weatherData.list || !weatherData.list.length) {
      return null;
    }

    const temp = Math.round(weatherData.list[0].main.temp - 273.15);
    const currTime = new Date(weatherData.list[0].dt * 1000);

    const dayOfWeek = currTime.toLocaleDateString("en-US", { weekday: "long" });
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("pl-PL", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // 24-godzinny format
    });

    const weatherIcon = weatherData.list[0].weather[0].icon;
    const weatherDescription = weatherData.list[0].weather[0].main;
    const humidity = weatherData.list[0].main.humidity;

    const sideBarWeatherInfo = [
      {
        image: { src: `/weather/${weatherIcon}.svg`, alt: "Weather Condition" },
        value: weatherDescription,
      },
      {
        image: { src: "/weather/humidity.svg", alt: "Humidity" },
        value: `${humidity}%`,
      },
    ];

    return {
      cityName: weatherData.city.name,
      temp,
      dayOfWeek,
      formattedTime,
      weatherIcon,
      sideBarWeatherInfo,
    };
  };

  const weatherInfo = getWeatherInfo();

  return (
    <div className={`flex flex-col ${styles.gaps} ${className}`}>
      <PopUpContainer>
        <UserLocation />
      </PopUpContainer>

      {/* Obsługa błędu */}
      {error && (
        <div className="text-red-500 p-4 border border-red-300 rounded-xl">
          Błąd: {error}
        </div>
      )}

      {/* Obsługa ładowania */}
      {loading && (
        <div className="p-4 border rounded-xl text-center">
          ⏳ Ładowanie danych pogodowych...
        </div>
      )}

      {/* Obsługa braku danych */}
      {!loading && !error && !weatherInfo && (
        <div className="p-4 border rounded-xl text-center text-neutral-500">
          Wprowadź miasto, aby zobaczyć dane pogodowe.
        </div>
      )}

      {/* Główna zawartość tylko jeśli dane są dostępne */}
      {weatherInfo && (
        <>
          <div
            className={`flex flex-col ${styles.gaps} border-[1px] ${styles.borderColor} p-4 rounded-xl`}
          >
            <div className="relative flex items-center justify-between gap-2 w-full rounded-xl">
              <div
                className={`flex flex-col gap-2 border-[1px] rounded-xl ${styles.borderColor} ${styles.paddings}`}
              >
                <div className="text-6xl flex gap-1">
                  <span>{weatherInfo.temp}°C</span>
                </div>
                <span>
                  <span className="font-semibold">{weatherInfo.dayOfWeek}</span>,{" "}
                  <span className="text-neutral-400">{weatherInfo.formattedTime}</span>
                </span>
              </div>
              <div className="relative min-h-[8rem] aspect-square mx-auto">
                <Image
                  src={`/weather/${weatherInfo.weatherIcon}.svg`}
                  alt={"Weather icon"}
                  fill
                />
              </div>
            </div>

            <StaggerList
              className="flex flex-col gap-2"
              items={weatherInfo.sideBarWeatherInfo}
              delay={0.5}
              render={(item) => (
                <WeatherSecondaryFeature
                  icon={<Image {...item.image} fill />}
                  content={item.value}
                />
              )}
            />
          </div>

          <CityPreview cityName={weatherInfo.cityName} />
        </>
      )}
    </div>
  );
};

export default SideBar;
