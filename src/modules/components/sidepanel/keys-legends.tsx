import React from "react";
import { HiPlusCircle, HiXCircle } from "react-icons/hi";
import { IoCheckmarkCircle } from "react-icons/io5";

const KeysLegend = () => {
  return (
    <div className="flex flex-row items-start justify-start w-full mt-5">
      <p className="text-sm">Clé: </p>
      <IoCheckmarkCircle className="size-5 mx-1" />

      <p className="text-sm">Inclus</p>
      <HiPlusCircle className="size-5 mx-1" />
      <p className="text-sm">Optionel</p>
      <HiXCircle className="size-5 mx-1" />
      <p className="text-sm">Non Inclus</p>
    </div>
  );
};

export default KeysLegend;
