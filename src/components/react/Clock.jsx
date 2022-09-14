import react, { useEffect, useRef, useState } from 'react';

export default () => {
  const intervalRef = useRef(null);
  const [{ seconds, mins, hour }, setHands] = useState({
    seconds: 0,
    mins: 0,
    hour: 0,
  });

  const setDate = () => {
    const now = new Date();
    setHands({
      seconds: now.getSeconds(),
      mins: now.getMinutes(),
      hour: now.getHours(),
    });
  };

  useEffect(() => {
    setDate();
    intervalRef.current = setInterval(setDate, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, []);

  return (
    <div className='clock'>
      <div className='clock-face'>
        <div
          className='hand hour-hand'
          style={{ transform: `rotate(${(seconds / 60) * 360 + 90}deg)` }}
        />
        <div
          className='hand min-hand'
          style={{
            transform: `rotate(${(mins / 60) * 360 + (seconds / 60) * 6 + 90
              }deg)`,
          }}
        />
        <div
          className='hand second-hand'
          style={{
            transform: `rotate(${(hour / 12) * 360 + (mins / 60) * 30 + 90
              }deg)`,
          }}
        />
      </div>
    </div>
  );
};
