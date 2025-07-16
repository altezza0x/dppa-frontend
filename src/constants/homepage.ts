import { 
  Shield, 
  Users, 
  Scale, 
  FileCheck, 
  FileText, 
  Calendar, 
  Megaphone,
  TrendingUp,
  BarChart3
} from 'lucide-react';

export const LAYANAN_PUBLIK = [
  { nama: 'Pengaduan Kekerasan', icon: Shield, link: '/layanan/pengaduan-kekerasan' },
  { nama: 'Konsultasi KB', icon: Users, link: '/layanan/konsultasi-kb' },
  { nama: 'Bantuan Hukum Anak', icon: Scale, link: '/layanan/bantuan-hukum-anak' },
  { nama: 'Perizinan Online', icon: FileCheck, link: '/layanan/perizinan-online' },
] as const;

export const AGENDA_KEGIATAN = [
  { tanggal: '15 Jul', judul: 'Sosialisasi Program KB', waktu: '09:00 WIB', lokasi: 'Aula Kantor Dinas' },
  { tanggal: '18 Jul', judul: 'Pelatihan Kader Posyandu', waktu: '13:00 WIB', lokasi: 'Gedung Serbaguna' },
  { tanggal: '22 Jul', judul: 'Seminar Perlindungan Anak', waktu: '09:00 WIB', lokasi: 'Hotel Grand Zuri' },
] as const;

export const STATISTIK_PENGUNJUNG = [
  { jumlah: '1,234', label: 'Hari Ini', icon: Users },
  { jumlah: '5,678', label: 'Minggu Ini', icon: TrendingUp },
  { jumlah: '15,234', label: 'Bulan Ini', icon: BarChart3 },
  { jumlah: '256,789', label: 'Total', icon: Users },
] as const;

export const ARTICLES = [
  {
    title: "Renstra Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana 2021-2026",
    date: "13 Juni 2025 09:08:27 WIB",
    author: "Administrator DPPA",
    views: 380,
    category: "Program",
    excerpt: "Dokumen Rencana Strategis (Renstra) ini merupakan dokumen perencanaan jangka menengah yang menjadi pedoman dalam pelaksanaan program dan kegiatan..."
  },
  {
    title: "Perjanjian Kinerja DP3AP2KB Tahun 2024",
    date: "13 Juni 2025 09:03:00 WIB",
    author: "Administrator DPPA",
    views: 381,
    category: "Program",
    excerpt: "Perjanjian Kinerja merupakan lembar atau dokumen yang berisikan penugasan dari pimpinan instansi yang lebih tinggi kepada pimpinan instansi di bawahnya..."
  },
  {
    title: "Kegiatan Sosialisasi Pencegahan Kekerasan Terhadap Perempuan dan Anak",
    date: "10 Juni 2025 11:30:15 WIB",
    author: "Tim Lapangan",
    views: 542,
    category: "Berita",
    excerpt: "Sosialisasi ini bertujuan untuk meningkatkan kesadaran masyarakat tentang pentingnya peran serta aktif dalam upaya pencegahan kekerasan terhadap perempuan dan anak."
  }
] as const;

export const HERO_SERVICES = [
  { icon: FileCheck, label: "E-Perizinan", desc: "Layanan perizinan online" },
  { icon: Users, label: "Bantuan KB", desc: "Program keluarga berencana" },
  { icon: Shield, label: "Perlindungan", desc: "Perlindungan anak & perempuan" },
  { icon: Calendar, label: "Agenda Kegiatan", desc: "Jadwal kegiatan dinas" }
] as const;

export const LAYANAN_DIGITAL = [
  { href: "/layanan/e-ktp", icon: FileText, label: "e-KTP Online" },
  { href: "/layanan/perizinan-online", icon: FileCheck, label: "Perizinan Online" },
  { href: "/layanan/bantuan-sosial", icon: Users, label: "Bantuan Sosial" },
  { href: "/layanan/pengaduan-kekerasan", icon: Megaphone, label: "Pengaduan Kekerasan" },
] as const;
