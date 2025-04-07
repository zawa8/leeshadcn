"use client";
import FontPicker from "@/components/lifonts/lifp";
export default function AcmeLogo() {
  return (
    <div>
		<div className="flex flex-row items-center leading-none text-red" >
		  <p className="text-left hover:text-center">zawa8.vercel.app</p>
		</div>
		<div className="w-full items-center leading-none text-black" >
		  <FontPicker />
		</div>
    </div>
  );
}
