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
  MessageSquare, 
  Shield, 
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  Award,
  Eye,
  Search,
  Send,
  User,
  Calendar,
  ArrowRight,
  Headphones,
  Globe,
  Smartphone,
  MessageCircle,
  FileCheck,
  Timer
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
const JENIS_PENGADUAN = [
  {
    id: 1,
    title: "Pelayanan Publik",
    description: "Pengaduan terkait kualitas pelayanan administrasi, waktu pelayanan, dan sikap petugas",
    icon: Users,
    color: "emerald",
    contoh: ["Pelayanan lambat", "Petugas tidak ramah", "Prosedur berbelit-belit", "Biaya tidak sesuai"]
  },
  {
    id: 2,
    title: "Pemberdayaan Perempuan",
    description: "Pengaduan mengenai program dan kebijakan pemberdayaan perempuan di daerah",
    icon: Shield,
    color: "purple",
    contoh: ["Diskriminasi gender", "Program tidak tepat sasaran", "Akses pendidikan terbatas", "Kekerasan terhadap perempuan"]
  },
  {
    id: 3,
    title: "Perlindungan Anak",
    description: "Laporan kasus kekerasan, penelantaran, atau pelanggaran hak anak",
    icon: MessageSquare,
    color: "blue",
    contoh: ["Kekerasan fisik/psikis", "Penelantaran anak", "Eksploitasi anak", "Trafficking anak"]
  },
  {
    id: 4,
    title: "Keluarga Berencana",
    description: "Keluhan terkait program KB, alat kontrasepsi, dan pelayanan kesehatan reproduksi",
    icon: FileText,
    color: "orange",
    contoh: ["Efek samping alat KB", "Pelayanan KB tidak merata", "Edukasi KB kurang", "Akses KB terbatas"]
  }
] as const;

const CARA_PENGADUAN = [
  {
    id: 1,
    title: "Pengaduan Online",
    description: "Melalui website resmi dan aplikasi pengaduan online",
    icon: Globe,
    channels: [
      { name: "Website Lapor.go.id", link: "https://www.lapor.go.id/", type: "external" },
      { name: "SP4N-LAPOR!", link: "https://www.lapor.go.id/", type: "external" },
      { name: "Form Pengaduan Online", link: "/lapor", type: "internal" }
    ],
    waktu: "24 Jam",
    kelebihan: ["Mudah diakses", "Tersedia 24/7", "Dapat dilampirkan bukti", "Tracking status"]
  },
  {
    id: 2,
    title: "Telepon & SMS",
    description: "Hubungi langsung melalui saluran telepon dan SMS pengaduan",
    icon: Phone,
    channels: [
      { name: "Hotline: (0751) 123-456", link: "tel:0751123456", type: "phone" },
      { name: "SMS: 0812-3456-7890", link: "sms:081234567890", type: "sms" },
      { name: "WhatsApp: 0812-3456-7890", link: "https://wa.me/6281234567890", type: "whatsapp" }
    ],
    waktu: "08:00 - 16:00 WIB",
    kelebihan: ["Respons cepat", "Komunikasi langsung", "Mudah untuk darurat", "Tidak perlu internet"]
  },
  {
    id: 3,
    title: "Datang Langsung",
    description: "Kunjungi langsung kantor kami untuk konsultasi dan pengaduan",
    icon: MapPin,
    channels: [
      { name: "Kantor DP3AP2KB Sumbar", link: "/profil/hubungi", type: "internal" },
      { name: "Kotak Saran di Kantor", link: "#", type: "internal" },
      { name: "Petugas Pengaduan", link: "#", type: "internal" }
    ],
    waktu: "Senin-Kamis: 08:00-16:00, Jumat: 08:00-11:30",
    kelebihan: ["Konsultasi detail", "Privasi terjamin", "Dokumen asli", "Penjelasan langsung"]
  },
  {
    id: 4,
    title: "Media Sosial",
    description: "Sampaikan pengaduan melalui media sosial resmi kami",
    icon: MessageCircle,
    channels: [
      { name: "Facebook: DP3AP2KB Sumbar", link: "https://facebook.com/dp3ap2kb.sumbar", type: "external" },
      { name: "Instagram: @dp3ap2kb_sumbar", link: "https://instagram.com/dp3ap2kb_sumbar", type: "external" },
      { name: "Twitter: @dp3ap2kb_sumbar", link: "https://twitter.com/dp3ap2kb_sumbar", type: "external" }
    ],
    waktu: "Respons 1x24 jam",
    kelebihan: ["Platform familiar", "Dapat viral", "Dokumentasi publik", "Mudah share"]
  }
] as const;

const ALUR_PENGADUAN = [
  {
    step: 1,
    title: "Penerimaan Pengaduan",
    description: "Pengaduan diterima melalui berbagai saluran yang tersedia",
    icon: FileCheck,
    waktu: "Hari ke-1",
    detail: "Verifikasi kelengkapan data dan identitas pengadu"
  },
  {
    step: 2,
    title: "Registrasi & Klasifikasi",
    description: "Pengaduan didaftarkan dan diklasifikasikan sesuai jenis",
    icon: Search,
    waktu: "Hari ke-1",
    detail: "Pemberian nomor registrasi dan penentuan prioritas"
  },
  {
    step: 3,
    title: "Penelitian & Verifikasi",
    description: "Tim melakukan penelitian dan verifikasi lapangan",
    icon: Eye,
    waktu: "Hari ke-2-7",
    detail: "Koordinasi dengan unit terkait dan pengumpulan data"
  },
  {
    step: 4,
    title: "Penyelesaian",
    description: "Tindak lanjut penyelesaian sesuai hasil penelitian",
    icon: CheckCircle,
    waktu: "Hari ke-8-14",
    detail: "Implementasi solusi dan koordinasi dengan pihak terkait"
  },
  {
    step: 5,
    title: "Pelaporan",
    description: "Penyampaian hasil penyelesaian kepada pengadu",
    icon: Send,
    waktu: "Hari ke-14",
    detail: "Konfirmasi penyelesaian dan dokumentasi"
  }
] as const;

const FAQ_PENGADUAN = [
  {
    id: 1,
    pertanyaan: "Apakah pengaduan dapat disampaikan secara anonim?",
    jawaban: "Ya, kami menerima pengaduan anonim. Namun untuk tindak lanjut yang optimal, disarankan menyertakan identitas yang dapat dihubungi."
  },
  {
    id: 2,
    pertanyaan: "Berapa lama waktu penyelesaian pengaduan?",
    jawaban: "Waktu penyelesaian maksimal 14 hari kerja sejak pengaduan diterima. Untuk kasus darurat dapat diprioritaskan."
  },
  {
    id: 3,
    pertanyaan: "Bagaimana cara mengetahui status pengaduan saya?",
    jawaban: "Anda dapat menghubungi petugas pengaduan dengan menyebutkan nomor registrasi atau melalui sistem tracking online."
  },
  {
    id: 4,
    pertanyaan: "Apakah ada biaya untuk mengajukan pengaduan?",
    jawaban: "Tidak ada biaya apapun. Semua layanan pengaduan di DP3AP2KB Provinsi Sumatera Barat adalah gratis."
  },
  {
    id: 5,
    pertanyaan: "Apa yang harus dilakukan jika pengaduan tidak ditanggapi?",
    jawaban: "Anda dapat mengajukan pengaduan lanjutan ke atasan langsung atau melalui jalur pengaduan eksternal seperti Ombudsman."
  }
] as const;

const PETUGAS_PENGADUAN = [
  {
    nama: "Ahmad Rizki, S.Sos",
    jabatan: "Koordinator Pengaduan",
    bidang: "Pelayanan Publik & Administrasi",
    telepon: "(0751) 123-456 ext. 201",
    email: "pengaduan@dp3ap2kb.sumbarprov.go.id",
    whatsapp: "0812-3456-7890"
  },
  {
    nama: "Siti Aminah, S.H",
    jabatan: "Petugas Pengaduan PP&PA",
    bidang: "Pemberdayaan Perempuan & Perlindungan Anak",
    telepon: "(0751) 123-456 ext. 202",
    email: "pppa@dp3ap2kb.sumbarprov.go.id",
    whatsapp: "0812-3456-7891"
  },
  {
    nama: "Dr. Budi Santoso, M.Kes",
    jabatan: "Petugas Pengaduan KB",
    bidang: "Keluarga Berencana & Kesehatan Reproduksi",
    telepon: "(0751) 123-456 ext. 203",
    email: "kb@dp3ap2kb.sumbarprov.go.id",
    whatsapp: "0812-3456-7892"
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
    <span className="text-gray-700">Pengelolaan Pengaduan</span>
  </motion.nav>
));

BreadcrumbNav.displayName = 'BreadcrumbNav';

const JenisPengaduanCard = memo(({ jenis, index }: { jenis: typeof JENIS_PENGADUAN[number], index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = jenis.icon;
  
  const colorClasses = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
    purple: "bg-purple-50 border-purple-200 text-purple-700",
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    orange: "bg-orange-50 border-orange-200 text-orange-700"
  };
  
  const iconColorClasses = {
    emerald: "bg-emerald-100 text-emerald-600",
    purple: "bg-purple-100 text-purple-600",
    blue: "bg-blue-100 text-blue-600",
    orange: "bg-orange-100 text-orange-600"
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-md ${colorClasses[jenis.color as keyof typeof colorClasses]}`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${iconColorClasses[jenis.color as keyof typeof iconColorClasses]}`}>
          <IconComponent className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-2">{jenis.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{jenis.description}</p>
        </div>
      </div>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left text-emerald-700 font-medium hover:text-emerald-800 transition-colors flex items-center justify-between"
      >
        <span>Lihat Contoh Kasus</span>
        <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
      </button>
      
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          <h4 className="font-semibold text-gray-900 mb-2">Contoh Kasus:</h4>
          <ul className="space-y-1">
            {jenis.contoh.map((contoh, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                {contoh}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
});

JenisPengaduanCard.displayName = 'JenisPengaduanCard';

const CaraPengaduanCard = memo(({ cara, index }: { cara: typeof CARA_PENGADUAN[number], index: number }) => {
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
            <h3 className="font-bold text-gray-900 mb-2">{cara.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{cara.description}</p>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">{cara.waktu}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Saluran Tersedia:</h4>
            <div className="space-y-2">
              {cara.channels.map((channel, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-gray-400" />
                  {channel.type === 'external' || channel.type === 'phone' || channel.type === 'sms' || channel.type === 'whatsapp' ? (
                    <a 
                      href={channel.link} 
                      target={channel.type === 'external' || channel.type === 'whatsapp' ? '_blank' : undefined}
                      rel={channel.type === 'external' || channel.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                      className="text-sm text-emerald-700 hover:text-emerald-800 hover:underline transition-colors"
                    >
                      {channel.name}
                    </a>
                  ) : (
                    <Link href={channel.link} className="text-sm text-emerald-700 hover:text-emerald-800 hover:underline transition-colors">
                      {channel.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Kelebihan:</h4>
            <div className="flex flex-wrap gap-1">
              {cara.kelebihan.map((kelebihan, idx) => (
                <span key={idx} className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-1 rounded-full">
                  {kelebihan}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

CaraPengaduanCard.displayName = 'CaraPengaduanCard';

const AlurPengaduanStep = memo(({ alur, index, isLast }: { alur: typeof ALUR_PENGADUAN[number], index: number, isLast: boolean }) => {
  const IconComponent = alur.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex items-start gap-4"
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-emerald-600" />
        </div>
        {!isLast && (
          <div className="w-0.5 h-16 bg-emerald-200 mt-2"></div>
        )}
      </div>
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            Step {alur.step}
          </span>
          <span className="text-sm text-emerald-700 font-medium">{alur.waktu}</span>
        </div>
        <h3 className="font-bold text-gray-900 mb-2">{alur.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{alur.description}</p>
        <p className="text-gray-500 text-xs italic">{alur.detail}</p>
      </div>
    </motion.div>
  );
});

AlurPengaduanStep.displayName = 'AlurPengaduanStep';

const FAQItem = memo(({ faq, index }: { faq: typeof FAQ_PENGADUAN[number], index: number }) => {
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

export default function PengelolaanPengaduan() {
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
              PENGELOLAAN PENGADUAN
            </h1>
            <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
              Sistem pengelolaan pengaduan masyarakat yang profesional, transparan, 
              dan bertanggung jawab untuk meningkatkan kualitas pelayanan publik
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
            {/* Jenis Pengaduan */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Jenis Pengaduan yang Dapat Disampaikan
                </h2>
                <p className="text-gray-600">
                  Berbagai jenis pengaduan yang dapat Anda sampaikan kepada kami
                </p>
              </div>
              
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {JENIS_PENGADUAN.map((jenis, index) => (
                  <JenisPengaduanCard key={jenis.id} jenis={jenis} index={index} />
                ))}
              </motion.div>
            </motion.section>

            {/* Cara Menyampaikan Pengaduan */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Cara Menyampaikan Pengaduan
                </h2>
                <p className="text-gray-600">
                  Pilih saluran yang paling sesuai dengan kebutuhan Anda
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CARA_PENGADUAN.map((cara, index) => (
                  <CaraPengaduanCard key={cara.id} cara={cara} index={index} />
                ))}
              </div>
            </motion.section>

            {/* Alur Pengelolaan Pengaduan */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Alur Pengelolaan Pengaduan
                </h2>
                <div className="space-y-0">
                  {ALUR_PENGADUAN.map((alur, index) => (
                    <AlurPengaduanStep 
                      key={alur.step} 
                      alur={alur} 
                      index={index} 
                      isLast={index === ALUR_PENGADUAN.length - 1}
                    />
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <div className="flex items-start gap-2">
                    <Timer className="w-5 h-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-emerald-800 mb-1">Waktu Penyelesaian</h4>
                      <p className="text-sm text-emerald-700">
                        Maksimal 14 hari kerja sejak pengaduan diterima. 
                        Untuk kasus darurat dapat diprioritaskan dan diselesaikan lebih cepat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* FAQ */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Pertanyaan yang Sering Diajukan
                </h2>
                <div className="space-y-4">
                  {FAQ_PENGADUAN.map((faq, index) => (
                    <FAQItem key={faq.id} faq={faq} index={index} />
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            {/* Tombol Pengaduan Cepat */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl p-6 mb-6"
            >
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Send className="w-5 h-5" />
                Sampaikan Pengaduan
              </h3>
              <p className="text-emerald-100 text-sm mb-4">
                Laporkan keluhan atau masalah Anda dengan mudah dan cepat
              </p>
              <div className="space-y-2">
                <a 
                  href="https://www.lapor.go.id/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-emerald-700 text-center py-2 px-4 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
                >
                  Lapor Online
                </a>
                <a 
                  href="tel:0751123456"
                  className="block w-full bg-emerald-500 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-emerald-400 transition-colors"
                >
                  Telepon Langsung
                </a>
              </div>
            </motion.div>

            {/* Petugas Pengaduan */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 mb-6"
            >
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Headphones className="w-5 h-5 text-emerald-600" />
                Petugas Pengaduan
              </h3>
              <div className="space-y-4">
                {PETUGAS_PENGADUAN.map((petugas, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="p-4 border border-gray-200 rounded-lg hover:border-emerald-200 hover:bg-emerald-50/30 transition-all"
                  >
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900">{petugas.nama}</p>
                      <p className="text-sm text-emerald-700 font-medium">{petugas.jabatan}</p>
                      <p className="text-xs text-gray-600">{petugas.bidang}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                        <Phone className="w-3 h-3" />
                        <a href={`tel:${petugas.telepon.replace(/[^\d]/g, '')}`} className="hover:text-emerald-600">
                          {petugas.telepon}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Mail className="w-3 h-3" />
                        <a href={`mailto:${petugas.email}`} className="hover:text-emerald-600">
                          {petugas.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <MessageCircle className="w-3 h-3" />
                        <a href={`https://wa.me/62${petugas.whatsapp.substring(1)}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600">
                          {petugas.whatsapp}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Informasi Penting */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-6"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-orange-800 mb-2">Informasi Penting</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Sertakan data dan bukti yang lengkap</li>
                    <li>• Cantumkan kontak yang dapat dihubungi</li>
                    <li>• Sampaikan secara objektif dan faktual</li>
                    <li>• Untuk kasus darurat hubungi langsung</li>
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
