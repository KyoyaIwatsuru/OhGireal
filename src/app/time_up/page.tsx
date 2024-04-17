import Link from 'next/link';
import { Home } from "@/app/components/button";

export default function Page () {
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