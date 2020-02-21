<template>
  <div class="container" style="margin-top: 80px">
    <div class="card text-center">
      <div class="card-header ">
        <h1 class="my-0 font-weight-normal">Your Points: {{ points }}</h1>
      </div>
      <div class="card-body">
        <div class="container">
          <div class="card">
            <div class="card-header ">
              Question:
            </div>
            <div class="card-body">
              <p class="card-text">
                {{ question }}
              </p>
            </div>
          </div>

          <br />
          <form @submit.prevent="submitAnswer">
            <div class="row">
              <div class="col-lg-11">
                <input
                  type="text"
                  class="form-control input-lg"
                  id="search-church"
                  placeholder="Your answer"
                />
              </div>
              <div class="col-lg-1">
                <button type="submit" class="btn btn-primary mb-2">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import io from '../socket/socketConnect'

export default {
  name: 'GamePlay',
  data: function() {
    return {
      points: 0,
      question: 'This is the question'
    }
  },
  methods: {
    submitAnswer() {
      // call the socket io
    }
  }
}
</script>

<style></style>
