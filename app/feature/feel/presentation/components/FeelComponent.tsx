import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Container } from "@mui/material";
import { useGetQuranBySurah } from "@/app/feature/quran/presentation/controller/quran.controller";

const FeelComponent = () => {
  const router = useRouter();

  const [surah, setSurah] = useState("");
  const [verse, setVerse] = useState("");

  const Surah = useGetQuranBySurah({ surah: surah });

  useEffect(() => {
    if (router.query?.verse !== "") {
      const string = new String(router.query?.verse);
      const surah = string?.split(":");
      setSurah(surah[0]);
      setVerse(surah[1]);
    }
  }, [router.query?.verse]);

  useEffect(() => {
    if (surah !== "") {
      Surah.refetch();
    }
  }, [surah]);

  return (
    <>
      <Container></Container>
    </>
  );
};

export default FeelComponent;
