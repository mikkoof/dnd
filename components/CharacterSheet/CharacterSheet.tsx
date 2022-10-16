import { die, Roll } from "../../lib/dice";
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
      <div className={styles.stats}>
        {character.stats.map((stat) => (
          <div className={`${styles.cell} ${styles.statsBox}`} key={stat.name}>
            <p>{stat.name}</p>
            <RollBox bonus={stat.value} die={[die.D20]} addRoll={addRoll} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default CharacterSheet