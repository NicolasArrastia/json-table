import { FilterIcon } from "@/assets/svg";
import Dropdown from "@/components/Dropdown";
import SVGIcon from "@/components/SVGIcon";
import { useState } from "react";

import React from "react";

const Selector = ({ options }: { options: string[] }) => {
  const [value, setValue] = useState<null | string>(null);
  return <div>selector</div>;
};

const Filters = ({ headers }: { headers: string[] }) => {
  const [filters, setFilters] = useState<any[]>([]);
  return (
    <Dropdown
      listener={
        <div className="border cursor-pointer border-neutral-400 p-1 size-9 flex justify-center items-center rounded-md">
          <SVGIcon
            src={FilterIcon}
            size={"1.6rem"}
            className={"bg-neutral-600"}
          />
        </div>
      }
    >
      <div className="border border-neutral-400 bg-neutral-100 py-1 px-2 rounded-md w-fit">
        <h2 className="font-medium text-nowrap underline">Filter Options</h2>
        {filters.map((filter, index) => (
          <div key={index}>filter here</div>
        ))}

        <Selector options={headers} />
      </div>
    </Dropdown>
  );
};

export default Filters;
