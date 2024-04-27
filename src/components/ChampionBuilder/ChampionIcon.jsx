import React from "react";
import "./Champion.css";

export const ChampionIcon = ({ iconSrc, alt, heroSelected, isSelected }) => {
  return (
    <img
      src={iconSrc}
      alt={alt}
      width={50}
      height={50}
      onClick={heroSelected}
      className={isSelected ? "hero-selected" : ""}
    />
  );
};
