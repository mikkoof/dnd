import type { NextPage } from 'next'
import Head from 'next/head'
import router from 'next/router';
import { useCallback, useState } from 'react';
import RollBox from '../components/RollBox';
import { die, Roll } from '../lib/dice';
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  const [rolls, setRolls] = useState<Roll[]>([]);
  const addRoll = useCallback((roll: Roll) => {
    setRolls([...rolls, roll]);
  }, [rolls])

  return (
    <div className={styles.container}>
      <Head>
        <title>DND calculator</title>
        <meta name="description" content="NextJs app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}> Welcome to DND calculator </h1>


        <div className={styles.grid}>
          <div className={styles.box}>
            <p>Start by rolling a d20</p>
            <RollBox bonus={2} die={[die.D20]} addRoll={addRoll} />
          </div>
          <div className={styles.box}>
            <ul>
              {rolls.map((roll) => (
                // eslint-disable-next-line react/jsx-key
                <li>{roll.value}</li>
              ))}
            </ul>
          </div>
          <div className={styles.card} onClick={() => router.push('/character')}>
            To test character sheet
          </div>
        </div>
      </main>
    </div>
  )
};

