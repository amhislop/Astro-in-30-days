import react, { useEffect, useState } from 'react';

export default () => {

  const [spacing, setSpacing] = useState(10);
  const [blur, setBlur] = useState(10);
  const [color, setColor] = useState('#ffc600');

  useEffect(() => {
    document.documentElement.style.setProperty(`--spacing`, `${spacing}px`);
  }, [spacing]);

  useEffect(() => {
    document.documentElement.style.setProperty(`--blur`, `${blur}px`);
  }, [blur]);

  useEffect(() => {
    document.documentElement.style.setProperty(`--base`, color);
  }, [color]);

  return (
    <>
      <h2>
        Update CSS Variables with <span className='hl'>JS</span>
      </h2>
      <div className='controls'>
        <label htmlFor='spacing'>Spacing:</label>
        <input
          id='spacing'
          type='range'
          name='spacing'
          min='10'
          max='200'
          value={spacing}
          onChange={(e) => setSpacing(e.target.value)}
          onMouseMove={(e) => setSpacing(e.target.value)}
        />
        <label htmlFor='blur'>Blur:</label>
        <input
          id='blur'
          type='range'
          name='blur'
          min='0'
          max='25'
          value={blur}
          onChange={(e) => setBlur(e.target.value)}
          onMouseMove={(e) => setBlur(e.target.value)}
        />
        <label htmlFor='base'>Base Color</label>
        <input
          id='base'
          type='color'
          name='base'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          onMouseMove={(e) => setColor(e.target.value)}
        />
      </div>
      <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
    </>
  );
};
