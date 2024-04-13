import { CheckID } from "@/app/lib/actions";
import { DefaultSpinner } from '@/app/components/spinner';

export default async function Page ({ params }: { params: { id: string } }) {
  const pageId = params.id;
  const isIdValid = await CheckID(pageId);

  if(isIdValid){
    return (
      <>
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-[#ffcc33]">
          <div className="text-2xl font-bold px-[10%]">
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