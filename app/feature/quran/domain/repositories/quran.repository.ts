import { SurahRequest } from "../../data/requests/quran.request";

export interface QuranRepository {
  getBySurah(request: SurahRequest): Promise<any>;
}
