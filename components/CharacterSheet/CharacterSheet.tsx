import { Roll } from "../../lib/dice";
import { Character } from "../../lib/types/character";
import styles from '../../styles/Sheet.module.css'
import Stats from "./Stats";

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
      <Stats character={character} addRoll={addRoll} />
    </div>
  )
}
export default CharacterSheet