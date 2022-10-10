import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import RollBox from '../components/RollBox';
import { die } from '../lib/dice';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
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
          <div className={styles.card}>
            <p>Start by rolling a d20</p>
            <RollBox bonus={2} die={[die.D4]} />
          </div>
        </div>
      </main>
    </div>
  )
};


export default Home