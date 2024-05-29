import { Drag, SortUp, Sorting, SortingUp } from "@/assets/svg";
import SVGIcon from "@/components/SVGIcon";
import { Table, flexRender } from "@tanstack/react-table";
import React from "react";
import SortingArrows from "./SortingArrows";
import DragColumn from "./DragColumn";

type Props = {
  table: Table<any>;
};

const Header = ({ table }: Props) => {
  return (
    <thead className="sticky top-0">
      {table?.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <th
                onClick={header.column.getToggleSortingHandler()}
                className="relative group bg-neutral-400 text-neutral-50 text-nowrap border py-1 px-2"
                key={header.id}
              >
                <div className="cursor-pointer flex px-2 gap-0">
                  <DragColumn />
                  <div className="w-full px">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
                  <SortingArrows header={header} />
                </div>
                <div className="group-hover:bg-red-50/50 w-2 h-[80%] absolute top-1 right-1 cursor-col-resize" />
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default Header;
