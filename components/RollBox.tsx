import { die, Roll } from "../lib/dice";
import styles from '../styles/Roll.module.css'

function rollDie(dice: die) {
  return Math.floor(Math.random() * dice) + 1;
}

function rollSkillCheck(dice: die[], bonus: number): Roll {
  const result = dice.reduce((total, current) => {
    return total + rollDie(current);
  }, 0) + bonus;
  return { dice: dice, value: result }
}

export default function RollBox({
  bonus,
  die,
  addRoll,
}: {
  bonus: number;
  die: die[];
  addRoll: (roll: Roll) => void
}): React.ReactElement {
  function handleRoll(dice: die[], bonus: number): void {
    const roll = rollSkillCheck(dice, bonus);
    console.log(roll)
    addRoll(roll)
  }
  return (
    <div onClick={() => handleRoll(die, bonus)} className={styles.box}>
      {bonus < 0 ? `${bonus}` : `+${bonus}`}
    </div>
  )
}