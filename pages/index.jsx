import React from 'react'

import PrivateRoute from '../components/PrivateRoute'
import Layout from '../components/Layout'

import styles from '../styles/Home.module.css'

function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>Hi</h1>
    </Layout>
  )
}

export default PrivateRoute(Home)
