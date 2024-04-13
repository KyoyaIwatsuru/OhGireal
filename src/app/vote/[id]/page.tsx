import { fetchThemes, fetchEntries, CheckID } from '@/app/lib/actions';
import Time from "@/app/components/time";
import { Vote } from '@/app/components/button';

export default async function Page(params: {params: { id: string }}) {
  const themes = await fetchThemes();
  const pageId = params.params.id;
  const isIdValid = await CheckID(pageId);
  const entries = await fetchEntries();

  if (isIdValid) {
    return (
      <div className="flex flex-col justify-center items-center bg-[#ffcc33] text-black h-screen font-bold">
        <div className="text-center mb-[5%]">
          <div className="text-4xl">投票</div>
        </div>

        <div className="text-center mb-[5%]">
          <div className="text-2xl">
            <Time end_time={themes?.end_time}/>
          </div>
        </div>

        <div className="text-center text-2xl">面白いと思う順番にクリック</div>
        <Vote id={isIdValid.id} entries={entries} pageId={pageId}/>
      </div>
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
