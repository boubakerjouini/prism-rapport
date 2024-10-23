import React from "react";
import { usePathname } from "next/navigation";
import data from "../../data/data.json";

export const useViewer = () => {
  const [selectedPage, setSelectedPage] = React.useState(1);
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const report = Object.values(data.rapports).find(
    (rapport) => rapport.path === slug
  );

  const forward = () => {
    if (report && selectedPage < report.pages.length) {
      setSelectedPage(selectedPage + 1);
    }
  };

  const backward = () => {
    if (selectedPage > 1) {
      setSelectedPage(selectedPage - 1);
    }
  };

  return {
    report,
    forward,
    backward,
    selectedPage,
    setSelectedPage,
  };
};
