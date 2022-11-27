import { useContext } from 'react'
import { CharacterContext } from '../context'
import styles from '../sheet.module.css'
export default function NameBox() {

  return (
    <div className={`${styles.cell} ${styles.characterInfoBox}`}>
      <p>Gender Race Class</p>
      <p>level </p>
    </div>
  )
}