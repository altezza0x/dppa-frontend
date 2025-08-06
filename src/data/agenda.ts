export interface AgendaItem {
  id: number;
  tanggal: string;
  hari: string;
  waktu: string;
  judul: string;
  lokasi: string;
  kategori: string;
  peserta: string;
  deskripsi: string;
  status: 'akan-datang' | 'berlangsung' | 'selesai';
  organizer: string;
  kontak?: string;
  registrasi?: string;
  featured?: boolean;
  maxPeserta?: number;
  currentPeserta?: number;
}

export const AGENDA_CATEGORIES = [
  { id: 'semua', name: 'Semua', color: 'emerald' },
  { id: 'sosialisasi', name: 'Sosialisasi', color: 'emerald' },
  { id: 'workshop', name: 'Workshop', color: 'blue' },
  { id: 'seminar', name: 'Seminar', color: 'purple' },
  { id: 'pelatihan', name: 'Pelatihan', color: 'orange' },
  { id: 'rapat', name: 'Rapat', color: 'gray' },
  { id: 'evaluasi', name: 'Evaluasi', color: 'pink' },
] as const;

export const AGENDA_EVENTS: AgendaItem[] = [
  {
    id: 1,
    tanggal: "2025-08-07",
    hari: "Kamis",
    waktu: "09:00 WIB",
    judul: "Sosialisasi Program KB Terbaru 2025",
    lokasi: "Aula Kantor Dinas DP3AP2KB",
    kategori: "sosialisasi",
    peserta: "150+ peserta",
    deskripsi: "Program sosialisasi mengenai inovasi terbaru dalam layanan Keluarga Berencana untuk meningkatkan kesadaran masyarakat dan penerapan teknologi dalam pelayanan KB modern",
    status: "akan-datang",
    organizer: "Dinas DP3AP2KB Sumbar",
    kontak: "0751-7051234",
    registrasi: "https://dpppa.sumbarprov.go.id/register/kb-2025",
    featured: true,
    maxPeserta: 200,
    currentPeserta: 145
  },
  {
    id: 2,
    tanggal: "2025-08-09",
    hari: "Sabtu",
    waktu: "13:00 WIB",
    judul: "Workshop Perlindungan Anak dari Kekerasan Digital",
    lokasi: "Gedung Serbaguna Padang",
    kategori: "workshop",
    peserta: "100+ peserta",
    deskripsi: "Pelatihan untuk meningkatkan kesadaran masyarakat tentang perlindungan anak dari bahaya digital, cyberbullying, dan pencegahan kekerasan online",
    status: "akan-datang",
    organizer: "Dinas DP3AP2KB Sumbar",
    kontak: "0751-7051234",
    registrasi: "https://dpppa.sumbarprov.go.id/register/workshop-anak",
    featured: true,
    maxPeserta: 120,
    currentPeserta: 85
  },
  {
    id: 3,
    tanggal: "2025-08-12",
    hari: "Selasa",
    waktu: "10:00 WIB",
    judul: "Seminar Pemberdayaan Ekonomi Perempuan",
    lokasi: "Hotel Grand Zuri Padang",
    kategori: "seminar",
    peserta: "200+ peserta",
    deskripsi: "Diskusi mengenai strategi pemberdayaan ekonomi perempuan di era digital, UMKM perempuan, dan peningkatan literasi keuangan untuk kemandirian ekonomi",
    status: "akan-datang",
    organizer: "Dinas DP3AP2KB Sumbar",
    kontak: "0751-7051234",
    registrasi: "https://dpppa.sumbarprov.go.id/register/seminar-perempuan",
    featured: false,
    maxPeserta: 250,
    currentPeserta: 180
  },
  {
    id: 4,
    tanggal: "2025-08-15",
    hari: "Jumat",
    waktu: "14:00 WIB",
    judul: "Pelatihan Keterampilan Digital untuk Perempuan",
    lokasi: "Pusat Pelatihan TIK Sumbar",
    kategori: "pelatihan",
    peserta: "80+ peserta",
    deskripsi: "Program pelatihan keterampilan digital khusus perempuan untuk meningkatkan kapasitas SDM dalam menghadapi era digitalisasi dan ekonomi digital",
    status: "akan-datang",
    organizer: "Dinas DP3AP2KB Sumbar",
    kontak: "0751-7051234",
    registrasi: "https://dpppa.sumbarprov.go.id/register/digital-skills",
    featured: false,
    maxPeserta: 100,
    currentPeserta: 72
  },
  {
    id: 5,
    tanggal: "2025-08-18",
    hari: "Senin",
    waktu: "08:30 WIB",
    judul: "Rapat Koordinasi Lintas Sektor Triwulan III",
    lokasi: "Ruang Rapat Utama Dinas DP3AP2KB",
    kategori: "rapat",
    peserta: "50+ peserta",
    deskripsi: "Koordinasi program kerja lintas sektor untuk optimalisasi layanan pemberdayaan perempuan dan perlindungan anak periode triwulan III 2025",
    status: "akan-datang",
    organizer: "Dinas DP3AP2KB Sumbar",
    kontak: "0751-7051234",
    featured: false,
    maxPeserta: 60,
    currentPeserta: 48
  },
  {
    id: 6,
    tanggal: "2025-08-20",
    hari: "Rabu",
    waktu: "09:30 WIB",
    judul: "Monitoring & Evaluasi Program Pemberdayaan",
    lokasi: "Aula Kantor Dinas DP3AP2KB",
    kategori: "evaluasi",
    peserta: "60+ peserta",
    deskripsi: "Kegiatan monitoring dan evaluasi pelaksanaan program pemberdayaan perempuan dan perlindungan anak tahun 2025 untuk perbaikan layanan",
    status: "akan-datang",
    organizer: "Dinas DP3AP2KB Sumbar",
    kontak: "0751-7051234",
    featured: false,
    maxPeserta: 80,
    currentPeserta: 55
  },
  {
    id: 7,
    tanggal: "2025-08-22",
    hari: "Jumat",
    waktu: "13:30 WIB",
    judul: "Sosialisasi Pencegahan Pernikahan Anak",
    lokasi: "Gedung Kebudayaan Padang",
    kategori: "sosialisasi",
    peserta: "300+ peserta",
    deskripsi: "Program sosialisasi massif untuk mencegah pernikahan anak, edukasi bahaya pernikahan dini, dan promosi pendidikan anak sebagai prioritas utama",
    status: "akan-datang",
    organizer: "Dinas DP3AP2KB Sumbar",
    kontak: "0751-7051234",
    registrasi: "https://dpppa.sumbarprov.go.id/register/anti-pernikahan-anak",
    featured: true,
    maxPeserta: 350,
    currentPeserta: 280
  },
  {
    id: 8,
    tanggal: "2025-08-25",
    hari: "Senin",
    waktu: "10:00 WIB",
    judul: "Workshop Parenting di Era Digital",
    lokasi: "Hotel Pangeran Beach Padang",
    kategori: "workshop",
    peserta: "150+ peserta",
    deskripsi: "Pelatihan pola asuh anak di era digital, pengawasan penggunaan gadget, dan membangun komunikasi efektif antara orang tua dan anak",
    status: "akan-datang",
    organizer: "Dinas DP3AP2KB Sumbar",
    kontak: "0751-7051234",
    registrasi: "https://dpppa.sumbarprov.go.id/register/parenting-digital",
    featured: false,
    maxPeserta: 180,
    currentPeserta: 130
  },
  {
    id: 9,
    tanggal: "2025-08-28",
    hari: "Kamis",
    waktu: "09:00 WIB",
    judul: "Pelatihan Konselor Keluarga Berencana",
    lokasi: "Aula Kantor Dinas DP3AP2KB",
    kategori: "pelatihan",
    peserta: "40+ peserta",
    deskripsi: "Pelatihan khusus untuk meningkatkan kapasitas konselor KB dalam memberikan layanan konseling yang berkualitas dan sesuai standar",
    status: "akan-datang",
    organizer: "Dinas DP3AP2KB Sumbar",
    kontak: "0751-7051234",
    featured: false,
    maxPeserta: 50,
    currentPeserta: 38
  },
  {
    id: 10,
    tanggal: "2025-08-30",
    hari: "Sabtu",
    waktu: "14:00 WIB",
    judul: "Seminar Kesehatan Reproduksi Remaja",
    lokasi: "Auditorium Universitas Andalas",
    kategori: "seminar",
    peserta: "400+ peserta",
    deskripsi: "Edukasi kesehatan reproduksi untuk remaja, pencegahan kehamilan tidak diinginkan, dan promosi gaya hidup sehat untuk generasi muda",
    status: "akan-datang",
    organizer: "Dinas DP3AP2KB Sumbar",
    kontak: "0751-7051234",
    registrasi: "https://dpppa.sumbarprov.go.id/register/kesehatan-reproduksi",
    featured: true,
    maxPeserta: 500,
    currentPeserta: 380
  }
];

// Utility functions
export const getAgendaByStatus = (status: AgendaItem['status']) => {
  return AGENDA_EVENTS.filter(agenda => agenda.status === status);
};

export const getFeaturedAgenda = () => {
  return AGENDA_EVENTS.filter(agenda => agenda.featured);
};

export const getAgendaByCategory = (category: string) => {
  if (category === 'semua') return AGENDA_EVENTS;
  return AGENDA_EVENTS.filter(agenda => agenda.kategori === category);
};

export const getUpcomingAgenda = (limit?: number) => {
  const upcoming = AGENDA_EVENTS
    .filter(agenda => agenda.status === 'akan-datang')
    .sort((a, b) => new Date(a.tanggal).getTime() - new Date(b.tanggal).getTime());
  
  return limit ? upcoming.slice(0, limit) : upcoming;
};

export const getCategoryColor = (kategori: string) => {
  const category = AGENDA_CATEGORIES.find(cat => cat.id === kategori);
  const colorMap = {
    emerald: 'from-emerald-500 to-teal-500',
    blue: 'from-blue-500 to-indigo-500',
    purple: 'from-purple-500 to-violet-500',
    orange: 'from-orange-500 to-red-500',
    gray: 'from-gray-500 to-slate-500',
    pink: 'from-pink-500 to-rose-500'
  };
  return colorMap[category?.color as keyof typeof colorMap] || 'from-emerald-500 to-teal-500';
};
