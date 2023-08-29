import { SurahRequest } from "../../data/requests/quran.request";
import { Surah, Tafsir } from "../entities/quran.entity";

export interface QuranRepository {
  getBySurah(request: SurahRequest): Promise<Surah>;
  getTafsirBySurah(request: SurahRequest): Promise<Tafsir>;
}
