import { Card, styled } from "@mui/material";

const GlassEffect = styled((props: any) => <Card {...props} />)(
  ({ theme }) => ({
    background: "rgba( 255, 255, 255, 0.25)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    borderRadius: "0px",
    height: "25rem",
    padding: "2rem",
  })
);

type Props = {
  children: React.ReactElement;
};

const GlassBody = (props: Props) => {
  return <GlassEffect>{props.children}</GlassEffect>;
};

export default GlassBody;
