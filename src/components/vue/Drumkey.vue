<script lang="ts">
  export default {
    props: {
      sound: String,
      note: String,
      key: Number,
    },
    data() {
      return {
        isPlaying: false
      }
    },
    emits: ['transition-ended'],
    methods: {
      onTransitionEnd() {
        this.isPlaying = false;
      },
      play() {
        this.isPlaying = true;
        this.$refs.audio.pause();
        this.$refs.audio.currentTime = 0;
        this.$refs.audio.play();
      }
    }
  }
</script>
<template>
  <div 
    :class="`key ${isPlaying ? 'playing' : ''}`" 
    @transitionend="onTransitionEnd()"
  >
    <kbd>{{note}}</kbd>
    <span class="sound">{{sound}}</span>
  </div>
  <audio ref="audio" :src="`sounds/${sound}.wav`"></audio>
</template>