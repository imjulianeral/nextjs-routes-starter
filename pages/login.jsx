import React from 'react'
import Head from 'next/head'
import PublicRoute from '../components/PublicRoute'

import styles from '../styles/Home.module.css'

function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <h1 className={styles.title}>Login</h1>
    </>
  )
}

export default PublicRoute(Login)
