"use client";
import React from "react";
import { motion } from "framer-motion";

const StaggerList = ({ items, render, delay = 0, className = "" }) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
        delayChildren: delay,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, translateY: -10 },
    show: { opacity: 1, translateY: 0 },
  };

  return (
    <motion.ul
      variants={variants}
      initial={"hidden"}
      animate={"show"}
      className={className}
    >
      {items.map((item, key) => (
        <motion.li key={key} variants={listItem}>
          {render(item)}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default StaggerList;
