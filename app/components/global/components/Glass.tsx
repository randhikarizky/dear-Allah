import { Card, styled } from "@mui/material";
import React from "react";

const GlassBg = styled((props: any) => <Card {...props} />)(({ color }) => ({
  backgroundImage:
    "radial-gradient(at top left, " +
    color[0] +
    ", transparent), radial-gradient(at top right, " +
    color[1] +
    ", transparent), radial-gradient(at bottom left, " +
    color[2] +
    ", transparent)",
  border: "2px solid rgba(255, 255, 255, 1)",
}));

const GlassEffect = styled((props: any) => <Card {...props} />)(
  ({ theme }) => ({
    background: "rgba( 255, 255, 255, 0.25)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "0px",
    height: "50vh",
  })
);

type Props = {
  color: [string, string, string];
  children: React.ReactElement;
};

const Glass = (props: Props) => {
  console.log(props);
  return (
    <GlassBg color={props.color}>
      <GlassEffect>{props.children}</GlassEffect>
    </GlassBg>
  );
};

export default Glass;
