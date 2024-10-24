import React from "react";
import { ImMobile2 } from "react-icons/im";
import { IoMdCloudDownload } from "react-icons/io";

const Cto = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-4 w-full mt-5 ">
      {data?.imapLink && (
        <a
          href={data.imapLink}
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center justify-center gap-1 font-semibold text-sm w-fit bg-[#901b79] text-white px-2 py-1.5 rounded-lg text-left  cursor-pointer hover:bg-[#00616c]  transition-all duration-300 ease-in-out">
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
          className="flex flex-row items-center justify-center font-semibold text-sm  w-fit gap-2 bg-[#052c52] text-white px-2 py-1.5 rounded-lg text-left  cursor-pointer hover:bg-[#56d4ff] transition-all duration-300 ease-in-out">
          <IoMdCloudDownload className="text-base " />
          <p>Rapport</p>
        </a>
      )}
      {data?.benchmarkLink && (
        <a
          href={data.benchmarkLink}
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center font-semibold justify-center text-sm  w-fit gap-2 bg-[#052c52] text-white px-2 py-1.5 rounded-lg text-left  cursor-pointer hover:bg-[#56d4ff] transition-all duration-300 ease-in-out">
          <IoMdCloudDownload className="text-base" />

          <p>Rapport avec Benchmark </p>
        </a>
      )}
    </div>
  );
};

export default Cto;
