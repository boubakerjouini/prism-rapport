import React from "react";
import { HiPlusCircle, HiXCircle } from "react-icons/hi";
import { IoCheckmarkCircle } from "react-icons/io5";

const KeysLegend = () => {
  return (
    <div className="flex flex-row items-start justify-start w-full mt-5">
      <p className="text-xs">KEY: </p>
      <IoCheckmarkCircle className="size-4 mx-1" />

      <p className="text-xs">Inclus</p>
      <HiPlusCircle className="size-4 mx-1" />
      <p className="text-xs">Optionel</p>
      <HiXCircle className="size-4 mx-1" />
      <p className="text-xs">Non Inclus</p>
    </div>
  );
};

export default KeysLegend;
