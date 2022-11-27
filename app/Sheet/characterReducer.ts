import { Character } from "../../lib/types/character"

export interface State {
  character: Character
}

export interface Action{ 
  type: ActionType,
  payload: {
    healthPayload?: number,
    newCharacter?: Character,
  }
}

export enum ActionType {
  SET_CHARACTER= "SET_CHARACTER",
  REDUCE_HEALTH= "REDUCE_HEALTH",
  INCREASE_HEALTH= "INCREASE_HEALTH",
}

const characterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_CHARACTER':
      return {character: action.payload.newCharacter as Character}
    case 'REDUCE_HEALTH':
      return {
        character: {
          ...state.character,
          currentHealth: state.character.currentHealth -= (action.payload.healthPayload as number)
        }
      }
    case 'INCREASE_HEALTH': 
      return {
        character: {
          ...state.character,
          currentHealth: state.character.currentHealth += (action.payload.healthPayload as number)
        }
      }
    default:
      return state;
  }
}

export default characterReducer;