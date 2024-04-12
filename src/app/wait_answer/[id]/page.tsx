import { fetchThemes, CheckID } from "@/app/lib/actions";
import Time from "@/app/components/time";

export default async function Page (params: {params: { id: string }}) {
  const themes = await fetchThemes();
  const pageId = params.params.id;
  const isIdValid = await CheckID(pageId);

  if (isIdValid == true) {
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
  } else {
    return (
      <div>
        <h1>404 NotFound</h1>
        <p>ページが見つかりませんでした。</p>
      </div>
    );
  }
}