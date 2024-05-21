import React from "react";

type Props = {
  value: any[];
};

const ArrayCell = ({ value }: Props) => {
  console.log(value);
  return (
    <div className="flex">
      {value.map((value, index) => (
        <span
          key={index}
          className="py-1 px-2 bg-blue-400 rounded-md text-[0.8rem]"
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default ArrayCell;
