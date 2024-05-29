import Dropdown from "@/components/Dropdown";
import { useState } from "react";
import React from "react";

export const Selector = ({ options }: { options: string[] }) => {
  const [value, setValue] = useState<null | string>(null);
  return <Dropdown listener={<>value</>}></Dropdown>;
};
