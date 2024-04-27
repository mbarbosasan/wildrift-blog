import { ChampionDetail } from "./ChampionDetail.jsx";
import { ChampionListIcon } from "./ChampionListIcon.jsx";

import { useState } from "react";

export const ChampionContainer = () => {
  const [championSelected, setChampionSelected] = useState({
    id: "-1",
    name: "None",
  });

  return (
    <main className="flex justify-center">
      <div className="flex flex-col sm:w-full md:w-5/6">
        <ChampionDetail
          championSelected={championSelected}
          setChampionSelected={(hero) => setChampionSelected(hero)}
        />
        <ChampionListIcon
          setChampionSelected={(event) => setChampionSelected(event)}
          championSelected={championSelected}
        />
      </div>
    </main>
  );
};
