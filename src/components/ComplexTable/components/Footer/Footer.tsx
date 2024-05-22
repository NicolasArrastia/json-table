import React from "react";

type Props = {
  total: number;
};

const Footer = ({ total }: Props) => {
  return <span className="font-semibold">Total Rows: {total}</span>;
};

export default Footer;
