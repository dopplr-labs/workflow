import axios from 'axios'
import { DefaultApi, Configuration } from 'api'
import storage from './storage'

const configOptions = new Configuration({
  accessToken: storage.get(import.meta.env.VITE_AUTH_TOKEN) ?? '',
})
const apiService = new DefaultApi(configOptions)

axios.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${storage.get(
      import.meta.env.VITE_AUTH_TOKEN,
    )}`
  }
  return config
})

export default apiService
