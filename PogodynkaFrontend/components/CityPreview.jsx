"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import OverlayContainer from "@/components/OverlayContainer";
import { styles } from "@/styles";

const CityPreview = ({ image, cityName }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [image, cityName]);

  return (
    <div
      className={`relative flex-1 max-h-[12rem] mt-auto text-center rounded-xl overflow-hidden border-[1px] ${styles.borderColor} hover:${styles.borderColorFocus} transition-colors group`}
    >
      <Image
        src={"/city.jpg"}
        alt={"City image"}
        fill
        loading={"lazy"}
        className={"brightness-[.6]"}
        onLoad={() => setImageLoaded(true)}
      />
      <OverlayContainer
        className={`left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:bg-purple-700/75 transition-colors ease-in-out`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.7, delay: 0.5 }}
      >
        {cityName}
      </OverlayContainer>
    </div>
  );
};

export default CityPreview;
