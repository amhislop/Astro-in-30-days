<script>
  import DrumKey, { players } from './svelte/DrumKey.svelte';

  let keys = [
    { key: '65', note: 'A', sound: 'clap' },
    { key: '83', note: 'S', sound: 'hihat' },
    { key: '68', note: 'D', sound: 'kick' },
    { key: '70', note: 'F', sound: 'openhat' },
    { key: '71', note: 'G', sound: 'boom' },
    { key: '72', note: 'H', sound: 'ride' },
    { key: '74', note: 'J', sound: 'snare' },
    { key: '75', note: 'K', sound: 'tom' },
    { key: '76', note: 'L', sound: 'tink' },
  ];

  function onKeyPres(event) {
    if (players[event.keyCode]) {
      const audio = players[event.keyCode];

      audio.pause();
      audio.currentTime = 0;
      audio.play();
    }
  }
</script>

<div class="keys">
  {#each keys as key}
    <DrumKey key={key.key} note={key.note} sound={key.sound} />
  {/each}
</div>

<svelte:window on:keydown|preventDefault={onKeyPres} />
