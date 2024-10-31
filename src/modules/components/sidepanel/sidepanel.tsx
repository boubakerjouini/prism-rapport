"use client";
import React from "react";
import KeysLegend from "./keys-legends";
import MarkedIcon from "./marked-icon";

const SidePanel = ({
  data,
  selected,
  setSelected,
}: {
  data: any;
  selected: any;
  setSelected: any;
}) => {
  return (
    <div className="flex flex-col items-start justify-start  w-full   text-nowrap h-full ">
      <div className="flex flex-col items-start  justify-start w-full gap-1 ">
        {data?.pages?.map((item: any) => {
          return (
            <div
              key={item.id}
              className={`flex flex-row items-center  justify-start w-full gap-4  cursor-pointer hover:font-medium ${
                selected === item.id ? "font-semibold" : ""
              }`}
              onClick={() => setSelected(item.id)}>
              <div className=" w-fit h-fit text-[#052c52] p-[1px] ">
                <MarkedIcon status={item.status} />
              </div>
              <div className="flex flex-row w-full">
                <p className="text-[16px]">{item.name + " "}</p>{" "}
                {item?.flags.length > 0 && (
                  <div className="flex flex-row items-center justify-start">
                    {item.flags.map((flag: any, index: number) => (
                      <p
                        key={flag.id}
                        className={`text-xs ${
                          flag?.status === "destructive"
                            ? "text-red-500"
                            : flag?.status === "constructive"
                            ? "text-violet-500"
                            : flag?.status === "primary"
                            ? "text-cyan-500"
                            : flag?.status === "benchmark"
                            ? "text-green-500"
                            : ""
                        }`}>
                        {index === 0 && "  -" + flag?.name}
                        {index !== 0 && flag?.name}
                        {item?.flags.length - 1 === index ? "" : "/"}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <KeysLegend />
    </div>
  );
};

export default SidePanel;
