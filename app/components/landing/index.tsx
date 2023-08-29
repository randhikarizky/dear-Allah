import { useRouter } from "next/router";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { Feeling } from "@/app/global/constants/feeling.constant";
import GlassBg from "@/app/global/components/Glass/GlassBg";
import GlassBody from "@/app/global/components/Glass/GlassBody";

const LandingPage = () => {
  const router = useRouter();

  const go = (name: string, param: string, color: [string, string, string]) => {
    return router.push(
      {
        pathname: "/feel",
        query: { name: name, verse: param, color: color },
      },
      "/feel"
    );
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: "2rem" }}>
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
              onClick={() => go(feel.title, feel.verse, feel.color)}
            >
              <GlassBg color={feel.color}>
                <GlassBody>
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
                </GlassBody>
              </GlassBg>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default LandingPage;
