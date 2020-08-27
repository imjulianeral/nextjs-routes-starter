import Head from 'next/head'
import PrivateRoute from '../components/PrivateRoute'

import styles from '../styles/Home.module.css'

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={styles.title}>Hi</h1>
    </>
  )
}

export default PrivateRoute(Home)
