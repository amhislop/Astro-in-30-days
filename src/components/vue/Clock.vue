<script lang="ts">
export default {
  data() {
    const now = new Date();
    return {
      time: this.getDegrees(now),
      interval: null
    }
  },
  methods: {
    setDate() {
      const now = new Date();
      this.time = this.getDegrees(now);
    },
    getDegrees(date) {
      const seconds = date.getSeconds();
      const mins = date.getMinutes();
      const hour = date.getHours();

      return {
        secondsDegrees: ((seconds / 60) * 360) + 90,
        minsDegrees: ((mins / 60) * 360) + ((seconds / 60) * 6) + 90,
        hourDegrees: ((hour / 12) * 360) + ((mins / 60) * 30) + 90
      };
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.setDate();
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval);
    this.interval = null;
  }
}
</script>
<template>
  <div class="clock">
    <div class="clock-face">
      <div class="hand hour-hand" :style="`transform: rotate(${time.secondsDegrees}deg)`"></div>
      <div class="hand min-hand" :style="`transform: rotate(${time.minsDegrees}deg)`"></div>
      <div class="hand second-hand" :style="`transform: rotate(${time.hourDegrees}deg)`"></div>
    </div>
  </div>
</template>