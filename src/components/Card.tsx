import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="flex flex-col w-full max-w-[420px] px-10 mx-auto">
      <div className="card-container py-[28px]">{children}</div>
    </div>
  );
};

export default Card;
