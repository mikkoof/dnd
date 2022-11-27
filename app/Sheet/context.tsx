'use client';
import { createContext, Dispatch, useReducer } from "react";
import { Character } from "../../lib/types/character";
import characterReducer, { Action, State } from "./characterReducer";

const initialCharacter: Character = {
  name: "",
  level: 0,
  stats: [],
  currentHealth: 0,
}

export const CharacterContext = createContext<{ state: State, dispatch: Dispatch<Action> }>({
  state: {
    character: initialCharacter
  },
  dispatch: () => undefined,
})

interface Props {
  children: any;
  characterProp: { character: Character };
}


const CharacterProvider: React.FC<Props> = ({ children, characterProp }) => {
  const [state, dispatch] = useReducer(characterReducer, characterProp)
  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
}

export default CharacterProvider;