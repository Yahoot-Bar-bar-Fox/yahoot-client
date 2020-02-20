import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: []
  },
  mutations: {
    SET_ROOMS (state, payload) {
      state.rooms = payload
    }
  },
  actions: {
    fetchRooms ({commit}) {
      socket.emit('fetchRooms')
    },
    showRooms (context, payload) {
      context.commit('SET_ROOMS', payload)
    }
  },
  modules: {
  }
})
