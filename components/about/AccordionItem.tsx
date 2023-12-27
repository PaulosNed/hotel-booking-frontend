import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

interface AccordionData {
  desc: string;
  image1: string;
  image2: string;
  image3: string;
}

const AccordionItem: React.FC<AccordionData> = ({
  desc,
  image1,
  image2,
  image3,
}) => {
  return (
    <div className="bg-white">
      <div className="pt-10">
        <div className="w-full h-60 md:h-[500px] grid grid-cols-5 grid-rows-4 gap-1">
          <img
            src={image1}
            alt=""
            className="col-span-3 row-span-4 w-full h-full rounded-l-xl"
          />
          <img
            src={image2}
            alt=""
            className="col-span-2 row-span-2 w-full h-full rounded-tr-xl"
          />
          <img
            src={image3}
            alt=""
            className="col-span-2 row-span-2 w-full h-full  rounded-br-xl"
          />
        </div>
      </div>

      <div className="mt-12 text-slate-500 md:px-10">{desc}</div>
    </div>
  );
};

export default AccordionItem;
