<script>
  let spacing = 10;
  let blur = 10;
  let color = '#ffc600';

  const doc = document.documentElement;

  $: doc.style.setProperty(`--spacing`, `${spacing}px`);
  $: doc.style.setProperty(`--blur`, `${blur}px`);
  $: doc.style.setProperty(`--base`, color);
</script>

<h2>Update CSS Variables with <span class="hl">JS</span></h2>
<div class="controls">
  <label for="spacing">Spacing:</label>
  <input id="spacing" type="range" min="10" max="200" bind:value={spacing} />
  <label for="blur">Blur:</label>
  <input id="blur" type="range" min="0" max="25" bind:value={blur} />
  <label for="base">Base Color</label>
  <input id="base" type="color" bind:value={color} />
</div>

<img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" alt="square" />
