'use client'
import { useParams } from 'next/navigation'

export default function Wait_vote () {
  const urlParams=useParams()
  const pageId=urlParams.id
  return (
    <>
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="text-4xl">
                投票が完了するまでお待ちください
            </div>
        </div>
    </>
  )
}