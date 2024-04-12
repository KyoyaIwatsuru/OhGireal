import { fetchEntries, CheckID } from '@/app/lib/actions';
import { Vote } from '@/app/components/button';

export default async function Page({ params }: { params: { id: string } }) {
  const pageId = params.id;
  const isIdValid = await CheckID(pageId);
  const entries = await fetchEntries();

  if (isIdValid) {
    return (
      <>
        <div className="text-center mt-40">
          <div className="text-4xl">投票</div>
        </div>

        <div className="text-center text-2xl mt-20">順番にクリックして投票</div>
        <Vote id={isIdValid.id} entries={entries} pageId={pageId}/>
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
