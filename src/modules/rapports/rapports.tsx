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
    <div className="container max-w-[1200px]  mx-auto flex flex-col items-center justify-center w-full py-6">
      <h1 className="text-[#052c52] text-[42px] font-semibold px-2 rounded-none text-left w-full">
        <i>PRISM</i> {report?.name}
      </h1>
      <div className="flex flex-row  w-full mt-6 ">
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
        className="flex items-center
      bg-[#052c52] p-10 text-[#f6f6f6] 
      text-[15px] rounded-[9px]
      justify-center  w-full gap-4 mt-10">
        PRISM Foundation est la version de base, peu coûteuse, idéale pour une
        utilisation à grand volume. Les résultats comprennent : une carte du
        profil en huit dimensions montrant les préférences comportementales
        naturelle d'une personne ; un profil d'introversion/extroversion ; un
        texte narratif résumé et un profil des préférences professionnelles,
        ainsi qu'un rapport sur les aptitudes, l'environnement de travail et une
        analyse de l'évolution de la carrière. Cette version permet également de
        faire correspondre le profil à un poste de référence et peut fournir un
        résultat supplémentaire sur la meilleure adéquation avec le poste de
        référence. Associée aux profils d'autres individus, cette version peut
        être utilisée pour former une carte d'équipe. Elle peut être mise à jour
        ultérieurement vers d’autres versions plus complètes de PRISM. PRISM
        Foundation nécessite un feedback de la part d'un praticien PRISM
        certifié.
      </div>
    </div>
  );
};

export default Rapports;
