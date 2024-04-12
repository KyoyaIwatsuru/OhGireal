'use client'
import { useParams } from 'next/navigation'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

//APIできるまでのやつ
function CheckID(pageId:string|string[]){
  return true;//404    
}
// import { SVGProps } from 'react';
export default function Result() {
  const urlParams=useParams()
  const pageId=urlParams.id
  const isIdValid=CheckID(pageId)
  if(isIdValid==true){
    return (
      <div className="flex justify-center items-center h-screen bg-[#ffcc33] text-black">
        <div className="max-w-2xl w-full">
          <div className="text-4xl font-black text-center mb-12">
            パンダがカフェで注文する料理は？
          </div>
          <div className="max-w-2xl w-full flex justify-center">
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <div className="max-w-2xl w-full flex justify-center">
          <div className="flex justify-center items-center">
              <div className="inline-block bg-[#f2eef3] text-black px-4 py-2 rounded w-full text-2xl">
              <div className="text-3xl">パンダパンダパンダ</div>
              </div>
            </div>
          </div>
          {/* <div className="max-w-2xl w-full flex justify-center">
            <MdiHumanHandsup/>
          </div> */}
          <div className="max-w-2xl w-full flex justify-center mb-8">
            <div className="text-2xl">きょうや</div>
          </div>
          <div className="max-w-2xl w-full flex justify-between">
            <div>
              {/* <div className="max-w-2xl w-full flex justify-center">
                <FluentEmojiHighContrast2ndPlaceMedal/>
              </div> */}
              <div className="flex justify-center items-center">
                  <div className="inline-block bg-[#f2eef3] text-black px-4 py-2 rounded w-full text-2xl">
                  <div className="text-xl">パンダパンダパンダ</div>
                  </div>
              </div>
              {/* <div className="max-w-2xl w-full flex justify-center">
                <MdiHumanHandsup/>
              </div> */}
              <div className="max-w-2xl w-full flex justify-center mb-8">
                <div className="text-xl">たくま</div>
              </div>
            </div>
            <div>
              {/* <div className="max-w-2xl w-full flex justify-center">
                <FluentEmojiHighContrast3rdPlaceMedal/>
              </div> */}
              <div className="flex justify-center items-center">
                  <div className="inline-block bg-[#f2eef3] text-black px-4 py-2 rounded w-full text-2xl">
                  <div className="text-xl">パンダパンダパンダ</div>
                  </div>
              </div>
              {/* <div className="max-w-2xl w-full flex justify-center">
                <MdiHumanHandsup/>
              </div> */}
              <div className="max-w-2xl w-full flex justify-center mb-8">
                <div className="text-xl">あらた</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-8 mt-8">
            <div className="text-2xl">あなたの順位</div>
            <div className="text-2xl">５位</div>
          </div> 
        </div>
      </div>
    );
  }else{
    return (
      <div>
        <h1>404 NotFound</h1>
        <p>ページが見つかりませんでした。</p>
      </div>
    );
  }
}
