"use client";
import {
  Column,
  ColumnDef,
  RowModel,
  Table,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
  Row,
  Cell,
  getFilteredRowModel,
} from "@tanstack/react-table";
import React, { useMemo, useState } from "react";
import mercado from "../../assets/mercado.json";
import products from "../../assets/products.json";
import Button from "../Button";
import Link from "next/link";
import Dropdown from "../Dropdown";
import LinkCell from "./components/LinkCell";
import NullCell from "./components/NullCell";
import NumberCell from "./NumberCell";
import BooleanCell from "./BooleanCell";
import StringCell from "./StringCell";
import ArrayCell from "./ArrayCell";

const capitalizeWords = (text: string): string => {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" ");
};

const getHeaders = <TData extends Record<string, unknown>>(
  jsonList: TData[]
): string[] => {
  const headers: Set<string> = new Set();
  jsonList.forEach((item) => {
    Object.keys(item).forEach((key) => {
      headers.add(key);
    });
  });
  return Array.from(headers);
};

const isLink = (str: string): boolean => {
  const urlPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;

  return urlPattern.test(str);
};

type Props = {
  data: any;
};

const SimpleTable = ({ data }: Props) => {
  const hasPagination = false;

  const headers = getHeaders(data);
  const columns = useMemo(
    () =>
      headers.map((header) => ({
        header: capitalizeWords(
          header.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase()
        ),
        accessorKey: header,
        cell: (info: any) => {
          const renderers: { [key: string]: (value?: any) => JSX.Element } = {
            null: () => (
              <span className="block italic text-neutral-500 w-full">null</span>
            ),
            link: (value: string) => (
              <Link
                className="text-blue-600 font-medium italic"
                href={value}
                target="_blank"
              >
                {value}
              </Link>
            ),
            number: (value: number) => <div className="">{value}</div>,
            boolean: (value: boolean) => (
              <div className="flex justify-center items-center">
                <input type="checkbox" checked={value} />
              </div>
            ),
            default: (value: any) => <>{value}</>,
          };

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

          // return isNull ? renderOptions.null : renderOptions.default;

          // !!!
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
            return renderers.null();
          }
          return renderers.default(value);
        },
      })),
    [headers]
  );

  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",

    ...(hasPagination
      ? { getPaginationRowModel: getPaginationRowModel() }
      : {}),
  });

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex justify-between z-10">
        <input
          type="text"
          placeholder="Search"
          className="border border-neutral-400 py-1 px-2 rounded-md"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div>

      <div className="w-full h-full overflow-auto relative ">
        <table className="absolute h-fit inset-0 w-full">
          <thead className="sticky top-0">
            {table.getHeaderGroups().map((headerGroup) => (
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
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="odd:bg-neutral-200 hover:bg-neutral-300"
              >
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
        </table>
      </div>

      {hasPagination && (
        <div className="flex gap-2">
          <Button type="secondary" onClick={() => table.setPageIndex(0)}>
            First Page
          </Button>
          <Button onClick={() => table.previousPage()}>Next Page</Button>
          <Button onClick={() => table.nextPage()}>Previous Page</Button>
          <Button
            type="secondary"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            Last Page
          </Button>
        </div>
      )}
    </div>
  );
};

export default SimpleTable;
