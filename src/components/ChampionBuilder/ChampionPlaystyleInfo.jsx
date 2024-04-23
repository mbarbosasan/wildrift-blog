import {SkillBar} from "../SkillBar.jsx";

export const ChampionPlaystyleInfo = ({playstyleInfo}) => {
    return (
        <>
            <section className="ml-4 flex flex-col gap-1">
                <SkillBar value={playstyleInfo.damage} maxValue={3}>
                    <p className="text-sm uppercase text-yellow-100 tracking-wider font-serif">Dano</p>
                </SkillBar>
                <SkillBar value={playstyleInfo.durability} maxValue={3}>
                    <p className="text-sm uppercase text-yellow-100 tracking-wider font-serif">Durabilidade</p>
                </SkillBar>
                <SkillBar value={playstyleInfo.crowdControl} maxValue={3}>
                    <p className="text-sm uppercase text-yellow-100 tracking-wider font-serif">Controle de Grupo</p>
                </SkillBar>
                <SkillBar value={playstyleInfo.mobility} maxValue={3}>
                    <p className="text-sm uppercase text-yellow-100 tracking-wider font-serif">Mobilidade</p>
                </SkillBar>
                <SkillBar value={playstyleInfo.utility} maxValue={3}>
                    <p className="text-sm uppercase text-yellow-100 tracking-wider font-serif">Utilidade</p>
                </SkillBar>
            </section>
        </>
    )
}