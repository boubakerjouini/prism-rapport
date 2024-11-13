import React from "react";

import SidePanel from "../components/sidepanel/sidepanel";
import Viewer from "../components/viewer/viewer";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useViewer } from "../hooks/useViewer";
import Cto from "../components/calltoaction/cto";
import TextView from "../components/textViewer/textview";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ImMobile2 } from "react-icons/im";

const Rapports = () => {
  const { report, forward, backward, selectedPage, setSelectedPage } =
    useViewer();

  const path = usePathname().split("/")[1];

  return (
    <div className=" px-[140px]  flex flex-col  items-center justify-start w-full py-4">
      <div className="flex flex-col max-w-[1300px] justify-start items-center w-fit mt-4 ">
        {path !== "imap" ? (
          <>
            <h1 className="text-[#052c52] text-[42px] ml-2 font-semibold  rounded-none text-left w-full  ">
              <i>PRISM</i> {report?.name}
            </h1>

            <div className="flex flex-row justify-between   items-start mt-20 gap-10  w-full">
              <SidePanel
                data={report}
                selected={selectedPage}
                setSelected={setSelectedPage}
              />

              <div className="flex relative flex-col  items-center  justify-center w-full h-full ">
                <div className="flex flex-row items-center justify-start w-full absolute -top-16 left-0 gap-4">
                  <div className="flex flex-row items-center justify-center w-full gap-4">
                    <div
                      className="flex flex-row items-center justify-center w-fit rounded-full bg-[#052c52] text-white p-1 
            cursor-pointer hover:bg-[#009DE0] transition-all duration-300 ease-in-out"
                      onClick={() => backward()}>
                      <IoArrowBack className="size-8" />
                    </div>
                    <div
                      className="flex flex-row items-center justify-center w-fit rounded-full bg-[#052c52] text-white p-1
            cursor-pointer hover:bg-[#009DE0] transition-all duration-300 ease-in-out"
                      onClick={() => forward()}>
                      <IoArrowForward className="size-8" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col  items-center justify-start w-fit h-full  ">
                  <Viewer data={report} selectedPage={selectedPage} />
                  <Cto data={report} />
                </div>
              </div>
            </div>
            <TextView page={path} />
          </>
        ) : (
          <>
            <h1 className="text-[#052c52] text-[42px] ml-2 font-semibold  rounded-none text-left w-full  ">
              <i>PRISM</i> iMap
            </h1>

            <div className="flex flex-row justify-between  text-[#052c52]   items-start mt-20 gap-5   w-full">
              <div className="flex flex-col text-[15px] items-start gap-5 justify-start w-1/2 h-full ">
                <p className="font-bold text-[#052c52] ">
                  <span className="font-bold">
                    <span className="italic">PRISM </span> iMAP{" "}
                  </span>
                  est notre plateforme numérique interactive conçue pour être
                  accessible sur n'importe quel appareil, offrant un accès
                  instantané aux Rapports PRISM, à tout moment et en tout lieu.
                </p>
                <p>
                  <span className="font-bold text-[#052c52]">
                    <span className="italic">PRISM </span> iMAP{" "}
                  </span>
                  est un moyen efficace pour les praticiens PRISM qui facilite
                  la le feedback et aide les candidats à mettre PRISM en action.
                </p>
                <p>
                  <span className="font-bold text-[#052c52]">
                    <span className="italic">PRISM </span> iMAP{" "}
                  </span>{" "}
                  permet aux candidats d'explorer de manière interactive leurs
                  préférences comportementales afin de se comprendre eux-mêmes,
                  de comprendre les autres
                  <br />
                  et d'adapter leur comportement pour un meilleur impact.
                </p>
                <p>
                  <span className="font-bold  text-[#052c52]">
                    <span className="italic ">PRISM </span> iMAP{" "}
                  </span>{" "}
                  est disponible pour les rapports PRISM Professional, Personal
                  <br />
                  et Foundation.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center -ml-10 w-1/2 h-full ">
                <Image
                  src="/PRISM-iMap-on-devices.png"
                  alt="imap"
                  width={560}
                  height={500}
                  className="rounded-lg justify-start -mt-5"
                />
                <a
                  href="https://profile.prismbrainmapping.com/candidate/index/84E315CE5BC0E580CC53182224E54EBD9AD9F8E89F5ACDC2"
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
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Rapports;
