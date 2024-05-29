import React, { useState, useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  listener: React.ReactNode;
};

const Dropdown = ({ listener, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      onClick={() => setIsOpen((prev) => !prev)}
      className="relative"
    >
      {listener}
      <div
        className={`absolute top-[130%] left-0 ${isOpen ? "block" : "hidden"}`}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
