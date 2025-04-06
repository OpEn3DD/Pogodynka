import React, { forwardRef } from "react";
import { styles } from "@/styles";

const Input = forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`bg-transparent rounded-xl outline-none border-[1px] px-3 py-1 ${styles.borderColor} focus:border-purple-700 transition-all ease-in-out ${className}`}
      {...props}
    />
  );
});

export default Input;
