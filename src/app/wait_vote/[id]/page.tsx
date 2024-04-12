'use client'
import { useParams } from 'next/navigation'
//APIできるまでのやつ
function CheckID(pageId:string|string[]){
  return true;//404    
}
export default function Wait_vote () {
  const urlParams=useParams()
  const pageId=urlParams.id
  const isIdValid= CheckID(pageId)
  if(isIdValid==true){
  return (
    <>
        <div className="h-screen w-screen flex justify-center items-center bg-[#ffcc33]">
            <div className="text-4xl font-bold">
                投票が完了するまでお待ちください
            </div>
        </div>
    </>
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