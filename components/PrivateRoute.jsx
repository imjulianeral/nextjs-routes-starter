import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import Loading from './Loading'

export default function PrivateRoute(Component) {
  return () => {
    const isAuthenticated = true
    const loading = false
    const router = useRouter()

    useEffect(() => {
      if (loading) return <Loading />
      if (!isAuthenticated && !loading) router.push('/login')
    }, [loading, isAuthenticated])

    return <Component {...arguments} />
  }
}
