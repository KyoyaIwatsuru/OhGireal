'use client'
import { useParams } from 'next/navigation'
import React from 'react';
import type { SVGProps } from 'react';
export default function Result() {
  const urlParams=useParams()
  const pageId=urlParams.id
  return (
    <div className="flex justify-center items-center h-screen bg-[#ffcc33] text-black">
      <div className="max-w-2xl w-full">
        <div className="text-4xl font-black text-center mb-12">
          パンダがカフェで注文する料理は？
        </div>
        <div className="max-w-2xl w-full flex justify-center">
          <MdiCrown/>
        </div>
        <div className="max-w-2xl w-full flex justify-center">
        <div className="flex justify-center items-center">
            <div className="inline-block bg-[#f2eef3] text-black px-4 py-2 rounded w-full text-2xl">
            <div className="text-3xl">パンダパンダパンダ</div>
            </div>
          </div>
        </div>
        <div className="max-w-2xl w-full flex justify-center">
          <MdiHuman/>
        </div>
        <div className="max-w-2xl w-full flex justify-center mb-8">
          <div className="text-2xl">きょうや</div>
        </div>
        <div className="max-w-2xl w-full flex justify-between">
          <div>
            <div className="max-w-2xl w-full flex justify-center">
              <FluentEmojiHighContrast2ndPlaceMedal/>
            </div>
            <div className="flex justify-center items-center">
                <div className="inline-block bg-[#f2eef3] text-black px-4 py-2 rounded w-full text-2xl">
                <div className="text-xl">パンダパンダパンダ</div>
                </div>
            </div>
            <div className="max-w-2xl w-full flex justify-center">
              <MdiHuman/>
            </div>
            <div className="max-w-2xl w-full flex justify-center mb-8">
              <div className="text-xl">たくま</div>
            </div>
          </div>
          <div>
            <div className="max-w-2xl w-full flex justify-center">
              <FluentEmojiHighContrast3rdPlaceMedal/>
            </div>
            <div className="flex justify-center items-center">
                <div className="inline-block bg-[#f2eef3] text-black px-4 py-2 rounded w-full text-2xl">
                <div className="text-xl">パンダパンダパンダ</div>
                </div>
            </div>
            <div className="max-w-2xl w-full flex justify-center">
              <MdiHuman/>
            </div>
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
}

export function MdiHuman(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M5 1c0 2.7 1.56 5.16 4 6.32V22h2v-7h2v7h2V7.31C17.44 6.16 19 3.7 19 1h-2a5 5 0 0 1-5 5a5 5 0 0 1-5-5m5 0c-1.11 0-2 .89-2 2s.89 2 2 2s2-.89 2-2s-.89-2-2-2"></path></svg>);
}

export function MdiCrown(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14z"></path></svg>);
}

export function FluentEmojiHighContrast2ndPlaceMedal(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32" {...props}><g fill="currentColor"><path d="M10.6 14.18a7.477 7.477 0 0 1 5.39-2.29c1.96 0 3.91.76 5.39 2.29c2.97 3.05 2.97 8.01 0 11.06a7.459 7.459 0 0 1-5.39 2.29c-2.03 0-3.95-.81-5.39-2.29a7.872 7.872 0 0 1-2.23-5.53c0-2.09.79-4.05 2.23-5.53m3.268 9.77h3.97c.56 0 1-.46 1-1.02s-.45-1.01-1.01-1.01h-1.84l1.95-2.4c.66-.81.8-1.9.37-2.86a2.69 2.69 0 0 0-2.33-1.59h-.13c-.97 0-1.88.47-2.44 1.26c-.32.46-.22 1.09.24 1.41c.46.32 1.09.21 1.41-.24c.19-.26.48-.41.8-.41h.05c.37.01.53.28.58.4c.04.1.16.44-.1.76l-3.3 4.05c-.25.3-.3.72-.13 1.07a1 1 0 0 0 .91.58"></path><path d="m15.998 6.957l-2.45-4.027c-.34-.58-.95-.93-1.62-.93h-6.59c-1.45 0-2.36 1.56-1.65 2.82a16.7 16.7 0 0 0 5.43 5.78c.354.275.747.491 1.164.644C7.665 13.1 5.95 16.2 5.95 19.71C5.95 25.393 10.445 30 15.99 30c5.545 0 10.04-4.607 10.04-10.29c0-3.507-1.711-6.603-4.324-8.461a4.45 4.45 0 0 0 1.182-.649c2.25-1.46 4.11-3.44 5.43-5.78c.7-1.26-.21-2.82-1.66-2.82h-6.59c-.67 0-1.28.35-1.62.93zM15.99 9.42c-.108 0-.216.002-.323.005l3.64-5.982l.004-.007A.868.868 0 0 1 20.068 3h6.59a.9.9 0 0 1 .787 1.332a15.615 15.615 0 0 1-5.102 5.43l-.032.02l-.031.024a3.38 3.38 0 0 1-1.807.694a9.8 9.8 0 0 0-4.483-1.08M9.76 26.11a9.098 9.098 0 0 1-2.59-6.4c0-2.42.92-4.69 2.59-6.4a8.69 8.69 0 0 1 12.49 0c3.44 3.53 3.44 9.27 0 12.8c-1.68 1.71-3.9 2.65-6.25 2.65c-2.36 0-4.58-.94-6.24-2.65"></path></g></svg>);
}

export function FluentEmojiHighContrast3rdPlaceMedal(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32" {...props}><g fill="currentColor"><path d="M10.6 14.18a7.872 7.872 0 0 0-2.23 5.53c0 2.09.79 4.05 2.23 5.53a7.476 7.476 0 0 0 5.39 2.29c2.04 0 3.95-.81 5.39-2.29c2.97-3.05 2.97-8.01 0-11.06a7.46 7.46 0 0 0-5.39-2.29c-1.95 0-3.91.76-5.39 2.29m7.85 2.284l-1.048 1.81a3.071 3.071 0 0 1 1.576 2.675A3.053 3.053 0 0 1 15.928 24a3.06 3.06 0 0 1-2.868-2.024a.966.966 0 0 1 .59-1.24a.975.975 0 0 1 1.24.59a1.1 1.1 0 0 0 1.038.732c.61 0 1.108-.499 1.108-1.109s-.498-1.108-1.108-1.108a.977.977 0 0 1-.977-.977a.96.96 0 0 1 .214-.6l.752-1.311h-1.403a.977.977 0 0 1 0-1.953h3.092a.97.97 0 0 1 .844.488a.984.984 0 0 1 0 .976"></path><path d="m15.998 6.957l-2.45-4.027c-.34-.58-.95-.93-1.62-.93h-6.59c-1.45 0-2.36 1.56-1.65 2.82a16.7 16.7 0 0 0 5.43 5.78c.354.275.747.491 1.164.644C7.665 13.1 5.95 16.2 5.95 19.71C5.95 25.393 10.445 30 15.99 30c5.545 0 10.04-4.607 10.04-10.29c0-3.507-1.711-6.603-4.324-8.461a4.45 4.45 0 0 0 1.182-.649c2.25-1.46 4.11-3.44 5.43-5.78c.7-1.26-.21-2.82-1.66-2.82h-6.59c-.67 0-1.28.35-1.62.93zM15.99 9.42c-.108 0-.216.002-.323.005l3.64-5.982l.004-.007A.868.868 0 0 1 20.068 3h6.59a.9.9 0 0 1 .787 1.332a15.615 15.615 0 0 1-5.102 5.43l-.032.02l-.031.024a3.38 3.38 0 0 1-1.807.694a9.8 9.8 0 0 0-4.483-1.08M9.76 26.11a9.098 9.098 0 0 1-2.59-6.4c0-2.42.92-4.69 2.59-6.4a8.69 8.69 0 0 1 12.49 0c3.44 3.53 3.44 9.27 0 12.8c-1.68 1.71-3.9 2.65-6.25 2.65c-2.36 0-4.58-.94-6.24-2.65"></path></g></svg>);
}