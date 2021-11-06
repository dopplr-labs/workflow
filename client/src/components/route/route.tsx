import useAuthContext from 'hooks/use-auth-context'
import React from 'react'
import {
  Route as ReactRouterRoute,
  RouteProps as ReactRouterProps,
  Navigate,
} from 'react-router'

type RouteProps = ReactRouterProps & {
  isProtected?: boolean
}

export default function Route({ isProtected, ...routeProps }: RouteProps) {
  const { user } = useAuthContext()

  if (isProtected && !user) {
    return <Navigate to="/login" />
  }

  return <ReactRouterRoute {...routeProps} />
}
