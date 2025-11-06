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
  Download,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  Award,
  Eye,
  Search
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
const LAYANAN_PUBLIK = [
  {
    id: 1,
    nama: "Pelayanan Konsultasi Pemberdayaan Perempuan",
    waktu: "3 Hari Kerja",
    biaya: "Gratis",
    persyaratan: [
      "Surat permohonan dari organisasi/kelompok perempuan",
      "Profil organisasi/kelompok",
      "Fotocopy KTP pengurus",
      "Proposal kegiatan (jika ada)"
    ],
    prosedur: [
      "Mengajukan permohonan tertulis",
      "Verifikasi kelengkapan berkas",
      "Penjadwalan konsultasi",
      "Pelaksanaan konsultasi",
      "Tindak lanjut rekomendasi"
    ],
    output: "Surat rekomendasi dan panduan pemberdayaan perempuan",
    icon: Users,
    kategori: "Pemberdayaan Perempuan"
  },
  {
    id: 2,
    nama: "Pelayanan Konsultasi Perlindungan Anak",
    waktu: "1 Hari Kerja",
    biaya: "Gratis",
    persyaratan: [
      "Surat permohonan",
      "KTP pemohon",
      "Surat keterangan dari kelurahan/desa",
      "Dokumen pendukung terkait kasus"
    ],
    prosedur: [
      "Pendaftaran dan pengisian formulir",
      "Verifikasi identitas",
      "Konseling awal",
      "Penyusunan rencana tindak lanjut",
      "Koordinasi dengan instansi terkait"
    ],
    output: "Surat rujukan dan panduan perlindungan anak",
    icon: Shield,
    kategori: "Perlindungan Anak"
  },
  {
    id: 3,
    nama: "Pelayanan Konsultasi Keluarga Berencana",
    waktu: "2 Hari Kerja",
    biaya: "Gratis",
    persyaratan: [
      "KTP suami istri",
      "Kartu Keluarga",
      "Surat keterangan sehat (jika diperlukan)",
      "Formulir permohonan"
    ],
    prosedur: [
      "Pendaftaran peserta",
      "Konseling pra-KB",
      "Pemilihan metode KB",
      "Pelayanan KB sesuai pilihan",
      "Monitoring dan evaluasi"
    ],
    output: "Kartu peserta KB dan alat kontrasepsi",
    icon: Target,
    kategori: "Keluarga Berencana"
  },
  {
    id: 4,
    nama: "Pelayanan Data dan Informasi",
    waktu: "2 Hari Kerja",
    biaya: "Gratis",
    persyaratan: [
      "Surat permohonan resmi",
      "KTP pemohon",
      "Surat pengantar dari instansi",
      "Formulir permintaan data"
    ],
    prosedur: [
      "Pengajuan permohonan data",
      "Verifikasi keperluan data",
      "Proses kompilasi data",
      "Validasi data",
      "Penyerahan data"
    ],
    output: "Dokumen data dan informasi sesuai permintaan",
    icon: FileText,
    kategori: "Informasi Publik"
  }
] as const;

const STANDAR_PELAYANAN = [
  {
    id: 1,
    title: "Profesionalisme",
    description: "Pelayanan dilakukan dengan keahlian dan kompetensi tinggi sesuai bidang tugas",
    icon: Award,
    color: "emerald"
  },
  {
    id: 2,
    title: "Transparansi",
    description: "Informasi pelayanan mudah diakses dan dipahami oleh masyarakat",
    icon: Eye,
    color: "blue"
  },
  {
    id: 3,
    title: "Responsif",
    description: "Tanggap terhadap kebutuhan dan keluhan masyarakat",
    icon: Clock,
    color: "purple"
  },
  {
    id: 4,
    title: "Akuntabilitas",
    description: "Pelayanan dapat dipertanggungjawabkan sesuai standar yang ditetapkan",
    icon: CheckCircle,
    color: "orange"
  }
] as const;

const DOKUMEN_STANDAR = [
  {
    id: 1,
    nama: "Maklumat Pelayanan DP3AP2KB",
    ukuran: "245 KB",
    format: "PDF",
    tanggal: "2025-01-15"
  },
  {
    id: 2,
    nama: "Standar Operasional Prosedur (SOP) Layanan Konsultasi",
    ukuran: "1.2 MB",
    format: "PDF",
    tanggal: "2025-01-10"
  },
  {
    id: 3,
    nama: "Formulir Permohonan Layanan",
    ukuran: "156 KB",
    format: "PDF",
    tanggal: "2025-01-08"
  },
  {
    id: 4,
    nama: "Indeks Kepuasan Masyarakat (IKM) 2024",
    ukuran: "890 KB",
    format: "PDF",
    tanggal: "2024-12-20"
  }
] as const;

const FAQ_DATA = [
  {
    id: 1,
    pertanyaan: "Apakah semua layanan di DP3AP2KB gratis?",
    jawaban: "Ya, semua layanan konsultasi dan informasi di DP3AP2KB Provinsi Sumatera Barat tidak dikenakan biaya (gratis)."
  },
  {
    id: 2,
    pertanyaan: "Berapa lama waktu penyelesaian layanan?",
    jawaban: "Waktu penyelesaian bervariasi tergantung jenis layanan, mulai dari 1-3 hari kerja. Untuk layanan konsultasi darurat dapat dilayani pada hari yang sama."
  },
  {
    id: 3,
    pertanyaan: "Apakah bisa melakukan konsultasi secara online?",
    jawaban: "Ya, kami menyediakan layanan konsultasi online melalui telepon, WhatsApp, dan video call untuk kemudahan masyarakat."
  },
  {
    id: 4,
    pertanyaan: "Dokumen apa saja yang diperlukan untuk layanan konsultasi?",
    jawaban: "Dokumen yang diperlukan berbeda untuk setiap jenis layanan. Umumnya diperlukan KTP, surat permohonan, dan dokumen pendukung sesuai kasus."
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
    <span className="text-gray-700">Standar Pelayanan</span>
  </motion.nav>
));

BreadcrumbNav.displayName = 'BreadcrumbNav';

const LayananCard = memo(({ layanan, index }: { layanan: typeof LAYANAN_PUBLIK[number], index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = layanan.icon;
  
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
            <h3 className="font-bold text-gray-900 mb-2">{layanan.nama}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-1 rounded-full">
                <Clock className="w-3 h-3" />
                {layanan.waktu}
              </span>
              <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                <Star className="w-3 h-3" />
                {layanan.biaya}
              </span>
              <span className="bg-purple-50 text-purple-700 text-xs font-medium px-2 py-1 rounded-full">
                {layanan.kategori}
              </span>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left text-emerald-700 font-medium hover:text-emerald-800 transition-colors flex items-center justify-between"
        >
          <span>Lihat Detail Layanan</span>
          <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
        </button>
        
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-4"
          >
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Persyaratan:</h4>
              <ul className="space-y-1">
                {layanan.persyaratan.map((syarat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {syarat}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Prosedur:</h4>
              <ol className="space-y-1">
                {layanan.prosedur.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-1">Output Layanan:</h4>
              <p className="text-sm text-gray-600">{layanan.output}</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
});

LayananCard.displayName = 'LayananCard';

const StandarCard = memo(({ standar, index }: { standar: typeof STANDAR_PELAYANAN[number], index: number }) => {
  const IconComponent = standar.icon;
  const colorClasses = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    purple: "bg-purple-50 border-purple-200 text-purple-700",
    orange: "bg-orange-50 border-orange-200 text-orange-700"
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-md ${colorClasses[standar.color as keyof typeof colorClasses]}`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
          standar.color === 'emerald' ? 'bg-emerald-100' :
          standar.color === 'blue' ? 'bg-blue-100' :
          standar.color === 'purple' ? 'bg-purple-100' :
          'bg-orange-100'
        }`}>
          <IconComponent className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-2">{standar.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{standar.description}</p>
        </div>
      </div>
    </motion.div>
  );
});

StandarCard.displayName = 'StandarCard';

const FAQItem = memo(({ faq, index }: { faq: typeof FAQ_DATA[number], index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="border border-gray-200 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
      >
        <span className="font-medium text-gray-900 pr-4">{faq.pertanyaan}</span>
        <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-gray-200 p-4 bg-gray-50"
        >
          <p className="text-gray-600 text-sm leading-relaxed">{faq.jawaban}</p>
        </motion.div>
      )}
    </motion.div>
  );
});

FAQItem.displayName = 'FAQItem';

export default function StandarPelayanan() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredLayanan = LAYANAN_PUBLIK.filter(layanan =>
    layanan.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    layanan.kategori.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              STANDAR PELAYANAN PUBLIK
            </h1>
            <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
              Komitmen kami untuk memberikan pelayanan terbaik kepada masyarakat
              sesuai dengan standar yang telah ditetapkan
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
            {/* Search Bar */}
            <motion.div
              {...fadeInUp}
              className="bg-white rounded-xl shadow-md p-6 mb-8"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari layanan yang anda butuhkan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                />
              </div>
            </motion.div>

            {/* Standar Pelayanan Cards */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Prinsip Standar Pelayanan
                </h2>
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {STANDAR_PELAYANAN.map((standar, index) => (
                    <StandarCard key={standar.id} standar={standar} index={index} />
                  ))}
                </motion.div>
              </div>
            </motion.section>

            {/* Daftar Layanan */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Daftar Layanan Publik
                </h2>
                <p className="text-gray-600">
                  Temukan layanan yang Anda butuhkan dengan mudah dan cepat
                </p>
              </div>
              
              <div className="space-y-6">
                {filteredLayanan.length > 0 ? (
                  filteredLayanan.map((layanan, index) => (
                    <LayananCard key={layanan.id} layanan={layanan} index={index} />
                  ))
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Layanan yang Anda cari tidak ditemukan</p>
                  </div>
                )}
              </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Pertanyaan yang Sering Diajukan
                </h2>
                <div className="space-y-4">
                  {FAQ_DATA.map((faq, index) => (
                    <FAQItem key={faq.id} faq={faq} index={index} />
                  ))}
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
                Kontak Pelayanan
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
                  <span className="text-gray-600">layanan@dp3ap2kb.sumbarprov.go.id</span>
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

            {/* Download Documents */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 mb-6"
            >
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-emerald-600" />
                Dokumen Standar
              </h3>
              <div className="space-y-3">
                {DOKUMEN_STANDAR.map((doc, index) => (
                  <motion.div
                    key={doc.id}
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
                          {doc.nama}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500">{doc.format}</span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500">{doc.ukuran}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{doc.tanggal}</p>
                      </div>
                      <Download className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Alert */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl p-6"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-emerald-800 mb-2">Informasi Penting</h4>
                  <p className="text-sm text-emerald-700 leading-relaxed">
                    Untuk pelayanan yang memerlukan penanganan segera, 
                    silakan hubungi hotline darurat kami di (0751) 999-111 
                    atau datang langsung ke kantor kami.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
