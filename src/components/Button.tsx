import MuiButton from "@mui/material/Button";

type ButtonProps = {
  className?: string;
  text: string;
  href: string;
};

const Button = ({ className, text, href }: ButtonProps) => {
  return (
    <div className={className}>
      <MuiButton variant="contained" href={href} className="bg-green flex">
        {text}
      </MuiButton>
    </div>
  );
};

export default Button;
