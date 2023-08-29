import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  Box,
  Chip,
  Container,
  Divider,
  Fade,
  Grow,
  Icon,
  IconButton,
  Skeleton,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import {
  useGetQuranBySurah,
  useGetTafsirBySurah,
} from "@/app/feature/quran/presentation/controller/quran.controller";
import GlassBg from "@/app/global/components/Glass/GlassBg";

const Section = styled("div")(({ theme }) => ({
  display: "flex",
  // alignItems: "center",
}));

const FeelComponent = () => {
  const router = useRouter();

  const [feeling, setFeeling] = useState("");
  const [surah, setSurah] = useState("");
  const [verse, setVerse] = useState("");

  const [colorScheme, setColorScheme] = useState<string[]>([]);

  const Surah = useGetQuranBySurah({ surah: surah });
  const Tafsir = useGetTafsirBySurah({ surah: surah });

  const handlePlay = () => {};

  const handleReturn = () => {
    setSurah("");
    setVerse("");
    setColorScheme([]);

    return router.push("/landing");
  };

  useEffect(() => {
    if (router.query?.verse !== "") {
      const string = new String(router.query?.verse);
      const surah = string?.split(":");
      setSurah(surah[0]);
      setVerse(surah[1]);
    }

    if (router.query?.color?.length === 3) {
      const color: any = router.query?.color;

      if (color?.length === 3) {
        setColorScheme(color);
      }
    }

    if (router.query?.name !== "") {
      const feel: any = router.query?.name;

      setFeeling(feel);
    }
  }, [router.query]);

  useEffect(() => {
    if (surah !== "") {
      Tafsir.refetch();
      Surah.refetch();
    }
  }, [surah]);

  return (
    <>
      <Section
        sx={{
          minHeight: "85vh",
        }}
      >
        <Container maxWidth="sm">
          <Stack direction="row" mb={5} mt={5} gap={2}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={() => handleReturn()}>
                <Icon
                  baseClassName="fas"
                  className="fa-left-long"
                  sx={{ fontSize: "1.2rem", color: "black", opacity: ".5" }}
                />
              </IconButton>
            </Box>
            <Box>
              <Typography variant="h3" align="left" color={colorScheme[1]}>
                {feeling}
              </Typography>
            </Box>
          </Stack>
          {/* Title */}
          <GlassBg
            color={colorScheme}
            sx={{
              padding: "2rem",
              textAlign: "center",
              border: "none",
              boxShadow:
                colorScheme.length === 3
                  ? `0 8px 16px 0 ${alpha(colorScheme[1], 0.5)}`
                  : "",
            }}
          >
            <Stack
              direction="column"
              gap={3}
              divider={
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{ borderColor: "rgba(255,255,255, 0.5)" }}
                />
              }
            >
              <Box>
                {Surah.isLoading ? (
                  <Fade in={Surah.isLoading}>
                    <Skeleton height={115} animation="wave" variant="rounded" />
                  </Fade>
                ) : (
                  <>
                    <Typography
                      variant="h3"
                      align="center"
                      sx={{
                        color: "rgba(255,255,255)",
                        fontWeight: "500",
                        marginBottom: ".5rem",
                      }}
                    >
                      {Surah.data?.nama}
                    </Typography>
                    <Typography
                      variant="h1"
                      align="center"
                      sx={{
                        color: "rgba(255,255,255)",
                      }}
                    >
                      {Surah.data?.namaLatin}
                    </Typography>
                    <Typography
                      variant="h5"
                      align="center"
                      sx={{
                        color: "rgba(255,255,255, .75)",
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: "500",
                      }}
                    >
                      {Surah.data?.arti}
                    </Typography>
                  </>
                )}
              </Box>
              <Box>
                <Stack
                  direction="row"
                  justifyContent="center"
                  gap={2}
                  divider={
                    <Divider
                      orientation="vertical"
                      flexItem
                      variant="middle"
                      sx={{ borderColor: "rgba(255,255,255, 0.5)" }}
                    />
                  }
                >
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{
                      color: "rgba(255,255,255, .75)",
                      fontWeight: "400",
                    }}
                  >
                    {Surah.isLoading ? (
                      <Fade in={Surah.isLoading}>
                        <Skeleton animation="wave" variant="text" width={50} />
                      </Fade>
                    ) : (
                      Surah.data?.tempatTurun
                    )}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{
                      color: "rgba(255,255,255, .75)",
                      fontWeight: "400",
                    }}
                  >
                    {Surah.isLoading ? (
                      <Fade in={Surah.isLoading}>
                        <Skeleton animation="wave" variant="text" width={200} />
                      </Fade>
                    ) : (
                      `Ayat ke ${verse} dari ${Surah.data?.jumlahAyat} Ayat`
                    )}
                  </Typography>
                </Stack>
                <Typography
                  variant="h3"
                  align="center"
                  sx={{
                    color: "rgba(255,255,255)",
                    fontWeight: "500",
                    marginTop: "1.5rem",
                  }}
                >
                  بِسْــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
                </Typography>
              </Box>
            </Stack>
          </GlassBg>
          {/* Verse */}
          <Box sx={{ marginTop: "3rem", marginBottom: "3rem" }} />
          <Stack gap={4} mb={5}>
            <Box
              sx={{
                padding: "1rem",
                borderRadius: "12px",
                background:
                  colorScheme.length === 3
                    ? `${alpha(colorScheme[2], 0.25)}`
                    : "",
              }}
            >
              <Stack direction="row" justifyContent="space-between">
                <Box>
                  <Chip
                    label={verse}
                    variant="filled"
                    sx={{
                      fontWeight: "700",
                      color: "white",
                      background:
                        colorScheme.length === 3 ? `${colorScheme[1]}` : "",
                    }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {/* <IconButton onClick={() => handlePlay()}>
                  <Icon
                    baseClassName="fas"
                    className="fa-play"
                    sx={{
                      fontSize: "1rem",
                      color:
                        colorScheme.length === 3 ? `${colorScheme[1]}` : "",
                    }}
                  />
                </IconButton> */}
                </Box>
              </Stack>
            </Box>

            {/* Ayat */}
            <Box>
              {Surah.isLoading ? (
                <Fade in={Surah.isLoading}>
                  <Skeleton
                    height={50}
                    animation="wave"
                    variant="rounded"
                    sx={{ marginBottom: "2rem" }}
                  />
                </Fade>
              ) : (
                <Grow in={Surah.isSuccess}>
                  <Typography
                    variant="h3"
                    align="right"
                    sx={{
                      fontWeight: "500",
                      marginBottom: "2rem",
                    }}
                  >
                    {Surah.data?.ayat?.[Number(verse) - 1]?.teksArab}
                  </Typography>
                </Grow>
              )}
              {Surah.isLoading ? (
                <Fade in={Surah.isLoading}>
                  <Skeleton
                    height={75}
                    animation="wave"
                    variant="rounded"
                    sx={{ marginBottom: "2rem" }}
                  />
                </Fade>
              ) : (
                <Grow in={Surah.isSuccess}>
                  <Typography
                    variant="body1"
                    align="justify"
                    sx={{
                      color: "rgba(0,0,0, .5)",
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: "400",
                      marginBottom: ".5rem",
                    }}
                  >
                    Artinya: "
                    {Surah.data?.ayat?.[Number(verse) - 1]?.teksIndonesia}"
                  </Typography>
                </Grow>
              )}
            </Box>
          </Stack>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ borderColor: "rgba(0,0,0, 0.25)" }}
          />

          {/* Tafsir */}
          <Box
            sx={{
              marginTop: "3rem",
              padding: "1rem",
              borderRadius: "12px",
              background:
                colorScheme.length === 3
                  ? `${alpha(colorScheme[0], 0.25)}`
                  : "",
            }}
          >
            <Stack direction="column" gap={3}>
              <Box>
                <Chip
                  label="Penjelasan Ayat"
                  variant="filled"
                  sx={{
                    fontWeight: "700",
                    color: "white",
                    background:
                      colorScheme.length === 3 ? `${colorScheme[0]}` : "",
                  }}
                />
              </Box>
              <Box>
                {Surah.isLoading ? (
                  <Fade in={Surah.isLoading}>
                    <Skeleton height={200} animation="wave" variant="rounded" />
                  </Fade>
                ) : (
                  <Grow in={Surah.isSuccess}>
                    <Typography
                      variant="subtitle2"
                      align="justify"
                      sx={{
                        color: "rgba(0,0,0, .5)",
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: "500",
                        textIndent: "2rem",
                      }}
                    >
                      {Tafsir.data?.tafsir?.[Number(verse) - 1].teks
                        ?.replaceAll("saw", "SAW")
                        ?.replaceAll("swt", "SWT")}
                    </Typography>
                  </Grow>
                )}
              </Box>
            </Stack>
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default FeelComponent;
