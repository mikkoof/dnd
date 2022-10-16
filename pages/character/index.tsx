import { NextPage } from 'next'
import useSWR from 'swr'
import { axiosInstance } from '../../lib/api/axios'
import CharacterSheet from '../../components/CharacterSheet/CharacterSheet'
import styles from "../../styles/Sheet.module.css"
import { useCallback, useState } from 'react'
import { Character } from '../../lib/types/character'
import { Roll } from '../../lib/dice'


const getCharacterViaAPI = async (url: string): Promise<Character> => {
  const { data } = await axiosInstance.get(url)
  return data
}

function useCharacter() {
  const characterUrl = "/api/testCharacter"
  const { data, error } = useSWR(characterUrl, (url) => getCharacterViaAPI(url), {
    revalidateOnMount: true,
    revalidateOnReconnect: true,
    revalidateOnFocus: true,
  })
  return {
    character: data as Character,
    isLoading: !error && !data,
    isError: error
  }
}

const CharacterPage: NextPage = () => {

  const [rolls, setRolls] = useState<Roll[]>([]);
  const addRoll = useCallback((roll: Roll) => {
    setRolls([...rolls, roll]);
  }, [rolls])

  const { character, isLoading } = useCharacter()
  if (isLoading) return (<p>Loading...</p>)
  return (<>
    <div className={styles.container}>
      <CharacterSheet character={character} addRoll={addRoll} />
    </div>

    <div className={styles.box} >
      <ul>
        {rolls.map((roll) => (
          // eslint-disable-next-line react/jsx-key
          <li>{roll.value}</li>
        ))}
      </ul>
    </div>

  </>
  )
}
export default CharacterPage;