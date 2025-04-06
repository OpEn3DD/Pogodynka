import React from "react";
import { styles } from "@/styles";
import { motion } from "framer-motion";

const OverlayContainer = ({ className = "", children, ...props }) => {
  return (
    <motion.div
      {...props}
      className={`absolute w-fit bg-neutral-700/50 px-3 py-1 rounded-xl z-[10] ${styles.textDefault} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default OverlayContainer;
