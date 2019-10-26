import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = () => ({
  widgets: [{ name: 'John', id: 1 },
    { name: 'Joao', id: 2 },
    { name: 'Jean', id: 3 },
    { name: 'Gerard', id: 4 }]
})

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
