import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    room: {}
  },
  mutations: {
    SET_ROOMS (state, payload) {
      state.rooms = payload
    },
    JOIN_ROOM(state, payload) {
      state.room = payload
    }
  },
  actions: {
    fetchRooms ({commit}) {
      socket.emit('fetchRooms')
    },
    showRooms (context, payload) {
      context.commit('SET_ROOMS', payload)
    },
    joinRoom (context, payload) {
      context.commit('JOIN_ROOM', payload)
    }
  },
  modules: {
  }
})
