"use client";
import { memo } from "react";
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
  Heart,
  Handshake,
  Scale,
  Zap,
  UserCheck
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
const MAKLUMAT_KOMITMEN = [
  {
    id: 1,
    title: "Memberikan Pelayanan Terbaik",
    description: "Kami berkomitmen memberikan pelayanan yang berkualitas, profesional, dan memuaskan kepada seluruh masyarakat tanpa diskriminasi.",
    icon: Star,
    color: "emerald"
  },
  {
    id: 2,
    title: "Transparansi dan Akuntabilitas",
    description: "Semua proses pelayanan dilakukan secara transparan dengan akuntabilitas yang dapat dipertanggungjawabkan kepada publik.",
    icon: Eye,
    color: "blue"
  },
  {
    id: 3,
    title: "Tepat Waktu dan Efisien",
    description: "Pelayanan akan diselesaikan sesuai dengan waktu yang telah ditetapkan dalam standar operasional prosedur.",
    icon: Clock,
    color: "purple"
  },
  {
    id: 4,
    title: "Ramah dan Sopan",
    description: "Petugas pelayanan akan melayani dengan sikap ramah, sopan, dan menghargai setiap masyarakat yang datang.",
    icon: Heart,
    color: "pink"
  },
  {
    id: 5,
    title: "Adil dan Tidak Diskriminatif",
    description: "Pelayanan diberikan secara adil kepada semua masyarakat tanpa memandang suku, agama, ras, golongan, dan status sosial.",
    icon: Scale,
    color: "orange"
  },
  {
    id: 6,
    title: "Responsif terhadap Keluhan",
    description: "Kami akan merespon dengan cepat setiap keluhan, saran, dan masukan dari masyarakat untuk perbaikan pelayanan.",
    icon: Zap,
    color: "red"
  }
] as const;

const STANDAR_WAKTU = [
  {
    layanan: "Konsultasi Pemberdayaan Perempuan",
    waktu: "3 Hari Kerja",
    keterangan: "Termasuk analisis dan penyusunan rekomendasi"
  },
  {
    layanan: "Konsultasi Perlindungan Anak",
    waktu: "1 Hari Kerja",
    keterangan: "Untuk kasus darurat dapat dilayani segera"
  },
  {
    layanan: "Konsultasi Keluarga Berencana",
    waktu: "2 Hari Kerja",
    keterangan: "Termasuk konseling dan pemilihan metode"
  },
  {
    layanan: "Pelayanan Data dan Informasi",
    waktu: "2 Hari Kerja",
    keterangan: "Waktu dapat berbeda tergantung kompleksitas data"
  },
  {
    layanan: "Surat Keterangan/Rekomendasi",
    waktu: "3 Hari Kerja",
    keterangan: "Setelah verifikasi dokumen lengkap"
  }
] as const;

const KEPALA_DINAS_INFO = {
  nama: "Dra. Hj. Gemala Ranti, M.Si",
  jabatan: "Kepala Dinas DP3AP2KB Provinsi Sumatera Barat",
  foto: "/images/kepala-dinas.jpeg",
  ttd: "/images/ttd-kepala-dinas.png"
};

const PETUGAS_KELUHAN = [
  {
    nama: "Ahmad Rizki, S.Sos",
    jabatan: "Kepala Bidang Pelayanan",
    telepon: "(0751) 123-456 ext. 101",
    email: "rizki@dp3ap2kb.sumbarprov.go.id"
  },
  {
    nama: "Siti Aminah, S.H",
    jabatan: "Kepala Seksi Informasi Publik",
    telepon: "(0751) 123-456 ext. 102",
    email: "aminah@dp3ap2kb.sumbarprov.go.id"
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
    <span className="text-gray-700">Maklumat Layanan</span>
  </motion.nav>
));

BreadcrumbNav.displayName = 'BreadcrumbNav';

const KomitmenCard = memo(({ komitmen, index }: { komitmen: typeof MAKLUMAT_KOMITMEN[number], index: number }) => {
  const IconComponent = komitmen.icon;
  const colorClasses = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    purple: "bg-purple-50 border-purple-200 text-purple-700",
    pink: "bg-pink-50 border-pink-200 text-pink-700",
    orange: "bg-orange-50 border-orange-200 text-orange-700",
    red: "bg-red-50 border-red-200 text-red-700"
  };
  
  const iconColorClasses = {
    emerald: "bg-emerald-100 text-emerald-600",
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    pink: "bg-pink-100 text-pink-600",
    orange: "bg-orange-100 text-orange-600",
    red: "bg-red-100 text-red-600"
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-md ${colorClasses[komitmen.color as keyof typeof colorClasses]}`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${iconColorClasses[komitmen.color as keyof typeof iconColorClasses]}`}>
          <IconComponent className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-2">{komitmen.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{komitmen.description}</p>
        </div>
      </div>
    </motion.div>
  );
});

KomitmenCard.displayName = 'KomitmenCard';

const WaktuLayananTable = memo(() => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-white rounded-xl shadow-md overflow-hidden"
  >
    <div className="bg-emerald-600 text-white p-6">
      <h3 className="text-xl font-bold flex items-center gap-2">
        <Clock className="w-6 h-6" />
        Standar Waktu Pelayanan
      </h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Jenis Layanan</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Waktu Penyelesaian</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Keterangan</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {STANDAR_WAKTU.map((item, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-4 text-sm text-gray-900">{item.layanan}</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
                  <Clock className="w-3 h-3" />
                  {item.waktu}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{item.keterangan}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
));

WaktuLayananTable.displayName = 'WaktuLayananTable';

export default function MaklumatLayanan() {
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
              MAKLUMAT PELAYANAN
            </h1>
            <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
              Pernyataan kesanggupan dan kewajiban penyelenggara untuk melaksanakan 
              pelayanan sesuai dengan standar yang telah ditetapkan
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
            {/* Maklumat Header */}
            <motion.section
              {...fadeInUp}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  MAKLUMAT PELAYANAN
                </h2>
                <div className="text-lg font-semibold text-emerald-700 mb-2">
                  DINAS PEMBERDAYAAN PEREMPUAN DAN PERLINDUNGAN ANAK,<br />
                  PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA<br />
                  PROVINSI SUMATERA BARAT
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl mb-6">
                <p className="text-emerald-800 leading-relaxed text-justify">
                  Dengan ini kami menyatakan sanggup menyelenggarakan pelayanan publik sesuai dengan 
                  standar pelayanan yang telah ditetapkan dan apabila tidak menepati janji ini, 
                  kami siap menerima sanksi sesuai dengan peraturan perundang-undangan yang berlaku.
                </p>
              </div>

              <div className="border-2 border-emerald-200 rounded-xl p-6 bg-gradient-to-r from-emerald-50 to-white">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  KOMITMEN KAMI KEPADA MASYARAKAT
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  "Memberikan pelayanan yang profesional, berkualitas, dan memuaskan 
                  kepada seluruh masyarakat dalam bidang Pemberdayaan Perempuan, 
                  Perlindungan Anak, Pengendalian Penduduk, dan Keluarga Berencana"
                </p>
              </div>
            </motion.section>

            {/* Komitmen Pelayanan */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Komitmen Pelayanan Kami
                </h2>
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {MAKLUMAT_KOMITMEN.map((komitmen, index) => (
                    <KomitmenCard key={komitmen.id} komitmen={komitmen} index={index} />
                  ))}
                </motion.div>
              </div>
            </motion.section>

            {/* Standar Waktu Pelayanan */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <WaktuLayananTable />
            </motion.section>

            {/* Sanksi dan Kompensasi */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Sanksi dan Kompensasi
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                      <Scale className="w-5 h-5" />
                      Sanksi Internal
                    </h3>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        Teguran lisan dan tertulis
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        Penundaan kenaikan gaji berkala
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        Penundaan kenaikan pangkat
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        Pemberhentian sementara
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                    <h3 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Kompensasi
                    </h3>
                    <ul className="space-y-2 text-sm text-emerald-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        Permintaan maaf secara tertulis
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        Pelayanan ulang tanpa biaya
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        Penggantian biaya yang telah dikeluarkan
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        Pelayanan dengan prioritas khusus
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Penandatangan */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Padang, 1 Januari 2025</p>
                  <p className="text-gray-900 font-semibold mb-6">
                    Kepala Dinas DP3AP2KB Provinsi Sumatera Barat
                  </p>
                  
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-40 relative rounded-xl overflow-hidden shadow-md">
                      <Image 
                        src={KEPALA_DINAS_INFO.foto} 
                        alt={`${KEPALA_DINAS_INFO.nama} - ${KEPALA_DINAS_INFO.jabatan}`} 
                        fill 
                        className="object-cover object-top" 
                        sizes="128px"
                      />
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900 text-lg">{KEPALA_DINAS_INFO.nama}</p>
                    <p className="text-gray-600 text-sm">NIP. 196801011990032001</p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-md p-6 mb-6"
            >
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-600" />
                Informasi Kontak
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Jl. Khatib Sulaiman No.1, Padang, Sumatera Barat 25586
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">(0751) 123-456</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">info@dp3ap2kb.sumbarprov.go.id</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-emerald-800">Jam Pelayanan</p>
                    <p className="text-xs text-emerald-600 mt-1">
                      Senin - Kamis: 08:00 - 16:00 WIB<br />
                      Jumat: 08:00 - 11:30 WIB
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Petugas Keluhan */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 mb-6"
            >
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-emerald-600" />
                Petugas Pengaduan
              </h3>
              <div className="space-y-4">
                {PETUGAS_KELUHAN.map((petugas, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="p-3 border border-gray-200 rounded-lg hover:border-emerald-200 hover:bg-emerald-50/30 transition-all"
                  >
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900">{petugas.nama}</p>
                      <p className="text-sm text-gray-600">{petugas.jabatan}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Phone className="w-3 h-3" />
                        {petugas.telepon}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Mail className="w-3 h-3" />
                        {petugas.email}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl p-6"
            >
              <h3 className="font-bold text-emerald-800 mb-4">Link Terkait</h3>
              <div className="space-y-2">
                <Link 
                  href="/layanan/standar-pelayanan" 
                  className="block text-sm text-emerald-700 hover:text-emerald-800 hover:underline transition-colors"
                >
                  → Standar Pelayanan Publik
                </Link>
                <Link 
                  href="/layanan/survey-kepuasan" 
                  className="block text-sm text-emerald-700 hover:text-emerald-800 hover:underline transition-colors"
                >
                  → Survey Kepuasan Masyarakat
                </Link>
                <Link 
                  href="/lapor" 
                  className="block text-sm text-emerald-700 hover:text-emerald-800 hover:underline transition-colors"
                >
                  → Pengaduan Online
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
