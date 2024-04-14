import Link from "next/link";
import { fetchThemes, addUser } from "@/app/lib/actions";
import Time from "@/app/components/time";
import { Home, Form } from "@/app/components/button";

export default async function Page () {
  const themes = await fetchThemes();
  const now = new Date()

    async function sendData(formData: FormData) {
        'use server'
        const name = formData.get('name')
        const answer = formData.get('answer')
        if (name !== null && answer !== null) {
            await addUser(name as string, answer as string)
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

                    <div className="text-center mt-20">
                        <div className="text-2xl">
                            <Time end_time={themes?.end_time}/>
                        </div>
                    </div>

                    <div className="text-xl text-center mt-20">
                            名前 or ニックネーム
                    </div>

                    <div className="mt-0">
                        <div className="flex flex-col items-end gap-6 w-full mx-auto my-auto ">
                        <div className="relative w-full min-w-[200px]">
                            <textarea
                                name='name'
                                rows={1}
                                className="peer w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 font-sans text-2xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                style={{ overflowY: 'scroll' }} // スクロール可能にするためのスタイル
                                placeholder=""
                            ></textarea>
                            <label
                                className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-xl font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500"
                            >
                            </label>
                            </div>
                        </div>
                    </div>

                    <div className="text-xl text-center mt-10">
                            回答
                    </div>

                    <div className="mt-0">
                        <div className="flex flex-col items-end gap-6 w-full mx-auto my-auto ">
                            <div className="relative w-full">
                                <textarea
                                name='answer'
                                rows={1}
                                className="peer w-full min-w-[200px] resize-none border-b border-blue-gray-200 bg-transparent pt-4 font-sans text-2xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder="">
                                </textarea>
                                <label
                                className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-xl font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                                </label>
                            </div>
                        </div>
                    </div>
                    <Form param='投稿'/>
                </div>
            </form>
        );
    } else {
        return(
            <>
                {/* <div className="text-center mt-40">
                    <div className="text-4xl">
                        お題の時間外です
                    </div>
                </div> */}

                <div className="flex justify-center items-center h-screen font-bold bg-[#ffcc33] text-black">
                    <div className="text-center">
                        <div className="text-2xl">
                        残念！投稿時間外です
                        </div>
                    </div>
                </div>

            </>
        );

    }
}

