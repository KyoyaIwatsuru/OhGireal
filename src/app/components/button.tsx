'use client';

import { Button } from "@material-tailwind/react";

export function Start() {
  return (
    <div className='flex'>
      <Button className="mx-auto mt-[5%]" color='gray' placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>START</Button>
    </div>
  );
}

export function Form() {
  return (
    <div className="flex mt-[2%]">
      <Button className="mx-auto" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>投稿</Button>
    </div>
  );
}