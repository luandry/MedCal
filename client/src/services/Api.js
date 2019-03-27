import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: process.env.baseURL || 'http://localhost:8081/'
  })
}
