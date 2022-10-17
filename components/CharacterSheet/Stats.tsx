import { die, Roll } from "../../lib/dice"
import { CalculateAbilityModifier, CalculateProficiencyBonus, GetProficiencies } from "../../lib/modifier";
import { Character } from "../../lib/types/character"
import styles from '../../styles/Sheet.module.css'
import RollBox from "../RollBox";


const Stats = ({ character, addRoll }: {
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
        const bonus = proficiencies.skills.includes(stat.name) ? abilityModifier + proficiencyBonus : abilityModifier;
        return (
          <div className={`${styles.cell} ${styles.statsBox}`} key={stat.name}>
            <div className={styles.rollBox}>
              <p className={`${styles.statText} `}>{stat.name}</p>
              <p>{stat.value}</p>
              <RollBox bonus={bonus} die={[die.D20]} addRoll={addRoll} />
            </div>
            <div className={styles.skillList}>
              <input type="radio" checked={false} disabled={true} className={styles.proficiency} />
              <RollBox bonus={bonus} die={[die.D20]} addRoll={addRoll} />
              <div className={styles.skillName}>Saving throw</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}


export default Stats