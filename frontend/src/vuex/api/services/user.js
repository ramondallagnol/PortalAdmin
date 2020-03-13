import axios from 'axios'

export default {
  async auth (request) {
    return axios.post('http://localhost:3000/users/auth', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  async getUserByToken (request) {
    return axios.get('http://localhost:3000/users/token', { headers: { Authorization: `Bearer ${request.token}` } })
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  async save (request) {
    return await axios.post('http://localhost:3000/users', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  async getAll (request) {
    return axios.get('http://localhost:3000/users')
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  }
}
