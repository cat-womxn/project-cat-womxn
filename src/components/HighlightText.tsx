import { ReactNode, CSSProperties } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

type HighlightTextProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Text = styled(Typography)(() => ({
  fontFamily: "GmarketSans",
}));

const HighlightText = ({
  children,
  className,
  style = {},
}: HighlightTextProps) => (
  <Text className={className} style={style}>
    {children}
  </Text>
);

export default HighlightText;
