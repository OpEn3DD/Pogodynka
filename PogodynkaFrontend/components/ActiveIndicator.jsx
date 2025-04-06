import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles";

const ActiveIndicator = ({ layoutId, active, children }) => {
  return (
    <div
      className={`relative rounded-xl px-3 py-1 border-[1px] hover:cursor-pointer ${
        active ? `${styles.borderColorFocus}` : `${styles.borderColor}`
      }`}
    >
      {children}
      {active && (
        <motion.span
          transition={{
            type: "spring",
            duration: 0.7,
          }}
          layoutId={layoutId}
          className={`pointer-events-none mix-blend-multiply rounded-xl absolute left-0 top-0 w-full h-full ${
            active ? `${styles.bgAccentColor}` : ``
          }`}
        />
      )}
    </div>
  );
};

export default ActiveIndicator;
