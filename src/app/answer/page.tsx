import Link from 'next/link'
import { fetchEndTime, addUser } from "@/app/lib/actions";
import Time from "@/app/components/time";
import { Home, Form } from "@/app/components/button";
import { InputStandard } from '@/app/components/input';

export default async function Page () {
  const themes = await fetchEndTime();
  const now = new Date()

  async function sendData(formData: FormData) {
    'use server'
    const name = formData.get('name')
    const answer = formData.get('answer')
    if (name !== null && answer !== null) {
      if (typeof name === 'string' && typeof answer === 'string' && name.match(/\S/g) && answer.match(/\S/g)) {
        await addUser(name as string, answer as string)
      } else {
        alert('名前や回答を空白にしないでください。')
        console.error('name or answer is null')
      }
    } else {
      console.error('name or answer is null')
    }
  }

  if (themes?.start_time <= now && now < themes?.end_time) {
    return(
      <form action={sendData}>
        <div className="flex flex-col justify-center items-center bg-[#ffcc33] text-black h-screen w-full font-black px-[10%]">
          <div className="text-center">
            <div className="text-2xl">
              {themes?.theme}
            </div>
          </div>
          <div className="text-center mt-[10%] mb-[10%]">
            <div className="text-2xl">
              <Time themes={themes}/>
            </div>
          </div>
          <div className="w-full px-[10%] py-[5%] overscroll-y-contain">
            <div className="flex w-full">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  name='name' // ここに name 属性を追加
                  required
                  placeholder=""
                  className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-2xl font-normal text-black outline outline-0 transition-all placeholder-shown:border-black placeholder:text-white focus:border-black focus:outline-0 disabled:border-0 disabled:bg-black placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-black peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-black">
                  名前 or ニックネーム
                </label>
              </div>
            </div>
          </div>
          <div className="w-full px-[10%] py-[5%] overscroll-y-contain">
            <div className="flex w-full">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  name='answer' // ここに name 属性を追加
                  required
                  placeholder=""
                  className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-2xl font-normal text-black outline outline-0 transition-all placeholder-shown:border-black placeholder:text-white focus:border-black focus:outline-0 disabled:border-0 disabled:bg-black placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-black peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-black">
                  回答
                </label>
              </div>
            </div>   
          </div>
          <div className="mt-[5%]"><Form param='投稿' themes={themes}/></div>
        </div>
      </form>
    );
  } else {
    return(
      <>
        <div className="flex justify-center items-center h-screen font-bold bg-[#ffcc33] text-black">
          <div className="text-center">
            <div className="text-2xl">
              残念！投稿時間外です
            </div>
            <Link href="/">
              <Home />
            </Link>
          </div>
        </div>
      </>
    );
  }
}
