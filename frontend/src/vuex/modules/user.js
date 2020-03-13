import * as types from '../mutation-types'

const state = {
  main: {
    name: '',
    position: '',
    state: {
      color: '#3c763d',
      name: 'Online'
    },
    createdAt: new Date()
  },
  token: localStorage.getItem('token') || '',
  users: []
}

const mutations = {
  [types.SET_TOKEN] (state, token) {
    state.token = token
  },
  [types.SET_USER] (state, user) {
    const { login, createdAt } = user
    state.main.name = login
    state.main.createdAt = createdAt
  },
  [types.FETCH_USERS] (state, users) {
    state.users = users
  },
  [types.ADD_USER] (state, response) {
    state.users.push(response.user)
  }
}

export default {
  state,
  mutations
}
