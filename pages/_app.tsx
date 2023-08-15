import { AppProps } from "next/app";
import React from "react";
import ThemeConfig from "@/assets/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "@/assets/theme/globalStyles";
import {
  AppBar,
  Box,
  Link,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";

import "@/assets/css/global.css";
import ScrollTop from "@/app/components/global/components/ScrollToTop";

const RootStyle = styled("div")(() => ({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
}));

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  backgroundColor: theme.palette.grey[100],
  paddingBottom: theme.spacing(10),
  // paddingTop: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const Footer = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  color: theme.palette.grey[600],
}));

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <ThemeConfig>
        <QueryClientProvider client={queryClient}>
          <RootStyle>
            <MainStyle>
              <ReactQueryDevtools />
              <GlobalStyles />
              <Toolbar id="back-to-top-anchor" />
              <ScrollTop />
              <Component {...pageProps} />
            </MainStyle>
          </RootStyle>
          <Footer
            position="static"
            sx={{ top: "auto", bottom: 0, padding: ".5rem" }}
          >
            <Typography variant="subtitle2" align="center">
              © 2023 Dear Allah Project · Created by{" "}
              <Link
                href="https://www.linkedin.com/in/randhikar"
                color="inherit"
                target="_blank"
                underline="hover"
              >
                Randhika Rizkyaldi
              </Link>
            </Typography>
          </Footer>
        </QueryClientProvider>
      </ThemeConfig>
    </>
  );
};

export default App;
