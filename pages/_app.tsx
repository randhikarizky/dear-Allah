import { AppProps } from "next/app";
import React from "react";
import ThemeConfig from "@/assets/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "@/assets/theme/globalStyles";
import { styled } from "@mui/material";

const RootStyle = styled("div")(() => ({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
}));

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
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
              <Component {...pageProps} />
            </MainStyle>
          </RootStyle>
        </QueryClientProvider>
      </ThemeConfig>
    </>
  );
};

export default App;
