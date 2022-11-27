import CharacterIconBox from './(components)/characterIconBox'
import CharacterInfoBox from './(components)/characterInfoBox'
import HealthBox from './(components)/healthBox'
import NameBox from './(components)/nameBox'
import styles from './sheet.module.css'

export default function Sheet() {
  return (
    <div className={styles.sheet}>
      {/* header */}
      <CharacterIconBox />
      <NameBox />
      <CharacterInfoBox />
      <HealthBox />
    </div>
  )
}
