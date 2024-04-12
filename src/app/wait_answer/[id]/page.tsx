import { fetchThemes } from "@/app/lib/actions";
import Time from "@/app/components/time";
import GET_ID from "@/app/lib/page_id";
//APIできるまでのやつ
function CheckID(pageId:string|string[]){
  return false;//404    
}
export default async function Page () {
  const themes = await fetchThemes();
  const pageId = GET_ID()
  const isIdValid= CheckID(pageId)
  if(isIdValid==true){
  return (
    <>
      <div className="text-center mt-40 ">
        <div className="text-2xl">
          <Time end_time={themes?.end_time}/>
        </div>
      </div>
      <div className="text-center  mt-40">
        <div className="text-2xl">
          残り時間が経過するまでお待ち下さい
        </div>
      </div>
    </>
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