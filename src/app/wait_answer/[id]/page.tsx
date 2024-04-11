import { fetchThemes } from "@/app/lib/actions";
import Time from "@/app/components/time";

export default async function Page () {
  const themes = await fetchThemes();

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
}