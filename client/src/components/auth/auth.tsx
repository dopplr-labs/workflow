import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from 'contexts/auth-context'
import { fetchUserProfile, fetchUserProfileByEmail } from 'queries/auth'
import storage from 'utils/storage'
import { LoginDto, UserWithoutSensitiveData } from 'api/api'

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
        if (!user) {
          navigate('/login', { replace: true })
        }
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
    async ({
      email,
      password,
      rememberMe,
    }: LoginDto & { rememberMe: boolean }) => {
      try {
        const { user, token } = await fetchUserProfileByEmail({
          email,
          password,
        })
        if (rememberMe) {
          storage.set(import.meta.env.VITE_AUTH_TOKEN, token)
        }
        setUser(user)
      } catch (err) {}
    },
    [],
  )

  if (!authVerified) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <p>Verifying User...</p>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ user, signInWithEmail }}>
      {children}
    </AuthContext.Provider>
  )
}
