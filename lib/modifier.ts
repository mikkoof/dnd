import { Character, Proficiencies, SkillName, StatName } from "./types/character";

export function CalculateAbilityModifier(AbilityScore: number): number {
  return Math.floor((AbilityScore - 10) / 2);
}

export function CalculateProficiencyBonus(level: number): number {
  return Math.ceil(level / 4 + 1);
}

export function GetProficiencies(character: Character): Proficiencies {
  return ({
    savingThrows: [
      StatName.STRENGTH,
      StatName.DEXTERITY
    ],
    skills: [
      SkillName.ATHLETICS,
      SkillName.DECEPTION,
      SkillName.INVESTIGATION,
      SkillName.PERCEPTION,
      SkillName.STEALTH,
      SkillName.SURVIVAL
    ]
  })
}