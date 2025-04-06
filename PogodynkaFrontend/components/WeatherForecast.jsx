"use client";
import React, { useEffect } from "react";
import { styles } from "@/styles";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import DayHighlights from "@/components/DayHighlights";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const WeatherForecast = ({ className }) => {

  return (
    <Provider store={store}>
      <div className={`flex relative ${styles.gaps} h-full`}>
        <SideBar className={"basis-2/5 h-full"} />
        <div className={`flex flex-col w-full ${styles.gaps}`}>
          <TopBar className={""} />
          <DayHighlights className={"flex-1"} />
        </div>
      </div>
    </Provider>
  );
};

export default WeatherForecast;
