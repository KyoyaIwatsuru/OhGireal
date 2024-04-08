"use client";
import React, { useState } from 'react';

interface OrderButtonProps {
    id: number;
    clickOrder: number[];
    setClickOrder: React.Dispatch<React.SetStateAction<number[]>>;
  }

const OrderButton: React.FC<OrderButtonProps> = ({ id, clickOrder, setClickOrder }) => {
    const handleClick = () => {
      if (!clickOrder.includes(id)) {
        setClickOrder([...clickOrder, id]);
      }
    };
    return (
        <button className="w-96 h-96 select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none rounded-3xl bg-gray-100 text-black shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 
        focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" onClick={handleClick}>
            <div className="flex flex-col">
                <div className="text-2xl mt-10">
                    ユーザー名
                </div>
                <div className="text-2xl mt-10">
                    パンだ
                </div>
                <div>
                {clickOrder.includes(id) && (
                <p className="text-2xl mt-10">{clickOrder.indexOf(id) + 1}</p>
                )}
                </div>
            </div>
        </button>
    );
  };
  
export default function vote() {
    const [clickOrder, setClickOrder] = useState<number[]>([]);
    return(
        <>
        <div className="text-center  mt-40">
            <div className="text-4xl">
                投票
            </div>
        </div>

        <div className="text-center text-2xl mt-20">
            順番にクリックして投票
        </div>
        
        <div className="flex justify-center gap-4 mt-20 mx-auto">
            <OrderButton id={1} clickOrder={clickOrder} setClickOrder={setClickOrder} />
            <OrderButton id={2} clickOrder={clickOrder} setClickOrder={setClickOrder} />
            <OrderButton id={3} clickOrder={clickOrder} setClickOrder={setClickOrder} />
        </div>
        
        
        </>
    );
     
  }
  
  