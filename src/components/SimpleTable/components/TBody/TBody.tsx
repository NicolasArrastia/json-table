import { Table, flexRender } from "@tanstack/react-table";
import React from "react";

type Props = {
  table: Table<any>;
};

const Body = ({ table }: Props) => {
  return (
    <tbody>
      {table?.getRowModel().rows.map((row) => (
        <tr key={row.id} className="odd:bg-neutral-200 hover:bg-neutral-300">
          {row.getVisibleCells().map((cell) => (
            <td
              key={cell.id}
              className="py-1 px-4
            max-w-96
            min-w-32
            overflow-hidden
            text-nowrap whitespace-break-spaces text-ellipsis"
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
