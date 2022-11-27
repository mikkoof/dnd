import styles from '../sheet.module.css'
export default function HealthBox() {

  return (
    <div className={`${styles.cell} ${styles.healthBox}`}>
      <div className={styles.healthInput}>
        <button>+</button>
        <input />
        <button>-</button>
      </div>
      <div className={styles.health}>
        <div className={styles.maxHealth}>
          <p>Maximum hitpoints: </p><input></input>
        </div>
        <div className={styles.currentHealth}>
          <div className={`${styles.cell}`} ></div>
          <h3>Current hitpoints</h3>
        </div>
      </div>
    </div >
  )
}