<script lang="ts">
export default {
  data() {
    return {
      spacing: '10',
      blur: '10',
      color: '#ffc600'
    }
  },
  watch: {
    spacing(newSpacing: string) {
      document.documentElement.style.setProperty(`--spacing`, `${newSpacing}px`);
    },
    blur(newBlur: string) {
      document.documentElement.style.setProperty(`--blur`, `${newBlur}px`);
    },
    color(newColor: string) {
      document.documentElement.style.setProperty(`--base`, newColor);
    },
  }
}
</script>
<template>
  <h2>Update CSS Variables with <span class='hl'>JS</span></h2>
  <div class="controls">
    <label for="spacing">Spacing:</label>
    <input id="spacing" type="range" min="10" max="200" v-model="spacing">

    <label for="blur">Blur:</label>
    <input id="blur" type="range" name="blur" min="0" max="25" v-model="blur">

    <label for="base">Base Color</label>
    <input id="base" type="color" name="base" :value="color" @input="event => color = event.target.value">
  </div>
  <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500">
</template>