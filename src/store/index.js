import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client'
// const socket = io.connect('http://localhost:3000')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    room: {},
    playingStatus: false,
    socket: io.connect("http://localhost:3000")
  },
  mutations: {
    SET_ROOMS (state, payload) {
      state.rooms = payload
    },
    JOIN_ROOM(state, payload) {
      state.room = payload
    },
    SET_PLAYING_STATUS(state, payload) {
      state.playingStatus = payload
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
    },
    isPLaying(context, payload) {
      context.commit('SET_PLAYING_STATUS', payload)
    }
  },
  modules: {
  }
})
