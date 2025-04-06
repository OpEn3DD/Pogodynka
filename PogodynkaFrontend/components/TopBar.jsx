"use client";
import React from "react";
import { styles } from "@/styles";
import DayForecast from "@/components/DayForecast";
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { setSelectedDay } from '../redux/weatherSlice';

const TopBar = ({ className = "" }) => {
  const dispatch = useDispatch();
  const { selectedDay, weatherData } = useSelector((state) => state.weather);
  
  // Process weather data to get daily forecasts
  const dailyForecasts = useMemo(() => {
    if (!weatherData || !weatherData.list) return Array(5).fill({});
    
    // Group forecast data by day
    const groupedByDay = {};
    
    weatherData.list.forEach(item => {
      // Get date from dt_txt or convert timestamp to date
      const date = item.dt_txt 
        ? item.dt_txt.split(' ')[0] 
        : new Date(item.dt * 1000).toISOString().split('T')[0];
      
      if (!groupedByDay[date]) {
        groupedByDay[date] = [];
      }
      
      groupedByDay[date].push(item);
    });
    
    // Get the first 5 days
    return Object.keys(groupedByDay)
      .slice(0, 5)
      .map(date => {
        const dayData = groupedByDay[date];
        // Use mid-day forecast as representative for the day
        const midDayForecast = dayData.find(item => 
          item.dt_txt && item.dt_txt.includes("12:00:00")
        ) || dayData[0];
        
        return {
          date,
          temp: midDayForecast.main.temp,
          temp_min: Math.min(...dayData.map(item => item.main.temp_min - 273.15)),
          temp_max: Math.max(...dayData.map(item => item.main.temp_max - 273.15)),
          weather: midDayForecast.weather[0],
          dt: midDayForecast.dt
        };
      });
  }, [weatherData]);

  return (
    <div className={`flex flex-col ${styles.gaps} ${className}`}>
      <h2 className={"text-2xl h-[34px]"}>Forecast for the next 5 days</h2>
      <div className={`flex w-full justify-between gap-2`}>
        {dailyForecasts.map((forecast, index) => (
          <DayForecast
            active={selectedDay === index}
            key={index}
            weather={forecast}
            onClick={() => dispatch(setSelectedDay(index))}
          />
        ))}
      </div>
    </div>
  );
};

export default TopBar;
