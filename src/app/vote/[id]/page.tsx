import { fetchVoteTime, fetchEntries, CheckID } from '@/app/lib/actions';
import Time from "@/app/components/time";
import { Vote, Form } from '@/app/components/button';

export default async function Page(params: {params: { id: string }}) {
  const themes = await fetchVoteTime();
  const pageId = params.params.id;
  const isIdValid = await CheckID(pageId);
  const entries = await fetchEntries();

  if (isIdValid) {
    return (
      <div className="flex flex-col justify-center items-center bg-[#ffcc33] text-black h-screen w-full font-bold px-[10%]">
        <div className="text-center mt-[5%] mb-[2%]">
          <div className="text-2xl md:text-4xl">投票</div>
        </div>

        <div className="text-center py-[2%]">
          <div className="text-xl md:text-2xl">
            <Time themes={themes}/>
          </div>
        </div>

        <div className="text-center text-xl mb-[5%] md:text-2xl">面白いと思う順番にクリック</div>
        <Vote id={isIdValid.id} entries={entries} pageId={pageId} themes={themes}/>
        <div className="py-[5%]"><Form param='投票リセット' themes={themes}/></div>
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
