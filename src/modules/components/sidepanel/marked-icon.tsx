import React from "react";
import { HiPlusCircle, HiXCircle } from "react-icons/hi";
import { IoCheckmarkCircle } from "react-icons/io5";

enum MarkedIconType {
  INCLUDED = "included",
  OPTIONAL = "optional",
  NOT_INCLUDED = "not_included",
}
const MarkedIcon = (type: any) => {
  switch (type?.status) {
    case "included":
      return <IoCheckmarkCircle className="size-5 mx-1" />;
    case "optional":
      return <HiPlusCircle className="size-5 mx-1" />;
    case "not_included":
      return <HiXCircle className="size-5 mx-1 text-gray-400" />;
  }
};

export default MarkedIcon;
