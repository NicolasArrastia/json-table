import React from "react";

type Props = {
  value: boolean;
};

const BooleanCell = ({ value }: Props) => {
  return (
    <div className="flex justify-center !justify-start items-center">
      {/* <input
        type="checkbox"
        checked={value}
        className={`size-4 appearance-none ring-2 ring-neutral-400 rounded-sm ${
          value ? "bg-green-400" : "bg-red-400"
        }`}
      /> */}
      <input type="checkbox" checked={value} className={`size-4`} />
      {/* {value ? (
        <span className="text-green-400 !text-neutral-100 px-1 rounded-md bg-green-400 font-bold">
          true
        </span>
      ) : (
        <span className="text-red-400 !text-neutral-100 px-1 rounded-md bg-red-400 font-bold">
          false
        </span>
      )} */}
    </div>
  );
};

export default BooleanCell;
