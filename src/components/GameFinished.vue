<template>
  <div class="container" style="margin-top: 80px">
    <div class="card text-center">
      <div class="card-header ">
        <h1 class="my-0 font-weight-normal">Username: {{playerName}}</h1>
      </div>
      <div class="card-body">
        <div class="container">
          <h1>your score: {{ points }}</h1>
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
    }
  }
}
</script>

<style></style>
