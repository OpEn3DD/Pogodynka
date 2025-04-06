import React from "react";
import { styles } from "@/styles";

const OuterContainer = ({ className = "", children }) => {
  return (
    <div
      className={`relative lg:px-8 md:px-4 px-2 rounded-xl m-4 ${styles.bgColor} ${className}`}
    >
      {children}
    </div>
  );
};

export default OuterContainer;
