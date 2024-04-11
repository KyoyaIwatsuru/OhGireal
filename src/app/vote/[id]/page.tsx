"use client";
import React, { useState } from 'react';
import type { NextPage } from 'next'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
interface OrderButtonProps {
    pageId:string|string[],
    index: number;
    entry: { name: string; answer: string };
    clickOrder: number[];
    setClickOrder: React.Dispatch<React.SetStateAction<number[]>>;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    currentPage: number;
  }

  const OrderButton: React.FC<OrderButtonProps> = ({
    pageId,
    index,
    entry,
    clickOrder,
    setClickOrder,
    setCurrentPage,
    currentPage
  }) => {
    const router = useRouter();
    const handleClick = () => {
      if (!clickOrder.includes(index)) {
        setClickOrder([...clickOrder, index]);
        if (clickOrder.length === 2) {
          if(currentPage==2){
            router.push('/wait_vote/'+pageId);
          }
          setCurrentPage((prevPage) => prevPage + 1);
          setClickOrder([]);
        }
      }
    };
  
    return (
      <button
        className="w-96 h-96 select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none rounded-3xl bg-gray-100 text-black shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:opacity-[0.85] active:shadow-none"
        onClick={handleClick}
      >
        <div className="flex flex-col">
          <div className="text-2xl mt-10">{entry.name}</div>
          <div className="text-2xl mt-10">{entry.answer}</div>
          {clickOrder.includes(index) && (
            <p className="text-2xl mt-10">{clickOrder.indexOf(index) + 1}</p>
          )}
        </div>
      </button>
    );
  };
  
  export default function Vote() {
    const [clickOrder, setClickOrder] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const urlParams=useParams()
    const pageId=urlParams.id
    const entries: { name: string; answer: string }[] = [
      { name: 'a', answer: 'hoge1' },
      { name: 'b', answer: 'hoge2' },
      { name: 'c', answer: 'hoge3' },
      { name: 'd', answer: 'hoge4' },
      { name: 'e', answer: 'hoge5' },
      { name: 'f', answer: 'hoge6' },
    ];
  
    const displayEntries = entries.slice((currentPage - 1) * 3, currentPage * 3);

  
    return (
      <>
        <div className="text-center mt-40">
          <div className="text-4xl">投票</div>
        </div>
  
        <div className="text-center text-2xl mt-20">順番にクリックして投票</div>
  
        <div className="flex justify-center gap-4 mt-20 mx-auto">
          {displayEntries.map((entry, index) => (
            <OrderButton
              pageId={pageId}
              key={index}
              index={index}
              entry={entry}
              clickOrder={clickOrder}
              setClickOrder={setClickOrder}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          ))}
        </div>
      </>
    );

  }
  
  