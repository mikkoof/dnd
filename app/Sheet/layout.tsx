import CharacterProvider from "./context"
import { Character } from "../../lib/types/character"

const initialEmptyCharacter: Character = {
  name: "",
  level: 0,
  stats: [],
  currentHealth: 0,
}
export default function sheetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CharacterProvider characterProp={{ character: initialEmptyCharacter }}>
      {children}
    </CharacterProvider>
  )
}