import { fetchVoteTime, fetchEntries, CheckID } from '@/app/lib/actions';
import Time from "@/app/components/time";
import { Vote } from '@/app/components/button';

export default async function Page(params: {params: { id: string }}) {
  const themes = await fetchVoteTime();
  const pageId = params.params.id;
  const isIdValid = await CheckID(pageId);
  const entries = await fetchEntries();

  if (isIdValid) {
    return (
      <div className="flex flex-col justify-center items-center bg-[#ffcc33] text-black h-screen w-full font-bold px-[10%]">
        <div className="text-center mb-[5%]">
          <div className="text-2xl md:text-4xl">投票</div>
        </div>

        <div className="text-center mb-[5%]">
<<<<<<< HEAD
          <div className="text-2xl">
            <Time themes={themes}/>
          </div>
        </div>

        <div className="text-center text-2xl">面白いと思う順番にクリック</div>
        <Vote id={isIdValid.id} entries={entries} pageId={pageId} themes={themes}/>
=======
          <div className="text-xl md:text-2xl">
            <Time end_time={end_time}/>
          </div>
        </div>

        <div className="text-center text-xl md:text-2xl">面白いと思う順番にクリック</div>
        <Vote id={1} entries={entries} pageId={pageId}/>
>>>>>>> d005e50 (refs #38: voteページの修正)
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
