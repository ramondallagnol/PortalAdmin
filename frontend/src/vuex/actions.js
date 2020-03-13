import * as types from './mutation-types'
import { services } from './api'

export const fetchProduct = ({ commit }) => {
  // API request
  return services.products.getAll()
  .then((response) => {
    commit(types.FETCH_PRODUCT, response.data)
  })
  .catch((error) => {
    console.error(error)
  })
}

export const fetchBrand = ({ commit }) => {
  // API request
  return services.brands.getAll()
  .then((response) => {
    commit(types.FETCH_BRAND, response.data)
  })
  .catch((error) => {
    console.error(error)
  })
}

export const saveBrand = ({ commit }, payload) => {
  return services.brands.save(payload)
  .then((response) => {
    commit(types.ADD_BRAND, response.data)
  })
  .catch((error) => {
    console.error(error)
  })
}

export const deleteBrand = ({ commit }, payload) => {
  return services.brands.delete(payload)
  .then((response) => {
    commit(types.DELETE_BRAND, payload)
  })
  .catch((error) => {
    console.error(error)
  })
}

export const userAuth = ({ commit }, payload) => {
  return services.user.auth(payload)
  .then((response) => {
    localStorage.setItem('token', response.data.token)
    commit(types.SET_TOKEN, response.data.token)
    commit(types.SET_USER, response.data.user)
    return Promise.resolve(response.data)
  })
  .catch((error) => {
    return Promise.reject(error)
  })
}

export const userLogout = ({ commit }) => {
  return new Promise(resolve => {
    localStorage.removeItem('token')
    commit(types.SET_TOKEN, '')
    commit(types.SET_USER, '')
    resolve()
  })
}

export const getUser = ({ commit }, payload) => {
  return services.user.getUserByToken(payload)
  .then((response) => {
    commit(types.SET_USER, response.data.user)
    return Promise.resolve(response.data)
  })
  .catch((error) => {
    return Promise.reject(error)
  })
}

export const saveUser = ({ commit }, payload) => {
  return services.user.save(payload)
  .then((response) => {
    commit(types.ADD_USER, response.data)
    return Promise.resolve(response.data)
  })
  .catch((error) => {
    return Promise.reject(error.response.data.error)
  })
}

export const fetchUser = ({ commit }) => {
  return services.user.getAll()
  .then((response) => {
    commit(types.FETCH_USERS, response.data)
    return Promise.resolve(response.data)
  })
  .catch((error) => {
    return Promise.reject(error)
  })
}
