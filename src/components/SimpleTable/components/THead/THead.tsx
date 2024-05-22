import { Table, flexRender } from "@tanstack/react-table";
import React from "react";

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
                className="py-1 px-2
            relative
            bg-neutral-400 text-neutral-50 text-nowrap"
                key={header.id}
              >
                <div className="mr-auto absolute" aria-hidden="true">
                  {header.column.getIsSorted()
                    ? { asc: "⬆️", desc: "⬇️" }[
                        header.column.getIsSorted() as string
                      ]
                    : null}
                </div>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default Header;
