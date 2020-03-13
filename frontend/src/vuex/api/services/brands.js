import axios from 'axios'

export default {
  async getAll (request = {}) {
    return axios.get('http://localhost:3000/brands', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  async save (request) {
    return axios.post('http://localhost:3000/brands', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  async delete (request) {
    return axios.delete(`http://localhost:3000/brands/${request.brand_id}`)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  async update (request) {
    return axios.put(`http://localhost:3000/brands/${request.id}`, request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  }

}
