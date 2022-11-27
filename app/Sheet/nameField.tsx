import styles from './sheet.module.css'

export default function NameBox() {
  return (
    <div className={`${styles.cell} ${styles.nameBox}`}>
      <p>Name:</p>
      <p>character name</p>
    </div>
  )
}
