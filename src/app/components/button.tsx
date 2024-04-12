'use client';

import { Button } from "@material-tailwind/react";

export function Start() {
  return (
    <div className='flex'>
      <Button size="lg"className="mx-auto mt-[5%]" color='gray' placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>はじめる</Button>
    </div>
  );
}

export function Form() {
  return (
    <div className="flex mt-[2%]">
      <Button type="submit" className="mx-auto" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>投稿</Button>
    </div>
  );
}