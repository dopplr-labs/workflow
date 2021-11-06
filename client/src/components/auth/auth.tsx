import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from 'contexts/auth-context'
import {
  fetchUserProfile,
  fetchUserProfileByEmail,
  registerUserByEmail,
} from 'queries/auth'
import storage from 'utils/storage'
import { CreateUserDto, LoginDto, UserWithoutSensitiveData } from 'api/api'

type AuthProps = {
  children: React.ReactNode
}

export default function Auth({ children }: AuthProps) {
  const navigate = useNavigate()
  const [authVerified, setAuthVerified] = useState(false)
  const [user, setUser] = useState<UserWithoutSensitiveData | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await fetchUserProfile()
        setUser(user)
      } catch (err) {
        storage.remove(import.meta.env.VITE_AUTH_TOKEN)
        navigate('/login', { replace: true })
      } finally {
        setAuthVerified(true)
      }
    }
    fetchUser()
  }, [])

  const signInWithEmail = useCallback(
    async ({ rememberMe, ...loginDto }: LoginDto & { rememberMe: boolean }) => {
      try {
        const { user, token } = await fetchUserProfileByEmail(loginDto)
        if (rememberMe) {
          storage.set(import.meta.env.VITE_AUTH_TOKEN, token)
        }
        setUser(user)
      } catch (err) {}
    },
    [],
  )

  const signUpWithEmail = useCallback(async (createUserDto: CreateUserDto) => {
    const { user, token } = await registerUserByEmail(createUserDto)
    setUser(user)
    storage.set(import.meta.env.VITE_AUTH_TOKEN, token)
  }, [])

  if (!authVerified) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <p>Verifying User...</p>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ user, signInWithEmail, signUpWithEmail }}>
      {children}
    </AuthContext.Provider>
  )
}
