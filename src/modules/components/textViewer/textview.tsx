import { usePathname } from "next/navigation";
import React from "react";

const TextView = ({ page }: { page: string }) => {
  const pageText: Record<
    | "foundation"
    | "personal"
    | "professional"
    | "360-feedback"
    | "team-maps"
    | "team-performance-diagnostic"
    | "benchmarking"
    | "4D"
    | "career-explorer",
    string
  > = {
    foundation: `
      <div class="max-w-[1030px] mt-12 items-center bg-[#052c52] p-10 text-[#f6f6f6] text-[16px] rounded-[9px] justify-center w-full gap-4">
        <span class="font-bold italic">PRISM Foundation</span> est la version de
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
        <p class="inline-block mt-4 font-bold">
        <span class="font-bold italic">PRISM</span>
           Foundation nécessite un feedback de la part d'un praticien 
              <span class="font-bold italic">PRISM</span>
          certifié.
        </p>
        <div class="w-full flex flex-row items-center justify-center gap-5 mt-[35px]">
     
          <button class="flex min-w-52 items-center justify-center font-semibold text-lg w-fit gap-2 px-6 py-3 rounded-lg text-left cursor-pointer transition-all duration-300 ease-in-out bg-[#009DE0] text-white border border-[#009DE0] hover:bg-white hover:text-[#009DE0]">
            <p>Consulter un praticien</p>
          </button>
        </div>
      </div>
    `,
    personal: `
      <div class="max-w-[1030px] mt-12 items-center bg-[#052c52] p-10 text-[#f6f6f6] text-[16px] rounded-[9px] justify-center w-full gap-4">
        <span class="font-bold italic">PRISM Personal</span> est la version de second niveau de PRISM Brain Mapping. Il s'agit d'un instrument à huit dimensions qui montre non seulement les préférences
comportementales naturelle d'une personne, mais aussi la manière dont elle adapte parfois son comportement pour répondre aux exigences de son rôle quotidien. Les
résultats comprennent : des cartes de profil montrant les préférences comportementales naturelles, adaptées et consistantes ; un profil d'introversion/extroversion ; un
résumé ou un texte complet ; un profil de préférences professionnelles, un rapport sur les aptitudes et l'environnement de travail et une analyse de l'évolution de carrière.
Cette version permet également de faire correspondre le profil à une référence professionnelle et peut fournir un résultat supplémentaire sur la meilleure adéquation à la
référence. Associée aux profils d'autres personnes, cette version peut être utilisée pour former une carte d'équipe. Elle peut être mise à niveau vers  <span class="font-bold italic"> PRISM Professional. </span>
        <p class="inline-block mt-4 font-bold">
        <span class="font-bold italic">PRISM</span>
           Personal nécessite un feedback de la part d'un praticien 
              <span class="font-bold italic">PRISM</span>
          certifié.
        </p>
        <div class="w-full flex flex-row items-center justify-center gap-5 mt-[35px]">
     
          <button class="flex min-w-52 items-center justify-center font-semibold text-lg w-fit gap-2 px-6 py-3 rounded-lg text-left cursor-pointer transition-all duration-300 ease-in-out bg-[#009DE0] text-white border border-[#009DE0] hover:bg-white hover:text-[#009DE0]">
            <p>Consulter un praticien</p>
          </button>
        </div>
      </div>
    `,
    professional: `
      <div class="max-w-[1030px] mt-12 items-center bg-[#052c52] p-10 text-[#f6f6f6] text-[16px] rounded-[9px] justify-center w-full gap-4">
        <span class="font-bold italic">PRISM Professional</span> est l'instrument de profilage individuel par excellence. Il fournit aux utilisateurs les informations les plus complètes sur leurs préférences en matière
de comportement et de travail. Les résultats comprennent : des cartes de profil montrant les préférences comportementales naturelles, adaptées et consistantes (dans le
cadre professionnel) ; un profil d'introversion/extraversion ; un profil de préférences professionnelles avec un rapport sur les aptitudes et l'environnement professionnels et
une analyse du développement de carrière ; des rapports sur l'intelligence émotionnelle, le « Big Five » et la résistance mentale. Cette version permet également de faire
correspondre le profil à un poste de référence et peut fournir un résultat supplémentaire sur la meilleure adéquation avec le poste de référence. En conjonction avec les
profils d'autres individus, cette version peut être utilisée pour former une carte d'équipe. Elle permet aussi de gérer un processus complet de feedback à 360°, en incluant
les compétences internes ou génériques.
        <p class="inline-block mt-4 font-bold">
        <span class="font-bold italic">PRISM</span>
           Professional nécessite un feedback de la part d'un praticien 
              <span class="font-bold italic">PRISM</span>
          certifié.
        </p>
        <div class="w-full flex flex-row items-center justify-center gap-5 mt-[35px]">
     
          <button class="flex min-w-52 items-center justify-center font-semibold text-lg w-fit gap-2 px-6 py-3 rounded-lg text-left cursor-pointer transition-all duration-300 ease-in-out bg-[#009DE0] text-white border border-[#009DE0] hover:bg-white hover:text-[#009DE0]">
            <p>Consulter un praticien</p>
          </button>
        </div>
      </div>
    `,
    "360-feedback": `
      <div class="max-w-[1030px] mt-12 items-center bg-[#052c52] p-10 text-[#f6f6f6] text-[16px] rounded-[9px] justify-center w-full gap-4">
        <span class="font-bold italic">PRISM 360°</span> est un système en ligne facile à utiliser qui vous permet d'effectuer un retour d'information à 360° avec un minimum d'effort et un maximum d'impact.
PRISM 360° fournit un rapport graphique puissant, facile à comprendre, à analyser et à utiliser pour fournir un retour d'information à fort impact.
La plupart des évaluations à 360° ne vous indiquent que ce qui contribue ou non à l'efficacité d'une personne, mais l'évaluation PRISM 360° met également en évidence
les raisons de cette inefficacité. Elle donne à l'utilisateur un aperçu de ce qui se passe sous la surface. Cette différence place PRISM 360° dans une classe à part. PRISM est
le seul modèle à 360° qui mesure les préférences comportementales et les compétences, <span class="font-bold"> avec des options pour l'intelligence émotionnelle et la résistance mentale.
25 observateurs sont disponibles dans 5 catégories</span> - 1 x Manager qui inclut un score « cible » pour les compétences, tandis que les 24 autres peuvent être affectés à un
maximum de 4 groupes. PRISM 360° propose une sélection de compétences génériques, mais les utilisateurs peuvent également télécharger leurs propres compétences
internes.
 <p class="inline-block mt-4 ">
        <span class="font-bold italic">PRISM  360°</span>
          peut être personnalisé en fonction des besoins spécifiques de votre entreprise et facilite le retour d'information grâce à une administration simple et flexible.
         
        </p>
        <p class="inline-block mt-4 font-bold">
        <span class="font-bold italic">PRISM  360°</span>
           nécessite un feedback de la part d'un praticien 
              <span class="font-bold italic">PRISM</span>
          certifié.
        </p>
        <div class="w-full flex flex-row items-center justify-center gap-5 mt-[35px]">
     
          <button class="flex min-w-52 items-center justify-center font-semibold text-lg w-fit gap-2 px-6 py-3 rounded-lg text-left cursor-pointer transition-all duration-300 ease-in-out bg-[#009DE0] text-white border border-[#009DE0] hover:bg-white hover:text-[#009DE0]">
            <p>Réservez une démo</p>
          </button>
        </div>
      </div>
    `,
    "team-maps": `
      <div class="max-w-[1030px] mt-12 items-center bg-[#052c52] p-10 text-[#f6f6f6] text-[16px] rounded-[9px] justify-center w-full gap-4">
        <span class="font-bold italic">PRISM Team Maps</span> favorise le développement des performances d'équipe en sensibilisant à la diversité des préférences comportementales au sein de l'équipe, en
favorisant une meilleure cohésion et en minimisant les conflits au sein de l'équipe.
 <p class="inline-block mt-4 ">
 Des équipes efficaces sont essentielles pour atteindre les objectifs de votre organisation et, avec l'accélération du rythme des changements, de plus en plus d'équipes
sont confrontées à de nouveaux défis. Les cartes aident l'équipe à identifier ses points forts et les éventuelles zones d'ombre à combler pour surmonter ces défis.
</p>
 <p class="inline-block mt-4 ">
        <span class="font-bold italic">PRISM  Team Maps</span>
        permet non seulement de cartographier les forces comportementales d'une équipe, mais aussi d'aider les dirigeants à diagnostiquer les
performances d'une équipe et à identifier les domaines à améliorer.  
        </p>
        <p class="inline-block mt-4 font-bold">
        <span class="font-bold italic">PRISM  Team Maps</span>
           nécessite un feedback de la part d'un praticien 
              <span class="font-bold italic">PRISM</span>
          certifié.
        </p>
        <div class="w-full flex flex-row items-center justify-center gap-5 mt-[35px]">
     
          <button class="flex min-w-52 items-center justify-center font-semibold text-lg w-fit gap-2 px-6 py-3 rounded-lg text-left cursor-pointer transition-all duration-300 ease-in-out bg-[#009DE0] text-white border border-[#009DE0] hover:bg-white hover:text-[#009DE0]">
            <p>Réservez une démo</p>
          </button>
        </div>
      </div>
    `,
    "team-performance-diagnostic": `
      <div class="max-w-[1030px] mt-12 items-center bg-[#052c52] p-10 text-[#f6f6f6] text-[16px] rounded-[9px] justify-center w-full gap-4">
        <span class="font-bold italic">PRISM Team Performance Diagnostic</span> est conçu spécifiquement pour les organisations qui souhaitent développer les performances de leurs équipes. Il fournit une
analyse des performances actuelles de votre équipe afin de vous aider, ainsi que l'équipe, à identifier et à éliminer les obstacles qui entravent la performance collective.
Il mesure la manière dont les membres de l'équipe estiment que celle-ci répond à 12 domaines de résultats clés ; 6 de ces domaines sont liés à la « réalisation » des
objectifs de l'équipe et 6 aux « relations » au sein de l'équipe.
 <p class="inline-block mt-4 ">
 En outre, des sections sont consacrées à l'efficacité de l'équipe, aux compétences de travail en équipe, à l'engagement dans le travail en équipe, au climat de l'équipe, au
moral de l'équipe, à l'auto-perception de l'équipe et à la culture de l'organisation.
Les résultats générés par ce rapport permettent de mettre en place un <span class="font-bold"> processus systématique de gestion des performances </span>assuré par l’intermédiaire d’un
Facilitateur PRISM certifié.
</p>
 <p class="inline-block mt-4 ">
        <span class="font-bold italic">PRISM Team Performance Diagnostic</span>
        permet non seulement de cartographier les forces comportementales d'une équipe, mais aussi d'aider les dirigeants à diagnostiquer les
performances d'une équipe et à identifier les domaines à améliorer.  
        </p>
        <p class="inline-block mt-4 font-bold">
        <span class="font-bold italic">PRISM  Team Maps</span>
           nécessite un feedback de la part d'un praticien 
              <span class="font-bold italic">PRISM</span>
          certifié.
        </p>
        <div class="w-full flex flex-row items-center justify-center gap-5 mt-[35px]">
     
          <button class="flex min-w-52 items-center justify-center font-semibold text-lg w-fit gap-2 px-6 py-3 rounded-lg text-left cursor-pointer transition-all duration-300 ease-in-out bg-[#009DE0] text-white border border-[#009DE0] hover:bg-white hover:text-[#009DE0]">
            <p>Réservez une démo</p>
          </button>
        </div>
      </div>
    `,
    benchmarking: `
      <div class="max-w-[1030px] mt-12 items-center bg-[#052c52] p-10 text-[#f6f6f6] text-[16px] rounded-[9px] justify-center w-full gap-4">
    <p>  Chaque personne que vous recrutez dans votre entreprise a le potentiel de renforcer ou d'affaiblir votre organisation.<span class="font-bold italic"> PRISM Benchmarking </span> est la science qui consiste à
définir clairement les performances supérieures dans un rôle, puis à utiliser des critères objectifs pour aider à déterminer quel candidat serait le mieux adapté. Par
essence, il s'agit de la science qui permet de trouver la personne la mieux adaptée à un poste en termes de forces comportementales, d'aptitude au travail et de
compétences.  </p>
      <span class="font-bold italic">PRISM Benchmarking</span> est un processus simple qui vous aidera à identifier les candidats qui ont un potentiel de performance élevé pour des fonctions spécifiques au sein
de votre organisation. Ce processus va plus loin que les méthodes de recrutement conventionnelles et permet non seulement de dresser un portrait complet du candidat
le plus approprié, mais aussi de clarifier les éléments du poste qui sont essentiels à l'excellence des performances.
 <p class="inline-block mt-4 ">
   <span class="font-bold italic">PRISM Benchmarking</span> est basé sur un certain nombre d'études académiques bien validées et fournit aux entreprises un cadre analytique cohérent et fiable pour les aider
à prendre de bonnes décisions en matière de recrutement. Cependant, il n'est pas seulement destiné aux nouveaux employés,<span class="font-bold"> il est également idéal pour les
promotions et chaque fois qu'une entreprise envisage de réaffecter une personne d'un poste à un autre - ou peut-être simplement de changer les fonctions ou les
tâches d'une personne.
</span>
</p>
 <p class="inline-block mt-4 ">
      
        <p class="inline-block mt-4 ">
       Tout outil de profilage, tel que PRISM, ne doit jamais être utilisé pour prendre une décision de recrutement ou de redéploiement sans être étayé par d'autres techniques.
<span class="font-bold">L’exécution du processus complet de PRISM Benchmarking se fait par l’intermédiera d’un Praticien PRISM certifié.</span>
        </p>
        <div class="w-full flex flex-row items-center justify-center gap-5 mt-[35px]">
     
          <button class="flex min-w-52 items-center justify-center font-semibold text-lg w-fit gap-2 px-6 py-3 rounded-lg text-left cursor-pointer transition-all duration-300 ease-in-out bg-[#009DE0] text-white border border-[#009DE0] hover:bg-white hover:text-[#009DE0]">
            <p>Réservez une démo</p>
          </button>
        </div>
      </div>
    `,
    "4D": `
      <div class="max-w-[1030px] mt-12 items-center bg-[#052c52] p-10 text-[#f6f6f6] text-[16px] rounded-[9px] justify-center w-full gap-4">
 <span class="font-bold italic"> PRISM 4D </span> est un instrument de profilage quadridimensionnel, accompagné d'un manuel de 13 pages et d'un profil narratif de base. Rapide et facile à utiliser, il constitue
une excellente introduction à la compréhension du comportement humain, permettant ainsi aux individus de mieux se comprendre et de mieux comprendre les autres.
Conçu principalement à des fins éducatives, il constitue une introduction non menaçante à des questions importantes telles que la conscience de soi, les compétences en
matière de communication, les relations interpersonnelles et la prise de conscience des conflits. Il s'adresse aux jeunes à partir de 13 ans et est idéal pour une utilisation
dans les écoles et les collèges.
        <div class="w-full flex flex-row items-center justify-center gap-5 mt-[35px]">
     
          <button class="flex min-w-52 items-center justify-center font-semibold text-lg w-fit gap-2 px-6 py-3 rounded-lg text-left cursor-pointer transition-all duration-300 ease-in-out bg-[#009DE0] text-white border border-[#009DE0] hover:bg-white hover:text-[#009DE0]">
            <p>Réservez une démo</p>
          </button>
        </div>
      </div>
    `,
    "career-explorer": `
      <div class="max-w-[1030px] mt-12 items-center bg-[#052c52] p-10 text-[#f6f6f6] text-[16px] rounded-[9px] justify-center w-full gap-4">
 <span class="font-bold italic">PRISM Career Explorer </span> est un outil autonome qui permet aux utilisateurs d'identifier une carrière correspondant à leurs compétences, à leurs aptitudes professionnelles
et à leurs forces comportementales.
<p class="inline-block my-4 ">
La puissance de l’outil réside dans sa capacité à faire correspondre les principales forces comportementales et aptitudes professionnelles de l'utilisateur avec des
références de carrières issues d'une base de données d'environ 1 000 métiers. Cela permet à l'utilisateur d'explorer et d'identifier facilement les carrières qui répondent le
mieux à ses attentes et à ses besoins.
</p>
 <span class="font-bold italic">PRISM Career Explorer </span> génère un profil personnel complet des points forts, des domaines potentiels de développement - utile lors de la rédaction de curriculum vitae, de
CV, etc. Il compare également les préférences professionnelles à environ 500 diplômes universitaires et permet d'accéder à la bibliothèque de ressources pour un
marketing personnel plus efficace et plus professionnel.
        <div class="w-full flex flex-row items-center justify-center gap-5 mt-[35px]">
     
          <button class="flex min-w-52 items-center justify-center font-semibold text-lg w-fit gap-2 px-6 py-3 rounded-lg text-left cursor-pointer transition-all duration-300 ease-in-out bg-[#009DE0] text-white border border-[#009DE0] hover:bg-white hover:text-[#009DE0]">
            <p>Réservez une démo</p>
          </button>
        </div>
      </div>
    `,
  };
  // Get the first segment of the pathname
  const pathname = usePathname()?.split("/")[1] as keyof typeof pageText;

  const htmlContent =
    pageText[pathname] || "<div>Page content not available.</div>";

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default TextView;
