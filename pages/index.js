import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HeroSection from '../src/components/hero/hero';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Sarthak Jain</title>
        <meta name="description" content="sarthak's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

            {/* Hero section */}

            <HeroSection />

       </main>
       </div>
  )
}
