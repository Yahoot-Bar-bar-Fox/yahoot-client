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
    socket: io.connect("http://localhost:3000"),
    highestScore: {
      username: 'Bodoh semua ga ada yang bener',
      score: 0
    }
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
    },
    SET_HIGHEST_SCORE (state, payload) {
      if (payload.score > state.highestScore.score) {
        state.highestScore = payload
      }
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
    },
    setHighestScore (context, payload) {
      context.commit('SET_HIGHEST_SCORE', payload)
    }
  },
  modules: {
  }
})
