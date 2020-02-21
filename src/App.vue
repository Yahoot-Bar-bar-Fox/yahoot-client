<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import sincan from '../src/sound/success.mp3'

export default {
  name: 'Player',
  created() {
    const audio = new Audio(sincan)
    audio.play()
  }
}
</script>
