"use client";
import React from "react";
import { styles } from "@/styles";

const Card = ({ className = "", active = false, children, ...props }) => {
  return (
    <div
      className={`${
        active ? `border-[1px] ${styles.borderColorFocus}` : "border-[1px]"
      } rounded-xl ${styles.borderColor} hover:${
        styles.borderColorFocus
      } hover:bg-neutral-900 transition-colors ease-in-out hover:cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
