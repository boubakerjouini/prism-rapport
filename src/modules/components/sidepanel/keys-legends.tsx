import React from "react";
import { HiPlusCircle, HiXCircle } from "react-icons/hi";
import { IoCheckmarkCircle } from "react-icons/io5";

const KeysLegend = () => {
  return (
    <div className="flex md:flex-row flex-col md:gap-2 text-[#052c52] items-start justify-start w-full mt-5">
      <p className="text-sm mr-1">Clés: </p>
      <div className="flex md:flex-row flex-col md:items-center md:justify-center gap-1">
        <div className="flex flex-row gap-1 items-center justify-start">
          <IoCheckmarkCircle className="size-5 ml-1" />
          <p className="text-sm">Inclus</p>
        </div>
        <div className="flex flex-row gap-1 items-center justify-start">
          <HiPlusCircle className="size-5 ml-1" />
          <p className="text-sm">Optionel</p>
        </div>
        <div className="flex flex-row gap-1 items-center justify-start">
          <HiXCircle className="size-5 ml-1" />
          <p className="text-sm">Non Inclus</p>
        </div>
      </div>
    </div>
  );
};

export default KeysLegend;
