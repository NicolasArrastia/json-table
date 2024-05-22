"use client";
import { Table, flexRender } from "@tanstack/react-table";
import THead from "./components/THead";
import TBody from "./components/TBody";

type Props = {
  data: any;
  table: Table<any>;
};

const SimpleTable = ({ data, table }: Props) => {
  return (
    <div className="w-full h-full overflow-auto relative">
      {data.length ? (
        <table className="absolute h-fit inset-0 w-full">
          <THead table={table} />
          <TBody table={table} />
        </table>
      ) : (
        <>no data</>
      )}
    </div>
  );
};

export default SimpleTable;
