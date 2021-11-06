import { createContext } from 'react'
import { LoginDto, LoginResponseDto, UserWithoutSensitiveData } from 'api/api'
import { UseMutateFunction } from 'react-query'

const AuthContext = createContext<{
  user?: UserWithoutSensitiveData | null
  signInWithEmail: UseMutateFunction<
    LoginResponseDto & { rememberMe: boolean },
    unknown,
    LoginDto & { rememberMe: boolean },
    unknown
  >
}>({
  user: null,
  signInWithEmail: () => {},
})

export default AuthContext
