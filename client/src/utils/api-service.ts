import { Api, Config } from 'api'
import storage from './storage'

const configOptions = new Config.Configuration({
  accessToken: storage.get(import.meta.env.VITE_AUTH_TOKEN) ?? '',
})
const apiService = new Api.DefaultApi(configOptions)

export default apiService
