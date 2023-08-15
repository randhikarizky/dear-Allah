import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Feeling } from "../global/constants/feeling.constant";
import Glass from "../global/components/Glass";

const LandingPage = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Stack alignItems="center" direction="column" mb={5}>
          <Typography variant="h1" gutterBottom={false}>
            Dear Allah
          </Typography>
          <Typography variant="h3">I feel ...</Typography>
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
