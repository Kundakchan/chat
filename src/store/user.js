import firebase from 'firebase/app'

export default {
  state: {
    user: null
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = payload
    }
  },
  actions: {
    async SIGN_UP ({ commit }, payload) {
      commit('setProcessing', true)
      commit('clearError')
      try {
        const user = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        commit('setUser', user.user.uid)
      } catch (error) {
        commit('setError', error.message)
        throw error
      } finally {
        commit('setProcessing', false)
      }
    },
    async SIGN_IN ({ commit }, payload) {
      commit('setProcessing', true)
      commit('clearError')
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        commit('setUser', user.user.uid)
      } catch (error) {
        commit('setError', error.message)
        throw error
      } finally {
        commit('setProcessing', false)
      }
    },
    async LOGGED_USER ({ commit }, payload) {
      commit('setUser', payload.uid)
    },
    async LOG_OUT ({ commit }) {
      commit('setProcessing', true)
      commit('clearError')
      try {
        await firebase.auth().signOut()
        commit('setUser', null)
      } catch (error) {
        commit('setError', error.message)
        throw error
      } finally {
        commit('setProcessing', false)
      }
    }
  },
  getters: {
    getUser: state => state.user,
    checkUser: state => state.user !== null
  }
}
