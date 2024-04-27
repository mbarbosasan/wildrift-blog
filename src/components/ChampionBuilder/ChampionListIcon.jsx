export const ChampionListIcon = ({ setChampionSelected, championSelected }) => {
  const basePath =
    "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default";
  return (
    <ul className="hero-list">
      {championSummary.map((icon, index) => {
        return (
          <li key={index}>
            <ChampionIcon
              iconSrc={basePath + icon.squarePortraitPath}
              alt={icon.name}
              heroSelected={() => setChampionSelected(icon)}
              isSelected={championSelected?.name === icon.name}
            />
          </li>
        );
      })}
    </ul>
  );
};
import championSummary from "../../../public/assets/json/champion-summary.json";
import { ChampionIcon } from "./ChampionIcon.jsx";

import { useState } from "react";
import "./Champion.css";
