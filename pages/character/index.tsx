import useSWR from 'swr'
import { axiosInstance } from '../../lib/api/axios'
import CharacterSheet from '../../components/CharacterSheet/CharacterSheet'
import styles from "../../styles/Sheet.module.css"
import { useCallback, useState } from 'react'
import { Campaign, Character } from '../../lib/types/character'
import { Roll } from '../../lib/dice'
import { GetServerSideProps, NextPage } from 'next'

type Props = {
  character: Character;
  campaign: Campaign;
}

const getCharacterViaAPI = async (url: string): Promise<Character> => {
  const { data } = await axiosInstance.get(url)
  return data
}

const getCampaignViaAPI = async (url: string): Promise<Campaign> => {
  const { data } = await axiosInstance.get(url)
  return data
}

export const getServerSideProps: GetServerSideProps = async () => {
  const campaignUrl = "/api/campaign"
  const characterUrl = "/api/testCharacter"
  const [character, campaign] = await Promise.all([getCharacterViaAPI(characterUrl), getCampaignViaAPI(campaignUrl)])
  return {
    props: {
      character: character,
      campaign: campaign,
    }
  }
}

const CharacterPage: React.FC<Props> = (props: Props) => {

  const [rolls, setRolls] = useState<Roll[]>([]);
  const addRoll = useCallback((roll: Roll) => {
    setRolls([...rolls, roll]);
  }, [rolls])

  return (<>
    <div className={styles.container}>
      <CharacterSheet campaign={props.campaign} character={props.character} addRoll={addRoll} />
    </div>

    <div className={styles.box} >
      <ul>
        {rolls.map((roll) => (
          // eslint-disable-next-line react/jsx-key
          <li>{roll.dice} {roll.value}</li>
        ))}
      </ul>
    </div>

  </>
  )
}
export default CharacterPage;