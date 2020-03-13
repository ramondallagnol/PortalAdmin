import * as types from '../mutation-types'

const state = {
  main: [],
  brandEdit: {}
}

const mutations = {
  [types.FETCH_BRAND] (state, brands) {
    state.main = brands
  },
  [types.ADD_BRAND] (state, brand) {
    state.main.push(brand)
  },
  [types.DELETE_BRAND] (state, brand) {
    // remove do array
    state.main.splice(brand, 1)
  },
  [types.UPDATE_BRAND] (state, brand) {
    state.main.reduce(function (prevVal, elem, index, array) {
      if (elem.id === brand.id) {
        state.main[index] = brand
      }
    }, 0)
  },
  [types.UPDATE_BRAND_DESCRIPTION] (state, description) {
    state.main.reduce(function (prevVal, elem, index, array) {
      if (elem.description === brand.description) {
        state.main[index].description = description
      }
    }, 0)
  },
  [types.EDIT_BRAND] (state, brand) {
    state.brandEdit = brand
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions
}
