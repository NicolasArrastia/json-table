import React from "react";
import Filters from "./Filters";
import TableOptions from "./TableOptions";

type Props = {
  searchValue: string;
  setSearchValue: any;
  headers: any[];
};

const Header = ({ searchValue, setSearchValue, headers }: Props) => {
  return (
    <header className="flex justify-between z-10">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="border border-neutral-400 py-1 px-2 rounded-md"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Filters headers={headers} />
        </div>
        <div className="flex gap-2">
          {/* {["filter1", "filter2", "filter3"].map((filter, index) => (
            <span
              key={index}
              className="p-1 pl-2 flex gap-2 items-center justify-between bg-neutral-300 rounded-md"
            >
              {filter}{" "}
              <div className="bg-neutral-400 size-4 p-3 flex justify-center items-center rounded-md">
                x
              </div>
            </span>
          ))} */}
        </div>
      </div>

      <TableOptions />
    </header>
  );
};

export default Header;
