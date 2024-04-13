"use client";
import { Spinner } from "@material-tailwind/react";
 
export function DefaultSpinner() {
  return (
    <Spinner className="h-10 w-10" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} />
  );
}