<template>
  <div class="col-auto mb-3">
    <div class="card shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Player Name</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
  computed: {
    socket() {
      return this.$store.state.socket
    }
  }
}
</script>

<style></style>
