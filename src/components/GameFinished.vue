<template>
  <div class="container" style="margin-top: 80px">
    <div class="card text-center">
      <div class="card-header ">
        <h3 class="my-0 font-weight-normal">The winner is.... {{theWinner.username}}</h3>
      </div>
      <div class="card-body">
        <div class="container">
          <h1>score: {{ theWinner.score }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameFinished',
  props: ['points'],
  data: function() {
    return {
      playerName: localStorage.username
    }
  },
  computed: {
    socket() {
      return this.$store.state.socket
    },
    theWinner () {
      return this.$store.state.highestScore
    }
  }
}
</script>

<style></style>
