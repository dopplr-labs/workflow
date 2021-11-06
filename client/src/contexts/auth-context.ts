import { createContext } from 'react'
import { CreateUserDto, LoginDto, UserWithoutSensitiveData } from 'api/api'

type SignInCredentials = LoginDto & {
  rememberMe: boolean
}

const AuthContext = createContext<{
  user?: UserWithoutSensitiveData | null
  signInWithEmail: (credentials: SignInCredentials) => void
  signUpWithEmail: (credentials: CreateUserDto) => void
}>({
  user: null,
  signInWithEmail: () => {},
  signUpWithEmail: () => {},
})

export default AuthContext
