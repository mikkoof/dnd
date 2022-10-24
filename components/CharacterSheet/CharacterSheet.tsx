import { useContext } from "react";
import { Roll } from "../../lib/dice";
import { Campaign, Character } from "../../lib/types/character";
import styles from "../../styles/Sheet.module.css"
import { CharacterContext } from "./context";
import HitPointsBox from "./HitPoints/HitPoints";
import Stats from "./Stats/Stats";

const CharacterSheet = ({ campaign, addRoll }: {
  campaign: Campaign,
  addRoll: (roll: Roll) => void
}) => {

  const { state } = useContext(CharacterContext)

  return (
    <div className={styles.sheet}>
      <div className={`${styles.cell} ${styles.nameBox}`}>
        <p>Name:</p>
        <p>{state.character.name}</p>
      </div>

      <HitPointsBox />
      <Stats campaign={campaign} character={state.character} addRoll={addRoll} />
    </div>
  )
}
export default CharacterSheet