import { useState, useEffect } from "react";

export const ChampionSkills = ({skills, selectedHeroState}) => {

    const [selectedSkill, setSelectedSkill] = useState(null)

    const basePath = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default'
    const basePathAbilityPreview = "https://d28xe8vt774jo5.cloudfront.net/"

    useEffect(() => {
        setSelectedSkill(null)
    }, [selectedHeroState]);

    return (
        <>
            <div className="ml-4 flex items-center gap-2">
                {skills && skills.map((skill, index) => (
                        <img key={index} src={`${basePath}${skill.abilityIconPath.toLowerCase()}`} alt={skill.name} width={50} height={50} onClick={() => setSelectedSkill(skill)}/>
                ))}
            </div>
            {selectedSkill && (
                <div className="absolute w-3/6 h-2/6 bg-black bg-opacity-70 left-1/4 flex justify-between">
                    <section className="w-2/4">
                        <h2 className="text-yellow-200 p-2 text-4xl">{selectedSkill.name}</h2>
                        <p className="text-yellow-200 font-serif p-2">{selectedSkill.description}</p>
                    </section>
                    <section className="w-2/4 flex items-center">
                        <video className="w-full h-full" src={`${basePathAbilityPreview}${selectedSkill.abilityVideoPath}`} muted controls="true" autoPlay loop="true"/>
                    </section>
                </div>
            )}
        </>
    )
}