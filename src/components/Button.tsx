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
      <MuiButton
        variant="contained"
        onClick={onClick}
        href={href}
        sx={{
          backgroundColor: "green", 
          width: "100%", 
          fontFamily: "GmarketSans", 
        }}
      >
        {text}
      </MuiButton>
    </div>
  );
};

export default Button;
