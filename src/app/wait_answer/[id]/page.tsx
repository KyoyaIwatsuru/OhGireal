import { fetchThemes, CheckID } from "@/app/lib/actions";
import Time from "@/app/components/time";
import { DefaultSpinner } from '@/app/components/spinner';

export default async function Page ({ params }: { params: { id: string } }) {
  const themes = await fetchThemes();
  const pageId = params.id;
  const isIdValid = await CheckID(pageId);

  if (isIdValid) {
    return (
      <>
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-[#ffcc33]">
          <div className="flex flex-col items-center md:flex-row text-2xl font-bold px-[10%] mb-4">
          <div>残り時間が経過するまで</div>
          <div>お待ち下さい</div>
          </div>
          <div className="text-2xl font-bold">
            <Time end_time={themes?.end_time}/>
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