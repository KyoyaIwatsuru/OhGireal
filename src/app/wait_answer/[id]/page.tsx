'use client';
import { useParams } from 'next/navigation'
export default function wait_answer () {
  const urlParams=useParams()
  const pageId:string|string[]=urlParams.id
  return (
    <>
      <div　className="text-center mt-40 ">
          <div className="text-2xl">
              残り時間  1:00
          </div>
      </div>
      <div　className="text-center  mt-40">
          <div className="text-2xl">
              残り時間が経過するまでお待ち下さい
          </div>
      </div>
    </>
  )
}