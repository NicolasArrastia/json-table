import React from "react";

type Props = {
  value: boolean;
};

const BooleanCell = ({ value }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <input type="checkbox" checked={value} />
    </div>
  );
};

export default BooleanCell;
