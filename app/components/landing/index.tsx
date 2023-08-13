import {
  Card,
  Container,
  Grid,
  Link,
  Stack,
  Theme,
  Typography,
  colors,
} from "@mui/material";
import { Feeling } from "../global/constants/feeling.constant";
import Glass from "../global/components/Glass";

const LandingPage = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h1">Dear Allah,</Typography>
        <Typography variant="h3">I feel ...</Typography>
        <Grid container spacing={3}>
          {Feeling.map((feel: any) => (
            <Grid key={feel.id} item xs={12} sm={6} md={3}>
              <Glass color={feel.color}>
                <Stack spacing={2} sx={{ p: 3 }}>
                  <Link color="inherit" underline="hover">
                    <Typography variant="subtitle2" noWrap>
                      {feel.title}
                    </Typography>
                  </Link>
                </Stack>
              </Glass>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default LandingPage;
