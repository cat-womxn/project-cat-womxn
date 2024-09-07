import MuiButton from "@mui/material/Button";

type ButtonProps = {
  text: string;
  href: string;
};

const Button = ({ text, href }: ButtonProps) => {
  return (
    <div className="flex justify-center my-2">
      <MuiButton variant="contained" href={href} className="bg-green mb-4">
        {text}
      </MuiButton>
    </div>
  );
};

export default Button;
