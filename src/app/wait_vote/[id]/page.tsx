import { CheckID } from "@/app/lib/actions";

export default async function Page ({ params }: { params: { id: string } }) {
  const pageId = params.id;
  const isIdValid = await CheckID(pageId);

  if(isIdValid){
    return (
      <>
        <div className="h-screen w-screen flex justify-center items-center bg-[#ffcc33]">
          <div className="text-4xl font-bold">
            投票が完了するまでお待ちください
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