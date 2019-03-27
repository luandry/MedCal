import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://sweng-30-medcal.herokuapp.com' || 'http://localhost:8081/'
  })
}
