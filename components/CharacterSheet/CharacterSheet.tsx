import { die, Roll } from "../../lib/dice";
import { CalculateAbilityModifier, CalculateProficiencyBonus } from "../../lib/modifier";
import { Character } from "../../lib/types/character";
import styles from '../../styles/Sheet.module.css'
import RollBox from "../RollBox";

const CharacterSheet = ({ character, addRoll }: {
  character: Character,
  addRoll: (roll: Roll) => void
}) => {
  return (
    <div className={styles.sheet}>

      <div className={`${styles.cell} ${styles.nameBox}`}>
        <p>Name:</p>
        <p>{character.name}</p>
      </div>

      <div className={`${styles.cell} ${styles.hitPointsBox}`}>
        <p>HP here</p>
      </div>

      <div className={styles.stats}>
        <div className={`${styles.cell} ${styles.proficiencyBox}`}>
          <div className={`${styles.cell} ${styles.proficiencyBonus}`}>
            + {CalculateProficiencyBonus(5)}
          </div>
          <p className={styles.proficiencyText}>Proficiency Bonus</p>
        </div>
        {character.stats.map((stat) => (
          <div className={`${styles.cell} ${styles.statsBox}`} key={stat.name}>
            <p>{stat.name}</p>
            <RollBox bonus={CalculateAbilityModifier(stat.value)} die={[die.D20]} addRoll={addRoll} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default CharacterSheet