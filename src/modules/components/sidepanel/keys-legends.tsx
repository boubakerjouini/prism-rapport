import React from "react";
import { HiPlusCircle, HiXCircle } from "react-icons/hi";
import { IoCheckmarkCircle } from "react-icons/io5";

const KeysLegend = () => {
  return (
    <div className="flex flex-row gap-0 text-[#052c52] items-start justify-start w-full mt-5">
      <p className="text-sm mr-1">Clés: </p>
      <div className="flex flex-row items-center justify-center gap-1">
        <IoCheckmarkCircle className="size-5 ml-1" />
        <p className="text-sm">Inclus</p>
        <HiPlusCircle className="size-5 ml-1" />
        <p className="text-sm">Optionel</p>
        <HiXCircle className="size-5 ml-1" />
        <p className="text-sm">Non Inclus</p>
      </div>
    </div>
  );
};

export default KeysLegend;
