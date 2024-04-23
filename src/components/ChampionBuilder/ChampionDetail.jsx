import championSummary from "../../../public/assets/json/champion-summary.json";
import {useEffect, useState} from "react";
import {ChampionRoles} from "./ChampionRoles.jsx";
import {ChampionPlaystyleInfo} from "./ChampionPlaystyleInfo.jsx";


export const ChampionDetail = ({championSelected, setChampionSelected}) => {

    const [selectedHeroDetail, setSelectedHeroDetail] = useState(null)
    const [selectedHeroSplashArt, setSelectedHeroSplashArt] = useState(null)
    const cdBasePath = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default"
    const basePath = "/assets/json/champion-detail"

    function splitOnCaps(word) {
        return word.replace(/([A-Z])/g, ' $1').trim();
    }

    useEffect(() => {
        if (!championSelected) return
        console.log(championSelected)
        fetch(`${basePath}/${championSelected.id}.json`)
            .then((response) => response.json())
            .then((json) => {
                json.alias = splitOnCaps(json.name)
                json.title = json.title.replace('the', 'The')
                setSelectedHeroDetail(json)
            })
    }, [championSelected])

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'd') {
                const selectedHeroIndex = championSummary.findIndex((hero) => hero.name === championSelected.name)
                if (selectedHeroIndex < championSummary.length - 1) {
                    setChampionSelected(championSummary[selectedHeroIndex + 1])
                }
            }
            if (event.key === 'a') {
                const selectedHeroIndex = championSummary.findIndex((hero) => hero.name === championSelected.name)
                if (selectedHeroIndex > 0) {
                    setChampionSelected(championSummary[selectedHeroIndex - 1])
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [championSelected])


    return (<>
            {(selectedHeroDetail && selectedHeroDetail.name !== 'None') && (
                <div className="w-full min-h-[600px] h-4/5 bg-no-repeat bg-cover"
                     style={{backgroundImage: `url(${cdBasePath}${selectedHeroDetail.skins[0].uncenteredSplashPath})`}}>
                    <div className="h-full flex flex-col justify-center gap-2 w-3/6">
                        <h2
                            className="text-left w-full text-4xl tracking-wider font-bold
                            text-yellow-200 text-shadow-md ml-4 uppercase"
                        >{selectedHeroDetail.alias}
                        </h2>
                        <p className="ml-4 text-yellow-100 font-serif tracking-wider">{selectedHeroDetail.title}</p>
                        <ChampionRoles roles={selectedHeroDetail.roles}/>
                        <ChampionPlaystyleInfo playstyleInfo={selectedHeroDetail.playstyleInfo}/>
                    </div>
                </div>)}
    </>)
}