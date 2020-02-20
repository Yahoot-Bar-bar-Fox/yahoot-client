<template>
  <div class="col-auto mb-3">
    <div class="card shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Room Name</h4>
      </div>
      <div class="card-body">
        <p>Player Count : 1</p>

        <button
          @click="joinRoom"
          type="button"
          class="btn btn-lg btn-block btn-outline-primary"
        >
          Join
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomCard',
  methods: {
    joinRoom: function() {
      this.$router.push('/start')
    }
  }
}
</script>

<style></style>
