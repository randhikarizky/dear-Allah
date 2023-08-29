import { Surah, Tafsir } from "../../domain/entities/quran.entity";
import { QuranRepository } from "../../domain/repositories/quran.repository";
import { QuranAPI } from "../network/quran.api";
import { SurahRequest } from "../requests/quran.request";

class QuranRepositoryImpl implements QuranRepository {
  async getBySurah(request: SurahRequest): Promise<Surah> {
    return QuranAPI.getBySurah(request);
  }

  async getTafsirBySurah(request: SurahRequest): Promise<Tafsir> {
    return QuranAPI.getTafsirBySurah(request);
  }
}

export const QuranService = Object.freeze(new QuranRepositoryImpl());
