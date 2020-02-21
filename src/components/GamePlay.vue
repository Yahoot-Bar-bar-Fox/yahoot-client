<template>
  <div class="container" style="margin-top: 80px">
    <div class="card text-center" v-if="!endGame">
      <div class="card-header">
        <h1 class="my-0 font-weight-normal">Your Points: {{ points }}</h1>
      </div>
      <div class="card-body">
        <div class="container">
          <div class="card">
            <div class="card-header">Question:</div>
            <div class="card-body">
              <p class="card-text">{{ questionNow }}</p>
            </div>
          </div>

          <br />
          <form @submit.prevent="submitAnswer" class="mx-5">
            <div class="row">
              <div class="col-lg-11">
                <input
                  type="text"
                  class="form-control input-lg"
                  id="search-church"
                  placeholder="Your answer"
                  v-model="myAnswer"
                />
              </div>
              <div class="col-lg-1">
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <GameFinished v-if="endGame" :points='points'/>
  </div>
</template>

<script>
// import io from '../socket/socketConnect'
import GameFinished from '../components/GameFinished'

export default {
  name: "GamePlay",
  components: {
    GameFinished
  },
  data() {
    return {
      endGame: false,
      points: 0,
      questionIndex: 0,
      myAnswer: '',
      question: [
        {
          question: "bebek, bebek apa yang ga bisa jalan?",
          answer: "bebek dikunci stang"
        },
        {
          question: "makanan, makanan apa yang gede banget?",
          answer: "candy borobudur"
        }
      ]
    };
  },
  methods: {
    submitAnswer() {
      if (this.myAnswer == this.question[this.questionIndex].answer) {
        this.questionIndex ++
        if (this.questionIndex > this.question.length-1) {
          this.endGame = true
        }
        this.myAnswer = ''
        this.points += 10
      }
      else {
        console.log(`salah bodoh!`);
        this.myAnswer = ''        
      }
    }
  },
  computed: {
    socket() {
      return this.$store.state.socket;
    },
    questionNow () {
      return this.question[this.questionIndex].question
    }
  }
};
</script>

<style></style>
