export interface LayananPublik {
  nama: string;
  icon: any;
  link: string;
}

export interface AgendaKegiatan {
  tanggal: string;
  judul: string;
  waktu: string;
  lokasi: string;
}

export interface StatistikPengunjung {
  jumlah: string;
  label: string;
  icon: any;
}

export interface Article {
  title: string;
  date: string;
  author: string;
  views: number;
  category: string;
  excerpt: string;
}

export interface HeroService {
  icon: any;
  label: string;
  desc: string;
}

export interface LayananDigital {
  href: string;
  icon: any;
  label: string;
}
