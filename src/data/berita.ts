import { 
  Filter, 
  Newspaper, 
  Megaphone, 
  FileText, 
  Calendar, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Clock, 
  MapPin, 
  Shield, 
  Scale, 
  FileCheck, 
  AlertCircle, 
  FileBarChart 
} from "lucide-react";

// Kategori berita
export const kategoriList = [
  { key: "all", label: "Semua", icon: Filter },
  { key: "berita", label: "Berita", icon: Newspaper },
  { key: "pengumuman", label: "Pengumuman", icon: Megaphone },
  { key: "program", label: "Program", icon: FileText },
  { key: "kegiatan", label: "Kegiatan", icon: Calendar },
  { key: "utama", label: "Berita Utama", icon: TrendingUp },
];

// Data berita
export const beritaList = [
  {
    id: 1,
    title: "Rencana Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana 2021-2026",
    date: "13 Juli 2025",
    excerpt: "Rencana strategis untuk pemberdayaan perempuan dan perlindungan anak dalam periode 2021-2026 yang mencakup berbagai program inovatif dan berkelanjutan untuk meningkatkan kualitas hidup masyarakat Sumatera Barat.",
    image: "/images/berita1.jpg",
    link: "/berita/1",
    kategori: ["utama", "program"],
    views: 389,
    badge: "Program",
  },
  {
    id: 2,
    title: "PERJANJIAN KINERJA DP3AP2KB TAHUN 2024",
    date: "13 Juli 2025",
    excerpt: "Komitmen kinerja untuk tahun 2024 dalam memaksimalkan berbagai program pemberdayaan.",
    image: "/images/berita2.jpg",
    link: "/berita/2",
    kategori: ["program"],
    views: 423,
    badge: "Program",
  },
  {
    id: 3,
    title: "Rencana Aksi DP3AP2KB Tahun 2024",
    date: "13 Juli 2025",
    excerpt: "Rencana aksi strategis untuk implementasi program prioritas dalam tahun berjalan.",
    image: "/images/berita3.jpg",
    link: "/berita/3",
    kategori: ["program"],
    views: 348,
    badge: "Program",
  },
  {
    id: 4,
    title: "Sosialisasi Sistem Informasi Gender dan Anak",
    date: "10 Juli 2025",
    excerpt: "Sosialisasi sistem untuk pelaporan gender dan anak sebagai bagian dari digitalisasi program pemerintah.",
    image: "/images/berita4.jpg",
    link: "/berita/4",
    kategori: ["kegiatan"],
    views: 210,
    badge: "Kegiatan",
  },
  {
    id: 5,
    title: "Workshop Perlindungan Anak dari Kekerasan Online",
    date: "10 Juli 2025",
    excerpt: "Workshop untuk meningkatkan kapasitas pendamping dan masyarakat dalam perlindungan anak dari kekerasan online.",
    image: "/images/berita5.jpg",
    link: "/berita/5",
    kategori: ["kegiatan"],
    views: 165,
    badge: "Kegiatan",
  },
  {
    id: 6,
    title: "Pengumuman Seleksi Calon Konselor KB Tingkat Daerah",
    date: "9 Juli 2025",
    excerpt: "Pengumuman seleksi untuk calon konselor KB tingkat daerah, silakan mendaftar melalui website resmi.",
    image: "/images/berita6.jpg",
    link: "/berita/6",
    kategori: ["pengumuman"],
    views: 98,
    badge: "Pengumuman",
  },
  {
    id: 7,
    title: "Program Pelatihan Kewirausahaan untuk Perempuan",
    date: "8 Juli 2025",
    excerpt: "Program pelatihan kewirausahaan khusus untuk pemberdayaan ekonomi perempuan di Sumatera Barat.",
    image: "/images/berita7.jpg",
    link: "/berita/7",
    kategori: ["program", "kegiatan"],
    views: 234,
    badge: "Program",
  },
];

// Statistik pengunjung
export const statistikPengunjung = [
  {
    id: 1,
    jumlah: "1,234",
    label: "Pengunjung Hari Ini",
    icon: Users
  },
  {
    id: 2,
    jumlah: "5,678",
    label: "Pengunjung Minggu Ini",
    icon: TrendingUp
  },
  {
    id: 3,
    jumlah: "15,234",
    label: "Pengunjung Bulan Ini",
    icon: BarChart3
  },
  {
    id: 4,
    jumlah: "256,789",
    label: "Total Pengunjung",
    icon: Users
  }
];

// Agenda kegiatan
export const agendaKegiatan = [
  {
    id: 1,
    tanggal: "22",
    bulan: "Jul",
    judul: "Sosialisasi Program KB",
    waktu: "09:00 WIB",
    lokasi: "Aula Kantor Dinas",
  },
  {
    id: 2,
    tanggal: "25",
    bulan: "Jul",
    judul: "Pelatihan Kader Posyandu",
    waktu: "13:00 WIB",
    lokasi: "Gedung Serbaguna",
  },
  {
    id: 3,
    tanggal: "28",
    bulan: "Jul",
    judul: "Seminar Perlindungan Anak",
    waktu: "09:00 WIB",
    lokasi: "Hotel Grand Zuri",
  },
];

// Layanan publik
export const layananPublik = [
  {
    id: 1,
    nama: "Pengaduan Kekerasan",
    deskripsi: "Layanan pengaduan kasus kekerasan terhadap perempuan dan anak",
    link: "/layanan/pengaduan-kekerasan",
    icon: Shield,
  },
  {
    id: 2,
    nama: "Konsultasi KB",
    deskripsi: "Konsultasi program keluarga berencana",
    link: "/layanan/konsultasi-kb",
    icon: Users,
  },
  {
    id: 3,
    nama: "Bantuan Hukum Anak",
    deskripsi: "Layanan bantuan hukum untuk kasus anak",
    link: "/layanan/bantuan-hukum-anak",
    icon: Scale,
  },
  {
    id: 4,
    nama: "Perizinan Online",
    deskripsi: "Layanan perizinan secara online",
    link: "/layanan/perizinan-online",
    icon: FileCheck,
  },
];

// Informasi publik
export const informasiPublik = [
  {
    id: 1,
    nama: "Informasi Berkala",
    deskripsi: "Informasi yang wajib disediakan dan diumumkan secara berkala",
    link: "/ppid/informasi-berkala",
    icon: Clock,
  },
  {
    id: 2,
    nama: "Informasi Serta Merta",
    deskripsi: "Informasi yang wajib diumumkan secara serta merta",
    link: "/ppid/informasi-serta-merta",
    icon: AlertCircle,
  },
  {
    id: 3,
    nama: "Informasi Setiap Saat",
    deskripsi: "Informasi yang wajib tersedia setiap saat",
    link: "/ppid/informasi-setiap-saat",
    icon: Calendar,
  },
  {
    id: 4,
    nama: "Laporan Akses Informasi",
    deskripsi: "Laporan akses informasi publik",
    link: "/ppid/laporan-akses-informasi",
    icon: FileBarChart,
  },
];
