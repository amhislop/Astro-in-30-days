<script>
  import { onDestroy } from 'svelte';

  let now = new Date();

  $: secondsDegrees = (now.getSeconds() / 60) * 360 + 90;
  $: minsDegrees =
    (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6 + 90;
  $: hourDegrees =
    (now.getHours() / 12) * 360 + (now.getMinutes() / 60) * 30 + 90;

  const interval = setInterval(() => {
    now = new Date();
  }, 1000);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="clock">
  <div class="clock-face">
    <div
      class="hand hour-hand"
      style={`transform: rotate(${secondsDegrees}deg)`}
    />
    <div class="hand min-hand" style={`transform: rotate(${minsDegrees}deg)`} />
    <div
      class="hand second-hand"
      style={`transform: rotate(${hourDegrees}deg)`}
    />
  </div>
</div>
