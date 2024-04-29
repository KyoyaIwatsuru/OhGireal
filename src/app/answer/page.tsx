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
            <InputStandard label="名前 or ニックネーム"/>      
          </div>
          <div className="w-full px-[10%] py-[5%] overscroll-y-contain">
            <InputStandard label="回答"/>      
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
