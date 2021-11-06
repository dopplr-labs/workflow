import React from 'react'
import useAuthContext from 'hooks/use-auth-context'
import { Navigate, useLocation } from 'react-router-dom'

type AuthLayoutProps = {
  component: React.ComponentType<any>
}

export default function AuthLayout({ component: Component }: AuthLayoutProps) {
  const { user } = useAuthContext()
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return <Component />
}
