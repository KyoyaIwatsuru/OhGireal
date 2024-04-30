import Link from 'next/link'
import Image from "next/image";
import { Start } from "@/app/components/button";

export default function Page () {
  async function sendNotification() {
    'use server'
    try {
      const res = await fetch("http://localhost:3001/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: "test"}),
      });
      const data = await res.json();
      console.log(data.token);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='h-screen bg-[#ffcc33]'>
      <Image
        className="mx-auto pt-60 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/logo_ohgireal.png"
        alt="OhGireal Logo"
        width={700}
        height={300}
        priority
      />
      <Link href="/answer">
        <Start />
      </Link>
      <form action={sendNotification}>
        <button type='submit' className='mt-[3%] ml-[47%]'>
          通知を送信する
        </button>
      </form>
    </div>
  )
}