import { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  size: string;
  className: string;
};

const SVGIcon = ({ src, size, className }: Props) => {
  return (
    <div
      className={className}
      style={{
        maskImage: `url(${src.src})`,
        maskSize: size,

        backgroundPosition: "center",
        backgroundSize: "cover",

        width: size,
        height: size,
      }}
    />
  );
};

export default SVGIcon;
