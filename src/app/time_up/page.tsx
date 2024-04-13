import Link from 'next/link';
import { Home } from "@/app/components/button";

export default function Page () {
  return(
    <>
      <div className="text-center mt-40">
        <div className="text-4xl">
          お題の時間外です
        </div>
      </div>

      <div className="text-center mt-20">
        <div className="text-2xl">
          残念！投稿時間外です
        </div>
      </div>

      <Link href="/">
        <Home />
      </Link>
    </>
  );
}