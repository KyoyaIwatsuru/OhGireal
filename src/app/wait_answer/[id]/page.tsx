import { fetchThemes, CheckID } from "@/app/lib/actions";
import Time from "@/app/components/time";
import PageId from "@/app/lib/page_id";
//APIできるまでのやつ
function CheckID(){
  return true;//404    
}

export default async function Page ({ params }: { params: { id: string } }) {
  const themes = await fetchThemes();
  const pageId=params.id
  const isIdValid= CheckID()
  if(isIdValid==true){
  return (
    <div className="h-screen bg-[#ffcc33]">
      <div className="text-center  pt-[20%]">
        <div className="text-4xl font-bold">
          残り時間が経過するまでお待ち下さい
        </div>
      </div>
      <div className="text-center mt-40 ">
        <div className="text-2xl font-bold">
          <Time end_time={themes?.end_time}/>
        </div>
      </div>
    </div>
  )
  }else{
    return (
      <div>
        <h1>404 NotFound</h1>
        <p>ページが見つかりませんでした。</p>
      </div>
    );
  }
}