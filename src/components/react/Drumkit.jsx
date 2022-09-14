import react, { useEffect, useRef, useState } from 'react';

const keyMap = [
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

const DrumKey = ({
  sound,
  note,
  id,
  pressed,
  onEnd
}) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    setPlaying(false);
  }

  useEffect(() => {

    if (pressed) {
      const audio = audioRef.current;

      if (!audio) return;

      setPlaying(true);

      audio.currentTime = 0;
      audio.play();
      onEnd();
    }
  }, [pressed])

  return (
    <>
      <div
        className={`key ${playing ? 'playing' : ''}`}
        onTransitionEnd={removeTransition}
      >
        <kbd>{note}</kbd>
        <span className="sound">{sound}</span>
      </div>

      <audio ref={audioRef} src={`/sounds/${sound}.wav`}></audio>
    </>
  )
}

export default () => {

  const [keyPressed, setKeyPressed] = useState(null);

  function setKey(e) {
    setKeyPressed(e.keyCode);
  }

  useEffect(() => {
    console.log('he')
    window.addEventListener('keydown', setKey);

    return () => {
      window.removeEventListener('keydown', setKey);
    }
  }, []);

  return (
    <div className='keys'>
      {keyMap.map(({ key: id, ...keyProps }) => (
        <DrumKey
          key={id}
          id={id}
          pressed={keyPressed == id}
          onEnd={() => setKeyPressed(null)}
          {...keyProps}
        />
      ))};
    </div>
  )
}