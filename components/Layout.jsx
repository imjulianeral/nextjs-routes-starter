import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Project Title | {router.pathname === '/' ? 'Home' : 'Login'}</title>
      </Head>

      <main>{children}</main>
    </>
  )
}
