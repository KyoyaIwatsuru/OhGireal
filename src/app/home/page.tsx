import Link from 'next/link'
import Image from "next/image";

export default function Page () {
  return (
    <main>
      <Link href="/answer">
        <Image
          className="mx-auto relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </Link>
      <h1 className="text-center">問題が出題されるまでお待ち下さい．</h1>
    </main>
  )
}