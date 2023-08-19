import { useRouter } from "next/router";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import Glass from "@/app/global/components/Glass";
import { Feeling } from "@/app/global/constants/feeling.constant";

const LandingPage = () => {
  const router = useRouter();

  const go = (param: string) => {
    return router.push({
      pathname: "/feel",
      query: { verse: param },
    });
  };

  return (
    <>
      <Container maxWidth="xl">
        <Stack alignItems="center" direction="column" mb={5} gap={1}>
          <Typography variant="h1" gutterBottom={false}>
            Dear Allah,
          </Typography>
          <h3>I feel ...</h3>
        </Stack>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {Feeling.map((feel: any) => (
            <Grid
              key={feel.id}
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                transition: "all ease-in-out .2s",
                "&:hover": {
                  transform: "scale(1.05)",
                  cursor: "pointer",
                },
              }}
              onClick={() => go(feel.verse)}
            >
              <Glass color={feel.color}>
                <>
                  <Box
                    sx={{
                      height: "70%",
                    }}
                  />
                  <Typography
                    variant="h2"
                    align="center"
                    sx={{
                      color: "rgba(0,0,0, 0.6)",
                    }}
                  >
                    {feel.title}
                  </Typography>
                </>
              </Glass>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default LandingPage;
