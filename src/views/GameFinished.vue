<template>
  <div class="container" style="margin-top: 80px">
    <div class="card text-center">
      <div class="card-header ">
        <h1 class="my-0 font-weight-normal">Highest Score: {{ points }}</h1>
      </div>
      <div class="card-body">
        <div class="container">
          <h1>Player Name: {{ playerName }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameFinished',
  data: function() {
    return {
      points: 0,
      playerName: null
    }
  },
}
</script>

<style></style>
