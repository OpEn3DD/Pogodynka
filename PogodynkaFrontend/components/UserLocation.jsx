"use client";
import React from "react";
import { useDispatch } from "react-redux";
import SearchInput from "@/components/SearchInput";
import CurrentGeolocation from "@/components/CurrentGeolocation";
import { setCity, fetchWeatherData } from '../redux/weatherSlice';

const UserLocation = () => {
  const dispatch = useDispatch();

  const onLocationSubmit = async (search) => {
    console.log(`user search - ${search}`);
    dispatch(setCity(search));
    dispatch(fetchWeatherData(search));
  };

  const onGetGeolocation = async (geolocation) => {
    console.log(geolocation);
    dispatch(setCity(cityName))
    dispatch(fetchWeatherData(cityName))
  };

  return (
    <div className={"flex gap-2 items-center w-full"}>
      <SearchInput
        placeholder={"Search location..."}
        onSubmit={onLocationSubmit}
      />
      <CurrentGeolocation onGetGeolocation={onGetGeolocation} />
    </div>
  );
};

export default UserLocation;