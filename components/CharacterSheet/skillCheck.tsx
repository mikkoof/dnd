import { die, Roll } from "../../lib/dice";
import { Character, Skill, Stat } from "../../lib/types/character";
import RollBox from "../RollBox";
import styles from '../../styles/Sheet.module.css'
import { CalculateAbilityModifier, CalculateProficiencyBonus, GetProficiencies } from "../../lib/modifier";

export const SavingThrow = ({ character, stat, addRoll }: { character: Character, stat: Stat, addRoll: (roll: Roll) => void }) => {
  const abilityModifier = CalculateAbilityModifier(stat.value);
  const proficiencyBonus = CalculateProficiencyBonus(character.level)
  const proficiencies = GetProficiencies(character)
  const proficient: boolean = proficiencies.savingThrows.includes(stat.name);
  const bonus = proficient ? abilityModifier + proficiencyBonus : abilityModifier;
  return (
    <div className={styles.skillList}>
      <input type="radio" checked={proficient ? true : false} disabled={true} className={styles.proficiency} />
      <RollBox bonus={bonus} die={[die.D20]} addRoll={addRoll} />
      <div className={styles.skillName}>Saving throw</div>
    </div>
  )
};

export const SkillCheck = ({ character, skill, modifier, addRoll }: { character: Character, skill: Skill, modifier: number, addRoll: (roll: Roll) => void }) => {
  const proficiencyBonus = CalculateProficiencyBonus(character.level)
  const proficiencies = GetProficiencies(character)
  const proficient: boolean = proficiencies.skills.includes(skill.name);
  const bonus = proficient ? modifier + proficiencyBonus : modifier;

  return (
    <div className={styles.skillList}>
      <input type="checkbox" checked={proficient ? true : false} disabled={true} className={styles.proficiency} />
      <RollBox bonus={bonus} die={[die.D20]} addRoll={addRoll} />
      <div className={`${styles.skillName} `}>{skill.name}</div>
    </div>
  )
}