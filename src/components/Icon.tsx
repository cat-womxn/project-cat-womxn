import Image from "next/image";

type IconProps = {
  src: string;
  alt: string;
  url: string;
};

const Icon = ({ src, alt }: IconProps) => {
  return (
    <Image
      className="rounded-full"
      src={src}
      alt={alt}
      width={50}
      height={50}
    />
  );
};

export default Icon;
