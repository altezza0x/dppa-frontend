import { GalleryCategory, GalleryPhoto, KegiatanCategory, KegiatanEvent } from '@/types/galeri';

// Gallery Categories
export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: 'all', name: 'Semua', count: 0 }, // Will be calculated dynamically
  { id: 'pemberdayaan', name: 'Pemberdayaan Perempuan', count: 0 },
  { id: 'perlindungan', name: 'Perlindungan Anak', count: 0 },
  { id: 'keluarga', name: 'Keluarga Berencana', count: 0 },
  { id: 'kegiatan', name: 'Kegiatan Dinas', count: 0 }
];

// Gallery Photos
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    title: "Workshop Pemberdayaan Ekonomi Perempuan",
    description: "Pelatihan keterampilan dan wirausaha untuk perempuan di Kabupaten Padang Pariaman",
    image: "/images/gallery/workshop-1.jpg",
    category: "pemberdayaan",
    date: "2025-01-20",
    location: "Padang Pariaman",
    views: 245,
    featured: true
  },
  {
    id: 2,
    title: "Sosialisasi Perlindungan Anak dari Kekerasan",
    description: "Edukasi kepada orang tua dan guru tentang pencegahan kekerasan pada anak",
    image: "/images/gallery/sosialisasi-1.jpg",
    category: "perlindungan",
    date: "2025-01-18",
    location: "Bukittinggi",
    views: 189,
    featured: false
  },
  {
    id: 3,
    title: "Program KB Keliling di Daerah Terpencil",
    description: "Layanan keluarga berencana mobile untuk masyarakat di daerah sulit dijangkau",
    image: "/images/gallery/kb-keliling-1.jpg",
    category: "keluarga",
    date: "2025-01-15",
    location: "Mentawai",
    views: 312,
    featured: true
  },
  {
    id: 4,
    title: "Rapat Koordinasi Lintas Sektor",
    description: "Koordinasi dengan instansi terkait untuk sinkronisasi program",
    image: "/images/gallery/rapat-1.jpg",
    category: "kegiatan",
    date: "2025-01-12",
    location: "Padang",
    views: 156,
    featured: false
  },
  {
    id: 5,
    title: "Pelatihan Kader Posyandu",
    description: "Pemberdayaan kader posyandu untuk meningkatkan pelayanan kesehatan ibu dan anak",
    image: "/images/gallery/posyandu-1.jpg",
    category: "pemberdayaan",
    date: "2025-01-10",
    location: "Solok",
    views: 203,
    featured: false
  },
  {
    id: 6,
    title: "Kampanye Stop Perkawinan Anak",
    description: "Sosialisasi pencegahan perkawinan anak di kalangan remaja",
    image: "/images/gallery/kampanye-1.jpg",
    category: "perlindungan",
    date: "2025-01-08",
    location: "Payakumbuh",
    views: 278,
    featured: true
  }
] as const;

// Kegiatan Categories
export const KEGIATAN_CATEGORIES: KegiatanCategory[] = [
  { id: 'all', name: 'Semua', count: 0 }, // Will be calculated dynamically
  { id: 'workshop', name: 'Workshop', count: 0 },
  { id: 'sosialisasi', name: 'Sosialisasi', count: 0 },
  { id: 'rapat', name: 'Rapat Koordinasi', count: 0 },
  { id: 'pelatihan', name: 'Pelatihan', count: 0 }
] as const;

// Kegiatan Events
export const KEGIATAN_EVENTS: KegiatanEvent[] = [
  {
    id: 1,
    title: "Workshop Pemberdayaan Ekonomi Perempuan",
    description: "Pelatihan intensif untuk meningkatkan keterampilan wirausaha perempuan di berbagai sektor ekonomi kreatif dan UMKM",
    image: "/images/gallery/workshop-1.jpg",
    category: "workshop",
    date: "2025-01-20",
    location: "Padang Pariaman",
    participants: 150,
    duration: "2 hari",
    views: 245,
    featured: true
  },
  {
    id: 2,
    title: "Sosialisasi Perlindungan Anak dari Kekerasan",
    description: "Program edukasi komprehensif untuk orang tua, guru, dan masyarakat tentang pencegahan kekerasan pada anak",
    image: "/images/gallery/sosialisasi-1.jpg",
    category: "sosialisasi",
    date: "2025-01-18",
    location: "Bukittinggi",
    participants: 200,
    duration: "1 hari",
    views: 189,
    featured: false
  },
  {
    id: 3,
    title: "Rapat Koordinasi Lintas Sektor",
    description: "Koordinasi strategis dengan berbagai instansi terkait untuk sinkronisasi program pemberdayaan perempuan dan anak",
    image: "/images/gallery/rapat-1.jpg",
    category: "rapat",
    date: "2025-01-15",
    location: "Padang",
    participants: 50,
    duration: "4 jam",
    views: 156,
    featured: false
  },
  {
    id: 4,
    title: "Pelatihan Kader Posyandu",
    description: "Pemberdayaan kader posyandu untuk meningkatkan kualitas pelayanan kesehatan ibu dan anak di tingkat desa",
    image: "/images/gallery/posyandu-1.jpg",
    category: "pelatihan",
    date: "2025-01-12",
    location: "Solok",
    participants: 80,
    duration: "3 hari",
    views: 203,
    featured: true
  },
  {
    id: 5,
    title: "Kampanye Stop Perkawinan Anak",
    description: "Kampanye massal untuk meningkatkan kesadaran masyarakat tentang bahaya perkawinan anak dan pencegahannya",
    image: "/images/gallery/kampanye-1.jpg",
    category: "sosialisasi",
    date: "2025-01-10",
    location: "Payakumbuh",
    participants: 300,
    duration: "1 hari",
    views: 278,
    featured: true
  },
  {
    id: 6,
    title: "Workshop Parenting Positif",
    description: "Pelatihan pola asuh positif untuk orang tua dalam mendidik anak dengan pendekatan yang tepat dan bermartabat",
    image: "/images/gallery/workshop-2.jpg",
    category: "workshop",
    date: "2025-01-08",
    location: "Pesisir Selatan",
    participants: 120,
    duration: "2 hari",
    views: 167,
    featured: false
  }
] as const;