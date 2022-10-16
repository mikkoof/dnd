
export interface Character {
  name: string,
  stats: Stat[]
}

export interface Stat {
  name: StatName,
  value: number,
}

export enum StatName {
  STRENGTH = "Strength",
  DEXTERITY = "Dexterity",
  CONSTITUTION = "Constitution",
  INTELLIGENCE = "Intelligence",
  WISDOM = "Wisdom",
  CHARISMA = "Charisma"
}