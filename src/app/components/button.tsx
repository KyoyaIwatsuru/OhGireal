'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@material-tailwind/react";
import { OrderButtonProps } from "@/app/lib/definitions";

export function Start() {
  return (
    <div className='flex'>
      <Button size="lg"className="mx-auto mt-[5%]" color='gray' placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>はじめる</Button>
    </div>
  );
}

export function Form() {
  return (
    <div className="flex mt-[2%]">
      <Button type="submit" className="mx-auto" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>投稿</Button>
    </div>
  );
}

const OrderButton: React.FC<OrderButtonProps> = ({
  index,
  pageId,
  entry,
  currentPage,
  setCurrentPage,
  clickOrder,
  setClickOrder
}) => {
  const router = useRouter();
  const rank = 3
  const frequency = 3
  const handleClick = () => {
    if (!clickOrder.includes(index)) {
      setClickOrder([...clickOrder, index]);
      if (clickOrder.length === rank - 1) {
        if(currentPage === frequency) {
          router.push(`/wait_vote/${pageId}`);
        }
        setCurrentPage((prevPage) => prevPage + 1);
        setClickOrder([]);
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

function randomSelect(array: {name: string, answer: string}[], num: number) {
  let newArray = [];

  while(newArray.length < num && array.length > 0)
  {
    // 配列からランダムな要素を選ぶ
    const rand = Math.floor(Math.random() * array.length);
    // 選んだ要素を別の配列に登録する
    newArray.push(array[rand]);
    // もとの配列からは削除する
    array.splice(rand, 1);
  }

  return newArray;
}

export function Vote({id, entries, pageId}: {id: number, entries: { name: string, answer: string }[], pageId: string}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [clickOrder, setClickOrder] = useState<number[]>([]);
  const [selectEntries, setSelectEntries] = useState<{ name: string, answer: string }[]>([]);

  useEffect(() => {
    setSelectEntries(randomSelect(entries.filter(n => n !== entries[id-1]), 12));
  }, []);
  const displayEntries = selectEntries.slice((currentPage - 1) * 3, currentPage * 3);

  return (
    <div className="flex flex-col items-center gap-4 mt-[10%] mx-auto w-[80%]">
      {displayEntries.map((entry, index) => (
        <OrderButton
          key={index}
          index={index}
          pageId={pageId}
          entry={entry}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          clickOrder={clickOrder}
          setClickOrder={setClickOrder}
        />
      ))}
    </div>
  );
}