import React from "react";
import SimpleTable from "../SimpleTable";

type Props<TData> = {
  data: TData[];
};

const ComplexTable = <TData,>({ data }: Props<TData>) => {
  return (
    <div className="border border-r-emerald-400">
      <SimpleTable data={data} />
    </div>
  );
};

export default ComplexTable;
