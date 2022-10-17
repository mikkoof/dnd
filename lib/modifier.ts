import { Character } from "./types/character";

export function CalculateAbilityModifier(AbilityScore: number): number {
  return Math.floor((AbilityScore - 10) / 2);
}

export function CalculateProficiencyBonus(level: number): number {
  return Math.ceil(level / 4 + 1);
}

export function GetProficiencies(character: Character): {string: boolean}[] {
  return []
}