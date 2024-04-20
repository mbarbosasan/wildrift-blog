import { useEffect, useState } from "react";

export const ChampionDetail = ({championSelected}) => {

    const [selectedHeroDetail, setSelectedHeroDetail] = useState(null)
    const [selectedHeroSplashArt, setSelectedHeroSplashArt] = useState(null)
    const cdBasePath = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default"
    const basePath = "/assets/json/champion-detail"

    useEffect(() => {
        if (!championSelected) return
        console.log(championSelected)
        fetch(`${basePath}/${championSelected.id}.json`)
            .then((response) => response.json())
            .then((json) => {
                setSelectedHeroDetail(json)
        })
    }, [championSelected])

    useEffect(() => {
        if (!selectedHeroSplashArt) return
        const basePath = "/assets/champion-splashes"
        fetch(`${basePath}/${championSelected.skins[0].splashPath}`)
    }, [championSelected]);

    return (
        <>
            {(selectedHeroDetail && selectedHeroDetail.name !== 'None') && (
                <div className="hero-detail" style={{backgroundImage: `url(${cdBasePath}${selectedHeroDetail.skins[0].splashPath})`}}>
                    <div className={'hero-detail-info'}>
                        <h2>{selectedHeroDetail.alias}</h2>
                        <p>{selectedHeroDetail.shortBio}</p>
                        <div>{selectedHeroDetail.roles.map((role, index) => {
                            return (
                                <p key={index}>{role}</p>
                            )
                        })}</div>
                    </div>
                    <div className={'hero-detail-abilities'}>
                    </div>
                </div>
            )}
        </>
    )
}