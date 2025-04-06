import React from "react";
import RolledNumber from "@/components/RolledNumber";

const CardValue = ({ value, unit = "" }) => {
  return (
    <h3 className={"text-4xl font-semibold flex gap-1 items-end"}>
      <RolledNumber
        number={value}
        rolling={5}
        duration={1.5}
        height={40}
        width={22}
      />
      {unit.length && <span className={"text-lg"}>{unit}</span>}
    </h3>
  );
};

export default CardValue;
