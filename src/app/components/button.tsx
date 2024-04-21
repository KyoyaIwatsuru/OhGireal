'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { Button } from "@material-tailwind/react";
import { OrderButtonProps } from "@/app/lib/definitions";
import { updateSum } from '@/app/lib/actions';

export function Start() {
  return (
    <div className='flex'>
      <Button size="lg"className="mx-auto mt-[5%]" color='gray' placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>はじめる</Button>
    </div>
  );
}

export function Home() {
  return (
    <div className='flex mt-[15%]'>
      <Button size="lg"className="mx-auto mt-[5%]" color='gray' placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>HOME</Button>
    </div>
  );
}

export function Form({
  param,
  themes
}: {
  param: string,
  themes: {id: number, theme: string, start_time: Date, end_time: Date, vote_time: Date}
}) {
  const params = useParams();
  const pageId = params.id;
  const pathName = usePathname();
  const [time, setTime] = useState(1);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (pathName === `/answer`) {
        setTime(themes.end_time.getTime() - Date.now());
      } else if (pathName === `/vote/${pageId}`) {
        setTime(themes.vote_time.getTime() - Date.now());
      }
    }, 1000);
    return () => {
      clearTimeout(timeoutId)
    };
  }, [time]);

  if (time <= 0) {
    if (pathName === `/answer`) {
      return (
        <Link href="/time_up">
          <Button size='lg' className="mx-auto" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>{param}</Button>
        </Link>
      );
    } else {
      return (
        <></>
      );
    }
  } else {
    return (
      <div className="flex mt-[5%]">
        <Button type="submit" size='lg' className="mx-auto" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>{param}</Button>
      </div>
    );
  }
}

const OrderButton: React.FC<OrderButtonProps> = ({
  index,
  entry,
  num,
  currentPage,
  setCurrentPage,
  clickOrder,
  setClickOrder,
  rank,
  setRank,
  flag,
  setFlag
}) => {
  const handleClick = () => {
    if (num < 12) {
      const card = 3
      if (!clickOrder.includes(index)) {
        setClickOrder([...clickOrder, index]);
        setRank([...rank, {id: entry.id, rank: clickOrder.length + 1}]);
        if (clickOrder.length === card - 1 || rank.length === num - 1) {
          setCurrentPage((prevPage) => prevPage + 1);
          if(rank.length === num - 1) {
            setFlag(true);
          }
          setClickOrder([]);
        }
      }
    } else {
      const card = 3
      const frequency = 4
      if (!clickOrder.includes(index)) {
        setClickOrder([...clickOrder, index]);
        setRank([...rank, {id: entry.id, rank: clickOrder.length + 1}]);
        if (clickOrder.length === card - 1) {
          setCurrentPage((prevPage) => prevPage + 1);
          if(currentPage === frequency) {
            setFlag(true);
          }
          setClickOrder([]);
        }
      }
    }
  }

  return (
    <button
      className="w-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none rounded-3xl bg-gray-100 text-black shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      onClick={handleClick}
    >
      <div className="flex flex-col">
        <div className="text-2xl mt-4 text-center border-b border-black border-solid border-opacity-30">{entry.name}</div>
        <div className="text-2xl mt-4 mb-4 text-center">{entry.answer}</div>
        {clickOrder.includes(index) && (
          <p className="text-xl mt-4 mb-4">{clickOrder.indexOf(index) + 1}番</p>
        )}
      </div>
    </button>
  );
};

function randomSelect(array: {id: number, name: string, answer: string}[], num: number) {
  let newArray = [];

  while(newArray.length < num && array.length > 0) {
    const rand = Math.floor(Math.random() * array.length);
    newArray.push(array[rand]);
    array.splice(rand, 1);
  }

  return newArray;
}

export function Vote({id,
  entries,
  pageId,
  themes
}: {
  id: number,
  entries: {id: number, name: string, answer: string }[],
  pageId: string,
  themes: {id: number, theme: string, start_time: Date, end_time: Date, vote_time: Date}
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [clickOrder, setClickOrder] = useState<number[]>([]);
  const [selectEntries, setSelectEntries] = useState<{id: number, name: string, answer: string }[]>([]);
  const [rank, setRank] = useState<{id: number, rank: number}[]>([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const others = entries.filter(entry => entry.id !== id)
    setSelectEntries(randomSelect(others, 12));
  }, []);
  const num = selectEntries.length;
  const displayEntries = selectEntries.slice((currentPage - 1) * 3, currentPage * 3);
  const updateSumWithId = updateSum.bind(null, rank, pageId);

  if (num === 0) {
    return (
      <>
        <div className='pt-[2%] text-2xl'>
          参加者はあなたのみです。
        </div>
        <Link href="/">
          <Home />
        </Link>
      </>
    )
  } else {
    return (
      <>
        <div className="flex flex-col items-center gap-4 mt-[10%] mx-auto w-[80%]">
          {displayEntries.map((entry, index) => (
            <OrderButton
              key={index}
              index={index}
              entry={entry}
              num={num}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              clickOrder={clickOrder}
              setClickOrder={setClickOrder}
              rank={rank}
              setRank={setRank}
              flag={flag}
              setFlag={setFlag}
            />
          ))}
        </div>
        { flag && 
          <form action={updateSumWithId}>
            <Form param="投票" themes={themes}/>
          </form>
        }
      </>
    );
  }
}