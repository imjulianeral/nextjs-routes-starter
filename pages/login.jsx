import React from 'react'

import PublicRoute from '../components/PublicRoute'
import Layout from '../components/Layout'

import styles from '../styles/Home.module.css'

function Login() {
  return (
    <Layout>
      <h1 className={styles.title}>Login</h1>
    </Layout>
  )
}

export default PublicRoute(Login)
