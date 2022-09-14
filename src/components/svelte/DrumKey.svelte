<script context="module">
  const players = {};

  export { players };
</script>

<script>
  import { onMount } from 'svelte';

  export let sound;
  export let note;
  export let key;

  let player;
  let isPlaying = false;

  onMount(() => {
    players[key] = player;
  });

  function removeTransition(e) {
    if (e.propertyName !== 'transform' || !isPlaying) return;
    isPlaying = false;
  }
</script>

<div
  class={`key ${isPlaying ? 'playing' : ''}`}
  on:transitionend={removeTransition}
>
  <kbd>{note}</kbd>
  <span class="sound">{sound}</span>
</div>
<audio
  bind:this={player}
  on:play={() => {
    isPlaying = true;
  }}
  on:pause={() => {
    isPlaying = false;
  }}
  {key}
  src="sounds/{sound}.wav"
  play={true}
/>
