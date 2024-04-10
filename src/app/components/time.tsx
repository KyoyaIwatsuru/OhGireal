'use client'

import { useState, useEffect } from 'react';

export default function Time({
  end_time
}: {
  end_time: Date;
}) {
  const [time, timeChange] = useState('03:00');

  const countDown = () => {
    const d = new Date(end_time.getTime() - Date.now());
    const m = String(d.getMinutes()).padStart(2,'0');
    const s = String(d.getSeconds()).padStart(2,'0');

    timeChange(`${m}:${s}`);

    const timeoutId = setTimeout(() => {
      countDown();
    }, 1000);
  };

  useEffect(() => {
    countDown();
  }, []);

  return (
    <div>
      {`残り時間 ${time}`}
    </div>
  );
}