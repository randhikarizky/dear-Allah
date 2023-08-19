export interface Surah {
  nomor: number;
  jumlahAyat: number;
  nama: string;
  namaLatin: string;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: {
    "01"?: string;
    "02"?: string;
    "03"?: string;
    "04"?: string;
    "05"?: string;
  };
  ayat: {
    nomorAyat: number;
    teksArab: string;
    teksLatin: string;
    teksIndonesia: string;
    audio: {
      "01"?: string;
      "02"?: string;
      "03"?: string;
      "04"?: string;
      "05"?: string;
    };
  }[];
  suratSelanjutnya: {
    nomor: number;
    jumlahAyat: number;
    nama: string;
    namaLatin: string;
  };
  suratSebelumnya: {
    nomor: number;
    jumlahAyat: number;
    nama: string;
    namaLatin: string;
  };
}
