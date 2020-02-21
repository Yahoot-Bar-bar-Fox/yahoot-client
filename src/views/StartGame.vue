<template>
  <div class="container" style="margin-top: 80px">
    <div class="card text-center">
      <div class="card-header ">
        <h1 class="my-0 font-weight-normal">Room Name Goes Here</h1>
      </div>
      <div class="card-body">
        <div class="container">
          <div class="row">
            <!-- Joined players goes here -->
            <Player />
          </div>
          <button
            :disabled="playerCount < 3"
            type="button"
            class="btn btn-lg btn-outline-primary"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Player from '../components/Player'
export default {
  name: 'StartGame',
  components: {
    Player
  },
  data: function() {
    return {
      playerCount: 0
    }
  },
  created () {
    // socket.emit LANJUT SINIIIIIIIIIIIIIIIIIIIIII
  }
}
</script>

<style>
</style>
