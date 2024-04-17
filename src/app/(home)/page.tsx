import Link from 'next/link'
import Image from "next/image";
import { Start } from "@/app/components/button";

export default function Page () {
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
    </div>
  )
}