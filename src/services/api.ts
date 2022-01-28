import axios from 'axios'

const api = axios.create({
  baseURL: 'http://157.245.173.31',
})

api.interceptors.request.use(config => {
  config.headers = {
    authorization: '',
  }

  return config
})

export default api
