import { Drag } from "@/assets/svg";
import SVGIcon from "@/components/SVGIcon";
import React from "react";

const DragColumn = () => {
  return (
    <SVGIcon
      src={Drag}
      size={"1.6rem"}
      className={"opacity-0 group-hover:opacity-100 bg-neutral-500 cursor-grab"}
    />
  );
};

export default DragColumn;
