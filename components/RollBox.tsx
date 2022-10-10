import { die } from "../lib/dice";

function rollDie(dice: die) {
  return Math.floor(Math.random() * dice) + 1;
}

function rollSkillCheck(dice: die[]) {
  const result = dice.reduce((total, current) => {
    return total + rollDie(current);
  }, 0);
  console.log(result + 2)
}

export default function RollBox({
  bonus,
  die,
}: {
  bonus: number;
  die: die[];
}): React.ReactElement {
  return (
    <button onClick={() => rollSkillCheck(die)}>

    </button>
  )
}