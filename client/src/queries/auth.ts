import { Api, Config } from 'api'
import { CreateUserDto, LoginDto } from 'api/api'
import storage from 'utils/storage'

export const fetchUserProfile = async () => {
  const accessToken = storage.get(import.meta.env.VITE_AUTH_TOKEN)
  if (accessToken) {
    const configOptions = new Config.Configuration({ accessToken })
    const authenticatedApiService = new Api.DefaultApi(configOptions)
    const { data } =
      await authenticatedApiService.userControllerFindCurrentUser()
    return data
  }
  return null
}

const configOptions = new Config.Configuration()
const apiService = new Api.DefaultApi(configOptions)

export const fetchUserProfileByEmail = async (loginDto: LoginDto) => {
  const { data } = await apiService.authControllerLogin(loginDto)
  return data
}

export const registerUserByEmail = async (createUserDto: CreateUserDto) => {
  const { data } = await apiService.authControllerCreateUser(createUserDto)
  return data
}
