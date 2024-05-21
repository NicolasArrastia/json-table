import React from "react";

type Props = {
  value: number;
};

const NumberCell = ({ value }: Props) => {
  return <span>{value}</span>;
};

export default NumberCell;
