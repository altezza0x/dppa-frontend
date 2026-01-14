"use client";
import { memo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ChevronRight, 
  FileText, 
  Clock, 
  Star, 
  CheckCircle, 
  Users, 
  Target, 
  Shield, 
  Phone,
  Mail,
  MapPin,
  Award,
  Eye,
  BarChart3,
  TrendingUp,
  MessageSquare,
  ThumbsUp,
  Send,
  Calendar,
  Download,
  ExternalLink,
  Clipboard,
  PieChart,
  Activity,
  Smile,
  Frown,
  Meh,
  AlertCircle,
  Info
} from "lucide-react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 }
};

// Data constants
const HASIL_SURVEY_2024 = {
  totalResponden: 1247,
  periode: "Januari - Desember 2024",
  nilaiIKM: 3.85,
  kategori: "Baik",
  peningkatan: "+0.23",
  aspekTerbaik: "Keramahan Petugas",
  aspekPerbaikan: "Waktu Pelayanan"
};

const ASPEK_PENILAIAN = [
  {
    id: 1,
    aspek: "Persyaratan Pelayanan",
    nilai: 3.92,
    kategori: "Baik",
    deskripsi: "Kejelasan dan kemudahan persyaratan yang diperlukan",
    icon: FileText,
    color: "emerald"
  },
  {
    id: 2,
    aspek: "Prosedur Pelayanan",
    nilai: 3.78,
    kategori: "Baik",
    deskripsi: "Kejelasan dan kesederhanaan alur pelayanan",
    icon: Target,
    color: "blue"
  },
  {
    id: 3,
    aspek: "Waktu Pelayanan",
    nilai: 3.65,
    kategori: "Baik",
    deskripsi: "Kesesuaian waktu pelayanan dengan standar yang ditetapkan",
    icon: Clock,
    color: "orange"
  },
  {
    id: 4,
    aspek: "Biaya Pelayanan",
    nilai: 4.12,
    kategori: "Sangat Baik",
    deskripsi: "Kesesuaian biaya dengan standar tarif yang ditetapkan",
    icon: Star,
    color: "purple"
  },
  {
    id: 5,
    aspek: "Produk Pelayanan",
    nilai: 3.89,
    kategori: "Baik",
    deskripsi: "Kesesuaian hasil pelayanan dengan ketentuan",
    icon: Award,
    color: "indigo"
  },
  {
    id: 6,
    aspek: "Kompetensi Petugas",
    nilai: 3.94,
    kategori: "Baik",
    deskripsi: "Kemampuan dan keahlian petugas dalam memberikan pelayanan",
    icon: Users,
    color: "green"
  },
  {
    id: 7,
    aspek: "Perilaku Petugas",
    nilai: 4.15,
    kategori: "Sangat Baik",
    deskripsi: "Sikap ramah, sopan, dan tidak diskriminatif petugas",
    icon: Smile,
    color: "pink"
  },
  {
    id: 8,
    aspek: "Penanganan Pengaduan",
    nilai: 3.71,
    kategori: "Baik",
    deskripsi: "Kemudahan dan kecepatan penanganan keluhan masyarakat",
    icon: MessageSquare,
    color: "red"
  },
  {
    id: 9,
    aspek: "Sarana Prasarana",
    nilai: 3.82,
    kategori: "Baik",
    deskripsi: "Kenyamanan dan kemudahan fasilitas pelayanan",
    icon: Shield,
    color: "teal"
  }
] as const;

const STATISTIK_RESPONDEN = [
  {
    kategori: "Jenis Kelamin",
    data: [
      { label: "Perempuan", nilai: 68, warna: "bg-pink-500" },
      { label: "Laki-laki", nilai: 32, warna: "bg-blue-500" }
    ]
  },
  {
    kategori: "Usia",
    data: [
      { label: "17-25 tahun", nilai: 23, warna: "bg-green-500" },
      { label: "26-35 tahun", nilai: 34, warna: "bg-emerald-500" },
      { label: "36-45 tahun", nilai: 28, warna: "bg-teal-500" },
      { label: "46-55 tahun", nilai: 12, warna: "bg-blue-500" },
      { label: ">55 tahun", nilai: 3, warna: "bg-purple-500" }
    ]
  },
  {
    kategori: "Pendidikan",
    data: [
      { label: "SD/SMP", nilai: 15, warna: "bg-red-500" },
      { label: "SMA/SMK", nilai: 42, warna: "bg-orange-500" },
      { label: "Diploma", nilai: 18, warna: "bg-yellow-500" },
      { label: "Sarjana", nilai: 22, warna: "bg-green-500" },
      { label: "Pascasarjana", nilai: 3, warna: "bg-purple-500" }
    ]
  }
] as const;

const CARA_SURVEY = [
  {
    id: 1,
    metode: "Survey Online",
    deskripsi: "Mengisi survey melalui form online yang tersedia di website",
    icon: ExternalLink,
    link: "https://forms.google.com/survey-ikm",
    estimasi: "5-7 menit",
    kelebihan: ["Mudah diakses", "Tersedia 24/7", "Hasil langsung", "Ramah lingkungan"]
  },
  {
    id: 2,
    metode: "Survey di Kantor",
    deskripsi: "Mengisi kuesioner yang disediakan di loket pelayanan",
    icon: Clipboard,
    link: "/profil/hubungi",
    estimasi: "3-5 menit",
    kelebihan: ["Bantuan petugas", "Dapat konsultasi", "Interaksi langsung", "Klarifikasi mudah"]
  },
  {
    id: 3,
    metode: "Survey Telepon",
    deskripsi: "Wawancara melalui telepon yang dilakukan oleh tim survey",
    icon: Phone,
    link: "tel:0751123456",
    estimasi: "8-10 menit",
    kelebihan: ["Personal", "Mendalam", "Fleksibel", "Interaktif"]
  },
  {
    id: 4,
    metode: "Survey Lapangan",
    deskripsi: "Kunjungan langsung tim survey ke lokasi masyarakat",
    icon: Users,
    link: "#",
    estimasi: "10-15 menit",
    kelebihan: ["Komprehensif", "Detail", "Representatif", "Akurat"]
  }
] as const;

const LAPORAN_IKM = [
  {
    id: 1,
    judul: "Laporan IKM Triwulan IV 2024",
    periode: "Oktober - Desember 2024",
    nilai: 3.89,
    responden: 342,
    tanggal: "2025-01-15",
    ukuran: "2.1 MB"
  },
  {
    id: 2,
    judul: "Laporan IKM Triwulan III 2024",
    periode: "Juli - September 2024",
    nilai: 3.76,
    responden: 298,
    tanggal: "2024-10-15",
    ukuran: "1.9 MB"
  },
  {
    id: 3,
    judul: "Laporan IKM Triwulan II 2024",
    periode: "April - Juni 2024",
    nilai: 3.82,
    responden: 315,
    tanggal: "2024-07-15",
    ukuran: "2.0 MB"
  },
  {
    id: 4,
    judul: "Laporan IKM Triwulan I 2024",
    periode: "Januari - Maret 2024",
    nilai: 3.69,
    responden: 292,
    tanggal: "2024-04-15",
    ukuran: "1.8 MB"
  }
] as const;

const FEEDBACK_MASYARAKAT = [
  {
    id: 1,
    nama: "Siti Rahmawati",
    layanan: "Konsultasi KB",
    rating: 5,
    komentar: "Pelayanan sangat baik dan petugas sangat ramah. Informasi yang diberikan jelas dan membantu.",
    tanggal: "2025-01-20"
  },
  {
    id: 2,
    nama: "Ahmad Budiman",
    layanan: "Konsultasi Pemberdayaan Perempuan",
    rating: 4,
    komentar: "Prosedur sudah jelas, namun waktu tunggu masih bisa diperbaiki. Overall pelayanan memuaskan.",
    tanggal: "2025-01-18"
  },
  {
    id: 3,
    nama: "Dewi Sartika",
    layanan: "Perlindungan Anak",
    rating: 5,
    komentar: "Tim sangat responsif dan profesional dalam menangani kasus. Terima kasih atas bantuannya.",
    tanggal: "2025-01-15"
  }
] as const;

// Memoized Components
const BreadcrumbNav = memo(() => (
  <motion.nav
    {...fadeInUp}
    className="flex items-center gap-1 text-sm text-gray-600"
    aria-label="Breadcrumb"
  >
    <Link href="/" className="hover:underline text-emerald-700 font-semibold transition-colors">
      Beranda
    </Link>
    <ChevronRight size={16} className="text-gray-400" />
    <Link href="/layanan" className="hover:underline text-emerald-700 font-semibold transition-colors">
      Layanan
    </Link>
    <ChevronRight size={16} className="text-gray-400" />
    <span className="text-gray-700">Survey Kepuasan Masyarakat</span>
  </motion.nav>
));

BreadcrumbNav.displayName = 'BreadcrumbNav';

const AspekPenilaianCard = memo(({ aspek, index }: { aspek: typeof ASPEK_PENILAIAN[number], index: number }) => {
  const IconComponent = aspek.icon;
  
  const colorClasses = {
    emerald: "bg-emerald-50 border-emerald-200",
    blue: "bg-blue-50 border-blue-200",
    orange: "bg-orange-50 border-orange-200",
    purple: "bg-purple-50 border-purple-200",
    indigo: "bg-indigo-50 border-indigo-200",
    green: "bg-green-50 border-green-200",
    pink: "bg-pink-50 border-pink-200",
    red: "bg-red-50 border-red-200",
    teal: "bg-teal-50 border-teal-200"
  };
  
  const iconColorClasses = {
    emerald: "bg-emerald-100 text-emerald-600",
    blue: "bg-blue-100 text-blue-600",
    orange: "bg-orange-100 text-orange-600",
    purple: "bg-purple-100 text-purple-600",
    indigo: "bg-indigo-100 text-indigo-600",
    green: "bg-green-100 text-green-600",
    pink: "bg-pink-100 text-pink-600",
    red: "bg-red-100 text-red-600",
    teal: "bg-teal-100 text-teal-600"
  };
  
  const getKategoriColor = (kategori: string) => {
    if (kategori === "Sangat Baik") return "text-green-700 bg-green-100";
    if (kategori === "Baik") return "text-emerald-700 bg-emerald-100";
    if (kategori === "Cukup") return "text-yellow-700 bg-yellow-100";
    return "text-gray-700 bg-gray-100";
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-md ${colorClasses[aspek.color as keyof typeof colorClasses]}`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${iconColorClasses[aspek.color as keyof typeof iconColorClasses]}`}>
          <IconComponent className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-gray-900">{aspek.aspek}</h3>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${getKategoriColor(aspek.kategori)}`}>
              {aspek.kategori}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-3">{aspek.deskripsi}</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(aspek.nilai / 5) * 100}%` }}
              ></div>
            </div>
            <span className="font-bold text-emerald-700 text-lg">{aspek.nilai}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

AspekPenilaianCard.displayName = 'AspekPenilaianCard';

const StatistikChart = memo(({ stats, index }: { stats: typeof STATISTIK_RESPONDEN[number], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="bg-white p-6 rounded-xl shadow-md"
  >
    <h3 className="font-bold text-gray-900 mb-4">{stats.kategori}</h3>
    <div className="space-y-3">
      {stats.data.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-700">{item.label}</span>
              <span className="text-sm font-medium text-gray-900">{item.nilai}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${item.warna}`}
                style={{ width: `${item.nilai}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
));

StatistikChart.displayName = 'StatistikChart';

const CaraSurveyCard = memo(({ cara, index }: { cara: typeof CARA_SURVEY[number], index: number }) => {
  const IconComponent = cara.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <IconComponent className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-2">{cara.metode}</h3>
            <p className="text-gray-600 text-sm mb-3">{cara.deskripsi}</p>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">~{cara.estimasi}</span>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Kelebihan:</h4>
          <div className="flex flex-wrap gap-1">
            {cara.kelebihan.map((kelebihan, idx) => (
              <span key={idx} className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-1 rounded-full">
                {kelebihan}
              </span>
            ))}
          </div>
        </div>
        
        <Link 
          href={cara.link}
          target={cara.link.startsWith('http') ? '_blank' : undefined}
          rel={cara.link.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="w-full bg-emerald-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors inline-block"
        >
          {cara.metode === "Survey Online" ? "Isi Survey" : 
           cara.metode === "Survey Telepon" ? "Hubungi Kami" : 
           "Kunjungi"}
        </Link>
      </div>
    </motion.div>
  );
});

CaraSurveyCard.displayName = 'CaraSurveyCard';

const FeedbackCard = memo(({ feedback, index }: { feedback: typeof FEEDBACK_MASYARAKAT[number], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
  >
    <div className="flex flex-col gap-2 mb-3">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-gray-900">{feedback.nama}</h4>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-3 h-3 ${i < feedback.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-emerald-700">{feedback.layanan}</p>
    </div>
    <p className="text-gray-600 text-sm italic mb-3">"{feedback.komentar}"</p>
    <p className="text-xs text-gray-500">{feedback.tanggal}</p>
  </motion.div>
));

FeedbackCard.displayName = 'FeedbackCard';

export default function SurveyKepuasan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">
              SURVEY KEPUASAN MASYARAKAT
            </h1>
            <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
              Indeks Kepuasan Masyarakat (IKM) sebagai tolok ukur kualitas pelayanan 
              dan komitmen kami untuk terus meningkatkan pelayanan terbaik
            </p>
          </motion.div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <BreadcrumbNav />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            {/* Hasil IKM Terkini */}
            <motion.section
              {...fadeInUp}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Hasil IKM Terkini
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BarChart3 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="text-3xl font-bold text-emerald-600">{HASIL_SURVEY_2024.nilaiIKM}</div>
                    <div className="text-sm text-gray-600">Nilai IKM</div>
                    <div className="text-xs text-emerald-700 font-medium">{HASIL_SURVEY_2024.kategori}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600">{HASIL_SURVEY_2024.totalResponden}</div>
                    <div className="text-sm text-gray-600">Responden</div>
                    <div className="text-xs text-blue-700 font-medium">{HASIL_SURVEY_2024.periode}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-green-600">{HASIL_SURVEY_2024.peningkatan}</div>
                    <div className="text-sm text-gray-600">Peningkatan</div>
                    <div className="text-xs text-green-700 font-medium">dari tahun lalu</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="text-xl font-bold text-purple-600">#{1}</div>
                    <div className="text-sm text-gray-600">Aspek Terbaik</div>
                    <div className="text-xs text-purple-700 font-medium">{HASIL_SURVEY_2024.aspekTerbaik}</div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Aspek Penilaian */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  9 Aspek Penilaian IKM
                </h2>
                <p className="text-gray-600">
                  Evaluasi menyeluruh terhadap berbagai aspek pelayanan publik
                </p>
              </div>
              
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-4"
              >
                {ASPEK_PENILAIAN.map((aspek, index) => (
                  <AspekPenilaianCard key={aspek.id} aspek={aspek} index={index} />
                ))}
              </motion.div>
            </motion.section>

            {/* Cara Mengikuti Survey */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Cara Mengikuti Survey
                </h2>
                <p className="text-gray-600">
                  Pilih metode yang paling nyaman untuk memberikan penilaian Anda
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CARA_SURVEY.map((cara, index) => (
                  <CaraSurveyCard key={cara.id} cara={cara} index={index} />
                ))}
              </div>
            </motion.section>

            {/* Feedback Masyarakat */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Testimoni Masyarakat
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {FEEDBACK_MASYARAKAT.map((feedback, index) => (
                    <FeedbackCard key={feedback.id} feedback={feedback} index={index} />
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            {/* CTA Survey */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl p-6 mb-6"
            >
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Berikan Penilaian Anda
              </h3>
              <p className="text-emerald-100 text-sm mb-4">
                Suara Anda sangat berharga untuk meningkatkan kualitas pelayanan kami
              </p>
              <div className="space-y-2">
                <a 
                  href="https://forms.google.com/survey-ikm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-emerald-700 text-center py-2 px-4 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
                >
                  Survey Online
                </a>
                <button className="w-full bg-emerald-500 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-emerald-400 transition-colors">
                  Kunjungi Kantor
                </button>
              </div>
            </motion.div>

            {/* Statistik Responden */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <h3 className="font-bold text-gray-900 mb-4">Profil Responden 2024</h3>
              <div className="space-y-6">
                {STATISTIK_RESPONDEN.map((stats, index) => (
                  <StatistikChart key={index} stats={stats} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Download Laporan */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-md p-6 mb-6"
            >
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-emerald-600" />
                Laporan IKM
              </h3>
              <div className="space-y-3">
                {LAPORAN_IKM.map((laporan, index) => (
                  <motion.div
                    key={laporan.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="p-3 border border-gray-200 rounded-lg hover:border-emerald-200 hover:bg-emerald-50/30 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors">
                          {laporan.judul}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">{laporan.periode}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <span>IKM: <strong>{laporan.nilai}</strong></span>
                          <span>{laporan.responden} responden</span>
                          <span>{laporan.ukuran}</span>
                        </div>
                      </div>
                      <Download className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Info Penting */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6"
            >
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Informasi IKM</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Survey dilakukan setiap triwulan</li>
                    <li>• Partisipasi bersifat sukarela</li>
                    <li>• Data responden dijamin kerahasiaan</li>
                    <li>• Hasil digunakan untuk perbaikan</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}