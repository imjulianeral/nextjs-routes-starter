import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Loading from './Loading'

export default function PublicRoute(Component) {
  return () => {
    const isAuthenticated = true
    const loading = false
    const router = useRouter()

    useEffect(() => {
      if (loading) return <Loading />
      if (isAuthenticated && !loading) router.push('/')
    }, [loading, isAuthenticated])

    return <Component {...arguments} />
  }
}
