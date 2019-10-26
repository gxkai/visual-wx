import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = () => ({
  widgets: [{ name: 'Juan', id: 5 },
    { name: 'Edgard', id: 6 },
    { name: 'Johnson', id: 7 }],
  activeModules: ['1', '2', '3']
})

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
