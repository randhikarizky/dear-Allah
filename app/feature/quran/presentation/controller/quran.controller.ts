import { useQuery } from "@tanstack/react-query";
import { QuranService } from "../../data/repositories/quran.repository.impl";
import { SurahRequest } from "../../data/requests/quran.request";
import { useEffect } from "react";

export const useGetQuranBySurah = (request: SurahRequest) => {
  const controller = useQuery(
    ["get-surah", request],
    () => QuranService.getBySurah(request),
    {
      enabled: false,
      retry: false,
    }
  );

  useEffect(() => {
    if (controller?.isError) {
      console.error("Failed to get Surah!");
    }
  }, [controller.isError]);

  return controller;
};
