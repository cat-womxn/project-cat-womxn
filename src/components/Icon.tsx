import { Button } from "@mui/material";
import Image from "next/image";

type IconProps = {
  src: string;
  alt: string;
  onClick?: () => void;
};

const Icon = ({ src, alt, onClick }: IconProps) => {
  return (
    <Button onClick={onClick}>
      <Image
        className="rounded-full"
        src={src}
        alt={alt}
        width={50}
        height={50}
      />
    </Button>
  );
};

export default Icon;
