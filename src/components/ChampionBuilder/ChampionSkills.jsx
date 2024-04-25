import { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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
                <Card
                    className="absolute
                     sm:w-5/6
                     md:w-3/6 md:h-3/6
                     md:left-1/4 bg-black bg-opacity-70 border-black">
                    <CardHeader>
                        <CardTitle className={"text-yellow-200 p-2 text-4xl text-center"}>{selectedSkill.name}</CardTitle>
                    </CardHeader>
                    <CardContent className={"flex flex-wrap-reverse justify-between"}>
                        <CardDescription
                            className="
                            text-yellow-200 font-serif p-2
                            md:w-2/4
                            sm:w-full
                            ">
                            {selectedSkill.description}
                        </CardDescription>
                        <section className={"sm:w-full xl:w-2/4 md:min-w-[400px] sm:w-full sm:min-w-[400px]"}>
                            <video src={`${basePathAbilityPreview}${selectedSkill.abilityVideoPath}`} muted
                                   controls="true" autoPlay loop="true"/>
                        </section>
                    </CardContent>
                    <CardFooter>
                        <CardDescription>{selectedSkill.abilitySlot}</CardDescription>
                    </CardFooter>
                </Card>
            )}
        </>
    )
}