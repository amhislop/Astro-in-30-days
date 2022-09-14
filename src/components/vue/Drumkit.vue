<script lang="ts">
import Drumkey from './Drumkey.vue';

const keys = [
  { key: "65", note: "A", sound: "clap" },
  { key: "83", note: "S", sound: "hihat" },
  { key: "68", note: "D", sound: "kick" },
  { key: "70", note: "F", sound: "openhat" },
  { key: "71", note: "G", sound: "boom" },
  { key: "72", note: "H", sound: "ride" },
  { key: "74", note: "J", sound: "snare" },
  { key: "75", note: "K", sound: "tom" },
  { key: "76", note: "L", sound: "tink" },
];

export default {
  data() {
    return {keys};
  },
  created() {
    window.addEventListener('keydown', (e) => {
      this.$refs[e.keyCode][0].play();
    });
  },
  components: { Drumkey }
}
</script>

<template>
  <div class="keys">
    <Drumkey 
      v-for="key in keys"
      :ref="key.key"
      :key="parseInt(key.key)"
      :sound="key.sound"
      :note="key.note"
    />
  </div>
</template>