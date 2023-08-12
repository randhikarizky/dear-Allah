import {
  Card,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
  colors,
} from "@mui/material";
import { Feeling } from "../global/constants/feeling.constant";

const LandingPage = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h1">Dear Allah,</Typography>
        <Typography variant="h3">I feel ...</Typography>
        <Grid container spacing={3}>
          {Feeling.map((feel: any) => (
            <Grid key={feel.id} item xs={12} sm={6} md={3}>
              <Card>
                <Stack spacing={2} sx={{ p: 3 }}>
                  <Link color="inherit" underline="hover">
                    <Typography variant="subtitle2" noWrap>
                      {feel.title}
                    </Typography>
                  </Link>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default LandingPage;
