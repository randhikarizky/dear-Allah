import PropTypes from "prop-types";
import React, { useMemo } from "react";
// material
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
//
import palette from "./palette";
import typography from "./typography";
import componentsOverride from "./overrides";
import shadows from "./shadows";
import customShadows from "./customShadows";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactElement;
};

export default function ThemeConfig(props: Props) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows,
      customShadows: customShadows(),
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
