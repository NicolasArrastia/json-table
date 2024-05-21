import React from "react";

type Props = {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  onClick: () => void;
};

const Button = ({ children, type = "primary", onClick }: Props) => {
  return (
    <div
      className={`py-1 px-2 rounded-md 
      border-blue-600
      font-medium
      ${type === "primary" ? "bg-blue-600  text-neutral-50" : "border-2 "}}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
