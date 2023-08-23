import { api } from "@/app/global/data/network/axios";
import { Surah } from "../../domain/entities/quran.entity";
import { SurahRequest } from "../requests/quran.request";
import { SingleDTO } from "@/app/global/data/responses/raw.response";

export const QuranAPI = {
  async getBySurah(request: SurahRequest): Promise<Surah> {
    const response = await api.get<SingleDTO<Surah>>(`/surat/${request.surah}`);

    const { data } = response.data;

    return {
      arti: data.arti,
      audioFull: data.audioFull,
      ayat: data.ayat,
      deskripsi: data.deskripsi,
      jumlahAyat: data.jumlahAyat,
      nama: data.nama,
      namaLatin: data.namaLatin,
      nomor: data.nomor,
      suratSebelumnya: data.suratSebelumnya,
      suratSelanjutnya: data.suratSelanjutnya,
      tempatTurun: data.tempatTurun,
    };
  },
};
