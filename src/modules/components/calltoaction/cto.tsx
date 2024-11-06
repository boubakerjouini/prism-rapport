import React from "react";
import { ImMobile2 } from "react-icons/im";
import { IoMdCloudDownload } from "react-icons/io";

const Cto = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-4 w-full mt-[35px] ">
      {data?.imapLink && (
        <a
          href={data.imapLink}
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center justify-center gap-1 font-semibold text-sm w-fit bg-[#901b79] text-white px-3 py-2 rounded-lg text-left  cursor-pointer border-2 border-[#901b79] hover:text-[#901b79]  hover:bg-[#fcfcfc]  transition-all duration-300 ease-in-out">
          <ImMobile2 className="text-base" />

          <div className="flex flex-row gap-1">
            <b className="font-black cursor-pointer">
              <i>PRISM</i>
            </b>
            <span className="font-semibold cursor-pointer">iMap</span>
          </div>
        </a>
      )}
      {data?.sampleLink && (
        <a
          href={data.sampleLink}
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center justify-center font-semibold text-sm  w-fit gap-2 bg-[#052c52] text-white px-3 py-2 rounded-lg text-left  cursor-pointer hover:bg-[#009DE0] transition-all duration-300 ease-in-out">
          <IoMdCloudDownload className="text-base " />
          <p>Rapport</p>
        </a>
      )}
      {data?.benchmarkLink && (
        <a
          href={data.benchmarkLink}
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center font-semibold justify-center text-sm  w-fit gap-2 bg-[#052c52] text-white px-3 py-2 rounded-lg text-left  cursor-pointer hover:bg-[#009DE0] transition-all duration-300 ease-in-out">
          <IoMdCloudDownload className="text-base" />

          <p>Rapport avec Benchmark </p>
        </a>
      )}
    </div>
  );
};

export default Cto;
