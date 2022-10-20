import { Roll } from "../../lib/dice";
import { Campaign, Character } from "../../lib/types/character";
import styles from "../../styles/Sheet.module.css"
import HitPointsBox from "./HitPoints/HitPoints";
import Stats from "./Stats/Stats";

const CharacterSheet = ({ campaign, character, addRoll }: {
  campaign: Campaign,
  character: Character,
  addRoll: (roll: Roll) => void
}) => {
  return (
    <div className={styles.sheet}>
      <div className={`${styles.cell} ${styles.nameBox}`}>
        <p>Name:</p>
        <p>{character.name}</p>
      </div>

      <HitPointsBox />
      <Stats campaign={campaign} character={character} addRoll={addRoll} />
    </div>
  )
}
export default CharacterSheet