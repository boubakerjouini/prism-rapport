import React from "react";

import SidePanel from "../components/sidepanel/sidepanel";
import Viewer from "../components/viewer/viewer";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useViewer } from "../hooks/useViewer";
import Cto from "../components/calltoaction/cto";
const Rapports = () => {
  const { report, forward, backward, selectedPage, setSelectedPage } =
    useViewer();

  return (
    <div className="container max-w-[1400px]  mx-auto flex flex-col items-center justify-center w-full py-10">
      <h1 className="text-[#052c52] text-[40px] font-black p-2 rounded-none text-left w-full">
        <i>PRISM</i> Foundation
      </h1>
      <div className="flex flex-row  w-full mt-14 ">
        <SidePanel
          data={report}
          selected={selectedPage}
          setSelected={setSelectedPage}
        />

        <div className="flex relative flex-col items-center justify-center w-2/3 h-full gap-4">
          <div className="flex flex-row items-center justify-center w-full absolute -top-10 left-0 gap-4">
            <div className="flex flex-row items-center justify-center w-full gap-4">
              <div
                className="flex flex-row items-center justify-center w-fit rounded-full bg-[#052c52] text-white p-1 
            cursor-pointer hover:bg-[#56d4ff] transition-all duration-300 ease-in-out"
                onClick={() => backward()}>
                <IoArrowBack className="size-6" />
              </div>

              <div
                className="flex flex-row items-center justify-center w-fit rounded-full bg-[#052c52] text-white p-1
            cursor-pointer hover:bg-[#56d4ff] transition-all duration-300 ease-in-out"
                onClick={() => forward()}>
                <IoArrowForward className="size-6" />
              </div>
            </div>
          </div>
          <Viewer data={report} selectedPage={selectedPage} />
          <Cto data={report} />
        </div>
      </div>
      <div
        className="flex flex-row items-center
      bg-[#d3dfe9] p-10
      justify-center w-full gap-4 mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus
        lectus sodales magna pellentesque euismod sit amet quis orci. Praesent
        posuere magna vitae nisl efficitur pulvinar. Phasellus lobortis pharetra
        iaculis. Mauris id nulla tincidunt, tincidunt velit blandit, tincidunt
        massa. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Duis fringilla tellus vel sem
        blandit, quis mattis nisi congue. Etiam dignissim leo purus, non
        bibendum neque tincidunt eu. Vivamus non nunc orci. Quisque eu malesuada
        turpis. Maecenas vehicula varius ex nec varius. Etiam tristique dictum
        dui, ut condimentum purus consectetur euismod. Vestibulum nec ornare ex,
        non mollis massa. Etiam sit amet neque at lacus consectetur porta nec
        quis sem. Phasellus efficitur nibh in ante malesuada auctor. Sed sed
        tincidunt nulla. Curabitur bibendum nibh libero, at semper neque iaculis
        at. Proin et libero molestie, ornare neque a, luctus ligula. In et
        turpis massa. Integer sit amet dui vitae metus mattis egestas.
      </div>
    </div>
  );
};

export default Rapports;
