import { MenuIcon } from "@/assets/svg";
import Dropdown from "@/components/Dropdown";
import SVGIcon from "@/components/SVGIcon";
import React from "react";

const TableOptions = () => {
  return (
    <Dropdown
      listener={
        <div className="border border-neutral-400 rounded-md h-fit py-1 px-2">
          <SVGIcon
            src={MenuIcon}
            size={"1.6rem"}
            className={"bg-neutral-600"}
          />
        </div>
      }
    >
      <div className="border border-neutral-400 rounded-md py-1 px-2 bg-neutral-100">
        <h2>Table Options</h2>
        <></>
      </div>
    </Dropdown>
  );
};

export default TableOptions;
