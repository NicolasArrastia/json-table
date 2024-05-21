import React from "react";

type Props = {
  value: string;
};

const StringCell = ({ value }: Props) => {
  return <div>{value}</div>;
};

export default StringCell;
