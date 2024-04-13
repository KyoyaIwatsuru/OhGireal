import { fetchThemes, CheckID } from "@/app/lib/actions";
import { DefaultSpinner } from '@/app/components/spinner';
import Time from "@/app/components/time";

export default async function Page ({ params }: { params: { id: string } }) {
  const themes = await fetchThemes();
  const pageId = params.id;
  const isIdValid = await CheckID(pageId);
  const end_time = new Date(themes?.end_time.getTime() + 2 * 60 * 1000);

  if(isIdValid){
    return (
      <>
        <div className="h-screen w-screen flex flex-col justify-center items-center font-bold bg-[#ffcc33]">
          <div className="text-center mb-[5%]">
              <div className="text-2xl">
                <Time end_time={end_time}/>
              </div>
            </div>
          <div className="text-2xl px-[10%]">
            投票が完了するまでお待ちください
          </div>
          <div className="mt-10">
            <DefaultSpinner />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h1>404 NotFound</h1>
        <p>ページが見つかりませんでした。</p>
      </div>
    );
  }
}