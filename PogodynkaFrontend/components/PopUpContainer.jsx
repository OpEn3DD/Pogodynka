"use client";
import React from "react";
import { motion } from "framer-motion";

const PopUpContainer = ({ className = "", children }) => {
  return (
    <motion.div
      initial={{
        scale: 0.9,
        opacity: 0.1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        duration: 0.7,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PopUpContainer;
