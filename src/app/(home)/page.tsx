'use client';

import Link from 'next/link'
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export default function Page () {
  return (
    <main>
      <Image
        className="mx-auto mt-[20%] relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <Link href="/answer">
        <div className='flex'>
          <Button className="mx-auto mt-[5%]" color='gray' placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>START</Button>
        </div>
      </Link>
    </main>
  )
}