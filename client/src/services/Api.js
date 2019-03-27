import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: process.env.baseUrl || 'http://localhost:8081/'
  })
}
