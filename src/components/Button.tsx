import MuiButton from "@mui/material/Button";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  href?: string;
};

const Button = ({ className, text, onClick, href }: ButtonProps) => {
  return (
    <div className={className}>
      <MuiButton variant="contained" onClick={onClick} href={href} className="bg-green flex w-[100%]">
        {text}
      </MuiButton>
    </div>
  );
};

export default Button;
