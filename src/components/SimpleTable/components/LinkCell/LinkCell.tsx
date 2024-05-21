import Link from "next/link";
import React, {
  AnchorHTMLAttributes,
  HTMLAttributeAnchorTarget,
  HTMLAttributes,
} from "react";

type Props = {
  value: string;
  options?: any;
};
const LinkCell = ({ value }: Props) => {
  return (
    <Link
      className="text-blue-600 font-medium italic"
      href={value}
      target="_blank"
    >
      {value}
    </Link>
  );
};

export default LinkCell;
