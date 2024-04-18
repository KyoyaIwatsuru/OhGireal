'use client'

import { useState, useEffect } from 'react';
import { usePathname, useParams, useRouter } from 'next/navigation';

export default function Time({
  themes
}: {
  themes: {
    id: number;
    theme: string;
    start_time: Date;
    end_time: Date;
    vote_time: Date;
  };
}) {
  const [time, setTime] = useState('00:00');
  const router = useRouter();
  const params = useParams();
  const pageId = params.id;
  let pathName = usePathname();
  const [date , setDate] = useState(new Date());

  const countDown = () => {
    let difference = 0;
    console.log(new Date(), Date.now());
    setDate(new Date());
    if (pathName === `/answer` || pathName === `/wait_answer/${pageId}`) {
      difference = themes.end_time.getTime() - Date.now();
      console.log(themes.start_time, themes.start_time.getTime());
    } else if (pathName === `/vote/${pageId}` || pathName === `/wait_vote/${pageId}`) {
      difference = themes.vote_time.getTime() - Date.now();
      console.log(themes.end_time, themes.end_time.getTime());
    }
    const d = new Date(difference);
    const m = String(d.getMinutes()).padStart(2,'0');
    const s = String(d.getSeconds()).padStart(2,'0');

    if (difference <= 0) {
      setTime('00:00');
      if (pathName === `/answer`) {
        router.push(`/time_up`)
      } else if (pathName === `/wait_answer/${pageId}`) {
        console.log('push to vote')
        router.push(`/vote/${pageId}`)
      } else if (pathName === `/vote/${pageId}` || pathName === `/wait_vote/${pageId}`) {
        setTimeout(() => {
          console.log('push to result')
          router.push(`/result/${pageId}`)
        }, 3000);
      }
    } else {
      setTime(`${m}:${s}`);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(countDown, 1000);
    return () => {
      clearTimeout(timeoutId)
    };
  }, [time]);

  return (
    <div>
      {`現在時刻 ${date.toLocaleString()}`}
      <br />
      {`残り時間 ${time}`}
    </div>
  );
}