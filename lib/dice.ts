export enum die {
  D4  = 4,
  D6  = 6,
  D8  = 8,
  D10 = 10,
  D12 = 12,
  D20 = 20,
  D100= 100
}

export interface Roll {
  dice: die[],
  value: number,
}