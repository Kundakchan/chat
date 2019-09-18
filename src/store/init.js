import firebase from 'firebase/app'
import confFirebase from '@/config/firebase'

export default {
  state: {

  },
  mutations: {

  },
  actions: {
    async INIT ({ commit, dispatch }) {
      commit('setProcessing', true)
      commit('clearError')
      try {
        firebase.initializeApp(confFirebase)
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            dispatch('LOGGED_USER', user)
          }
          commit('setProcessing', false)
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setProcessing', false)
      }
    }
  },
  getters: {

  }
}
