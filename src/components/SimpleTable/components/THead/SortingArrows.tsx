import { SortUp, Sorting } from "@/assets/svg";
import SVGIcon from "@/components/SVGIcon";
import { Header } from "@tanstack/react-table";

type SortingArrowsProps = { header: Header<any, unknown> };

const SortingArrows = ({ header }: SortingArrowsProps) => {
  return (
    <>
      {header.column.getIsSorted() ? (
        <>
          {
            {
              asc: (
                <SVGIcon
                  src={SortUp}
                  size={"1.6rem"}
                  className={"bg-neutral-800 -translate-y-1"}
                />
              ),
              desc: (
                <SVGIcon
                  src={SortUp}
                  size={"1.6rem"}
                  className={"bg-neutral-800 translate-y-1 rotate-180"}
                />
              ),
            }[header.column.getIsSorted() as string]
          }
        </>
      ) : (
        <SVGIcon
          src={Sorting}
          size={"1.6rem"}
          className={"opacity-0 group-hover:opacity-100 bg-neutral-500 hover"}
        />
      )}
    </>
  );
};

export default SortingArrows;
