"use client";
import React from "react";

const LinedButtons = ({ items, render, className = "" }) => {
  return (
    <div className={`flex gap-x-3 p-3 rounded-2xl ${className}`}>
      {items.map((item) => render(item))}
    </div>
  );
};

export default LinedButtons;
