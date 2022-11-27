import NameBox from './nameField'
import styles from './sheet.module.css'

export default function Sheet() {
  return (
    <div className={styles.sheet}>
      <NameBox />
    </div>
  )
}
