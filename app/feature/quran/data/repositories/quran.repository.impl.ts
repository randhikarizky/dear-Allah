import { QuranRepository } from "../../domain/repositories/quran.repository";
import { QuranAPI } from "../network/quran.api";
import { SurahRequest } from "../requests/quran.request";

class QuranRepositoryImpl implements QuranRepository {
  getBySurah(request: SurahRequest): Promise<any> {
    return QuranAPI.getBySurah(request);
  }
}

export const QuranService = Object.freeze(new QuranRepositoryImpl());
