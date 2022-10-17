
export interface Character {
  name: string;
  level: number;
  stats: Stat[];
}

export interface Stat {
  name: StatName | string,
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

export enum SkillName {
  ACROBATICS      = "Acrobatics",
  ANIMAL_HANDLING = "Animal Handling",
  ARCANA          = "Arcana",
  ATHLETICS       = "Athletics",
  DECEPTION       = "Deception",
  HISTORY         = "History",
  INSIGHT         = "Insight",
  INTIMIDATIOn    = "Intimidation",
  INVESTIGATION   = "Investigation",
  MEDICINE        = "Medicine",
  NATURE          = "Nature",
  PERCEPTION      = "Perception",
  PERFORMANCE     = "Performance",
  PERSUATION      = "Persuation",
  RELIGION        = "Religion",
  SLEIGHT_OF_HAND = "Sleight of Hand",
  STEALTH         = "Stealth",
  SURVIVAL        = "Survival"
}

export interface Skill {
  name: SkillName | string;
  proficiency: boolean;
  modifier: StatName | string;
}

export interface Proficiencies {
  savingThrows: StatName | string [];
  skills: SkillName | string []
}