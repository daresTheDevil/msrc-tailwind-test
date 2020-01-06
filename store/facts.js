// @/store/facts.js

export const state = () => ({
  facts: []
})

export const mutations = {
  add(state, facts) {
    state.facts = facts
  }
}

export const actions = {
  add({ commit, facts, rootState }) {
    // const entities = rootState.state.entities.map((item) => item.EntityId)
    commit('add', facts)
  }
}

export const getters = {
  getFacts: (state) => {
    return state.facts
  }
}
