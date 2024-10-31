import React from "react";
import { IoMdCloudDownload } from "react-icons/io";

const TextView = ({ page }: { page: string }) => {
  console.log("el page", page);

  return (
    <div className=" max-w-[1030px] mt-24 items-center bg-[#052c52] p-10 text-[#f6f6f6] text-[16px]  rounded-[9px] justify-center w-full gap-4 ">
      <span className="font-bold">PRISM Foundation</span> est la version de
      base, peu coûteuse, idéale pour une utilisation à grand volume. Les
      résultats comprennent : une carte du profil en huit dimensions montrant
      les préférences comportementales naturelles d'une personne ; un profil
      d'introversion/extroversion ; un texte narratif résumé et un profil des
      préférences professionnelles, ainsi qu'un rapport sur les aptitudes,
      l'environnement de travail et une analyse de l'évolution de la carrière.
      Cette version permet également de faire correspondre le profil à un poste
      de référence et peut fournir un résultat supplémentaire sur la meilleure
      adéquation avec le poste de référence. Associée aux profils d'autres
      individus, cette version peut être utilisée pour former une carte
      d'équipe. Elle peut être mise à jour ultérieurement vers d’autres versions
      plus complètes de PRISM.
      <p className="inline-block mt-4 font-bold">
        PRISM Foundation nécessite un feedback de la part d'un praticien PRISM
        certifié.
      </p>
      <div className="w-full flex flex-row items-center justify-center gap-5 mt-[35px]">
        <button className="flex min-w-52 items-center justify-center font-semibold text-lg w-fit gap-2 px-6 py-3 rounded-lg text-left cursor-pointer transition-all duration-300 ease-in-out bg-white text-[#009DE0] border border-[#009DE0] hover:bg-[#009DE0] hover:text-white">
          <p>Consultez un praticien</p>
        </button>
        <button className="flex min-w-52 items-center  justify-center font-semibold text-lg w-fit gap-2 px-6 py-3 rounded-lg text-left cursor-pointer transition-all duration-300 ease-in-out bg-[#009DE0] text-white border border-[#009DE0] hover:bg-white hover:text-[#009DE0]">
          <p>Consultez un praticien</p>
        </button>
      </div>
    </div>
  );
};

export default TextView;
