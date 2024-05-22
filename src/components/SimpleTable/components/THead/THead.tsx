import { Drag, SortUp, Sorting, SortingUp } from "@/assets/svg";
import SVGIcon from "@/components/SVGIcon";
import { Table, flexRender } from "@tanstack/react-table";
import React from "react";
import SortingArrows from "./SortingArrows";

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
                className="
            relative
            bg-neutral-400 text-neutral-50 text-nowrap border"
                key={header.id}
              >
                <div className="group cursor-pointer py-1 px-2 flex">
                  <SVGIcon
                    src={Drag}
                    size={"1.6rem"}
                    className={
                      "opacity-0 group-hover:opacity-100 bg-neutral-500"
                    }
                  />
                  <div className="w-full">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
                  <SortingArrows header={header} />
                </div>
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default Header;
