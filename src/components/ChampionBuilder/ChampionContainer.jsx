import {ChampionDetail} from "./ChampionDetail.jsx";
import {ChampionListIcon} from "./ChampionListIcon.jsx";

import { useState } from "react";

export const ChampionContainer = () => {

    const [championSelected, setChampionSelected] = useState({id: '-1', name: 'None'})

    return (
        <div className={"hero-list-container"}>
            <ChampionDetail championSelected={championSelected}/>
            <ChampionListIcon setChampionSelected={(event) => setChampionSelected(event)} championSelected={championSelected}/>
        </div>
    )
}