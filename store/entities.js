// @/store/auth.js

export const state = () => ({
  entities: []
})

export const mutations = {
  add(state, entities) {
    state.entities = entities
  }
}

export const actions = {
  add({ commit, entities }) {
    console.log('entities', entities)
    commit('add', entities)
  }
}

export const getters = {
  getEntities: (state) => {
    return state.entities
  }
}
