import { die, Roll } from "../../lib/dice"
import { CalculateAbilityModifier, CalculateProficiencyBonus, GetProficiencies } from "../../lib/modifier";
import { Campaign, Character } from "../../lib/types/character"
import styles from '../../styles/Sheet.module.css'
import RollBox from "../RollBox";
import { SavingThrow, SkillCheck } from "./skillCheck";


const Stats = ({ campaign, character, addRoll }: {
  campaign: Campaign,
  character: Character,
  addRoll: (roll: Roll) => void
}) => {
  const proficiencyBonus = CalculateProficiencyBonus(character.level)
  const proficiencies = GetProficiencies(character)
  return (
    <div className={styles.stats}>
      <div className={`${styles.cell} ${styles.proficiencyBox}`}>
        <div className={`${styles.cell} ${styles.proficiencyBonus}`}>
          + {proficiencyBonus}
        </div>
        <p>Proficiency Bonus</p>
      </div>
      {character.stats.map((stat) => {
        const abilityModifier = CalculateAbilityModifier(stat.value);
        const proficient: boolean = proficiencies.savingThrows.includes(stat.name);
        console.log(proficient)
        const bonus = proficient ? abilityModifier + proficiencyBonus : abilityModifier;
        return (
          <div key={stat.name} className={`${styles.cell} ${styles.statsBox}`}>
            <div className={styles.rollBox}>
              <p className={`${styles.statText} `}>{stat.name}</p>
              <p>{stat.value}</p>
              <RollBox bonus={bonus} die={[die.D20]} addRoll={addRoll} />
            </div>
            <SavingThrow key={stat.name} character={character} stat={stat} addRoll={addRoll} />
            {campaign.skills.map((skill) => {
              if (skill.modifier === stat.name) {
                return (
                  <SkillCheck key={skill.name} character={character} skill={skill} modifier={abilityModifier} addRoll={addRoll} />
                )
              }
            })
            }
          </div>
        )
      })}
    </div>
  )
}


export default Stats