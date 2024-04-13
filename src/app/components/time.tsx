'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function Time({
  end_time
}: {
  end_time: Date;
}) {
  const [time, timeChange] = useState('03:00');
  const router = useRouter();
  const params = useParams();
  const pageId = params.id;

  const countDown = () => {
    const d = new Date(end_time.getTime() - Date.now());
    // const d = new Date(new Date('2024-04-13 11:58:00').getTime() - Date.now());
    const m = String(d.getMinutes()).padStart(2,'0');
    const s = String(d.getSeconds()).padStart(2,'0');

    if (d.getTime() <= 2000) {
      router.push(`/vote/${pageId}`)
    }
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