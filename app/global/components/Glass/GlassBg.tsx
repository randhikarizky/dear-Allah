import { Card, styled } from "@mui/material";

const GlassGradient = styled((props: any) => <Card {...props} />)(
  ({ color }) => ({
    backgroundImage:
      "radial-gradient(at top left, " +
      color[0] +
      ", transparent), radial-gradient(at top right, " +
      color[1] +
      ", transparent), radial-gradient(at bottom left, " +
      color[2] +
      ", transparent)",
    border: "2px solid rgba(255, 255, 255, 1)",
    borderRadius: "16px",
  })
);

type Props = {
  color: string[];
  children: React.ReactElement;
  sx?: any;
};

const GlassBg = (props: Props) => {
  return <GlassGradient {...props}>{props.children}</GlassGradient>;
};

export default GlassBg;
