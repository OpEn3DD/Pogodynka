"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { styles } from "@/styles";

const BarChart = ({ bgColor, min, max, value }) => {
  return (
    <div
      className={`relative rounded-xl h-full border-[1px] w-5 ${styles.borderColor}`}
    >
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: `${(value / (max - min)) * 100}%` }}
        transition={{ type: "spring", delay: 0.7, duration: 0.5 }}
        style={{ height: "20px" }}
        className={`absolute bottom-1 left-1/2 -translate-x-1/2  w-3 rounded-xl ${bgColor}`}
      ></motion.div>
    </div>
  );
};

export default BarChart;
