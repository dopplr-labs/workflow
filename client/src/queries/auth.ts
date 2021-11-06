import { Api, Config } from 'api'
import { LoginDto } from 'api/api'
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

export const fetchUserProfileByEmail = async ({
  email,
  password,
}: LoginDto) => {
  const configOptions = new Config.Configuration()
  const apiService = new Api.DefaultApi(configOptions)
  const { data } = await apiService.authControllerLogin({
    email,
    password,
  })
  return data
}
