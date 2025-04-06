import React from "react";
import { motion } from "framer-motion";

const RolledNumber = ({
  number,
  duration = 1,
  rolling = 10,
  delay = 0.1,
  height,
  width,
  className = "",
}) => {
  return (
    <>
      <div
        className={`relative flex overflow-y-hidden ${className}`}
        style={{ height }}
      >
        {number
          .toString()
          .split("")
          .map((singleNumber, index) =>
            singleNumber !== "." ? (
              <div key={index} className={"relative"} style={{ width }}>
                <SingleRolledNumber
                  key={index}
                  number={singleNumber}
                  duration={duration}
                  delay={delay * index}
                  rolling={rolling}
                />
              </div>
            ) : (
              <span key={index}>.</span>
            ),
          )}
      </div>
    </>
  );
};

const SingleRolledNumber = ({ number, duration, rolling, delay }) => {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const numbersStack = [
    number.toString(),
    ...Array.from(Array(rolling).keys()).map(
      (_, index) => numbers[index % number.length],
    ),
  ];

  return (
    <motion.div
      className={"absolute flex flex-col"}
      animate={{ top: [`-${numbersStack.length * 2}rem`, "0rem"] }}
      transition={{ duration, type: "spring", delay }}
    >
      {numbersStack.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </motion.div>
  );
};

export default RolledNumber;
