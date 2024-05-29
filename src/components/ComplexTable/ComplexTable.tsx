import React, { useMemo, useState } from "react";
import SimpleTable from "../SimpleTable";
import Button from "../Button";
import {
  SortingState,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { capitalizeWords, getHeaders, isLink } from "./utils";

import LinkCell from "./components/LinkCell";
import NullCell from "./components/NullCell";
import NumberCell from "./components/NumberCell";
import BooleanCell from "./components/BooleanCell";
import StringCell from "./components/StringCell";
import ArrayCell from "./components/ArrayCell";

import Header from "./components/Header";
import Footer from "./components/Footer";

type Props<TData> = {
  data: TData[];
};

const ComplexTable = <TData extends object>({ data }: Props<TData>) => {
  console.log({ complex: data });

  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  // const formattedData = data.filter((i) => );
  const formattedData = useMemo(
    () =>
      data.filter((obj) =>
        Object.values(obj).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(globalFilter.toLowerCase())
        )
      ),
    [data, globalFilter]
  );

  const headers = getHeaders(data as Record<string, unknown>[]);
  const columns = useMemo(
    () =>
      headers.map((header) => ({
        header: capitalizeWords(
          header.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase()
        ),
        accessorKey: header,
        cell: (info: any) => {
          const value = info.getValue();

          const isBoolean = typeof value === "boolean";
          const isNull = !value;
          const isArray = Array.isArray(value);

          const renderOptions: { [key: string]: JSX.Element } = {
            null: <NullCell />,
            link: <LinkCell value={value} />,
            number: <NumberCell value={value} />,
            boolean: <BooleanCell value={value} />,
            array: <ArrayCell value={value} />,
            default: <StringCell value={value} />,
          };

          if (typeof value === "string" && isLink(value)) {
            return renderOptions.link;
          }
          if (typeof value === "number") {
            return renderOptions.number;
          }
          if (isBoolean) {
            return renderOptions.boolean;
          }
          if (isArray) {
            return renderOptions.array;
          }
          if (isNull) {
            return renderOptions.null;
          }
          return renderOptions.default;
        },
      })),
    [headers]
  );

  const table = useReactTable({
    data: formattedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      // globalFilter,
    },
    onSortingChange: setSorting,
    // onGlobalFilterChange: setGlobalFilter,
    // globalFilterFn: "includesString",
  });

  return (
    <div className="flex flex-col gap-2 h-full">
      <Header
        searchValue={globalFilter}
        setSearchValue={setGlobalFilter}
        headers={headers}
      />
      <SimpleTable data={data} table={table} />
      <Footer total={data.length} />
    </div>
  );
};

export default ComplexTable;
