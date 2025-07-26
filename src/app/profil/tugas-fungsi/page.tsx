"use client";
import { memo, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ChevronRight, 
  MapPin, 
  Mail, 
  Phone, 
  FileText, 
  Users, 
  Target, 
  Shield, 
  Heart,
  Clock,
  Award,
  Building
} from "lucide-react";

// Simplified animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const staggerItem = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 }
};

// Data constants moved to separate objects for better organization
const TUGAS_POKOK = {
  title: "Tugas Pokok",
  description: "Melaksanakan penyusunan dan pelaksanaan kebijakan daerah bidang Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana.",
  dasarHukum: [
    "Peraturan Daerah Provinsi Sumatera Barat Nomor 13 Tahun 2019",
    "Peraturan Daerah Provinsi Sumatera Barat Nomor 8 Tahun 2016", 
    "Peraturan Gubernur Sumatera Barat Nomor 3 Tahun 2020",
    "Peraturan Gubernur Sumatera Barat Nomor 67 Tahun 2020"
  ]
} as const;

const FUNGSI_UTAMA = [
  {
    id: 1,
    title: "Perumusan Kebijakan",
    description: "Perumusan kebijakan teknis bidang Pemberdayaan Perempuan dan Perlindungan Anak",
    icon: FileText
  },
  {
    id: 2,
    title: "Penyelenggaraan Urusan PP&PA",
    description: "Penyelenggaraan urusan pemerintahan dan pelayanan umum bidang Pemberdayaan Perempuan dan Perlindungan Anak",
    icon: Users
  },
  {
    id: 3,
    title: "Penyelenggaraan Dalduks & KB",
    description: "Penyelenggaraan urusan pemerintahan dan pelayanan umum bidang Pengendalian Penduduk dan Keluarga Berencana",
    icon: Target
  },
  {
    id: 4,
    title: "Pembinaan PP&PA",
    description: "Pembinaan dan fasilitasi bidang Pemberdayaan Perempuan dan Perlindungan Anak lingkup Provinsi dan Kabupaten/Kota",
    icon: Shield
  },
  {
    id: 5,
    title: "Pembinaan Dalduks & KB",
    description: "Pembinaan dan fasilitasi bidang Pengendalian Penduduk dan Keluarga Berencana lingkup Provinsi dan Kabupaten/Kota",
    icon: Heart
  },
  {
    id: 6,
    title: "Kesekretariatan",
    description: "Pelaksanaan kesekretariatan dinas dan administrasi umum",
    icon: Building
  },
  {
    id: 7,
    title: "Fungsi Lainnya",
    description: "Pelaksanaan fungsi kedinasan lain yang diberikan oleh pimpinan sesuai dengan tugas dan fungsinya",
    icon: Award
  }
] as const;

const BERITA_POPULER = [
  {
    id: 1,
    title: "Sosialisasi Program Pemberdayaan Perempuan di Kabupaten Padang Pariaman",
    date: "2025-01-15",
    image: "/images/berita1.jpg",
    link: "/berita/1",
    kategori: "Pemberdayaan Perempuan"
  },
  {
    id: 2,
    title: "Workshop Perlindungan Anak dari Kekerasan Online",
    date: "2025-01-10",
    image: "/images/berita2.jpg",
    link: "/berita/2",
    kategori: "Perlindungan Anak"
  },
  {
    id: 3,
    title: "Rencana Aksi DP3AP2KB Tahun 2025 untuk Kesejahteraan Keluarga",
    date: "2025-01-05",
    image: "/images/berita3.jpg",
    link: "/berita/3",
    kategori: "Keluarga Berencana"
  }
] as const;

const QUICK_LINKS = [
  { label: "PPID", icon: FileText, href: "/ppid", color: "bg-blue-50 hover:bg-blue-100 text-blue-700" },
  { label: "Pengumuman", icon: FileText, href: "/pengumuman", color: "bg-green-50 hover:bg-green-100 text-green-700" },
  { label: "Download", icon: FileText, href: "/download", color: "bg-purple-50 hover:bg-purple-100 text-purple-700" },
  { label: "Statistik", icon: Target, href: "/statistik", color: "bg-orange-50 hover:bg-orange-100 text-orange-700" }
] as const;

const PEJABAT = [
  {
    nama: "Mahyeldi Ansharullah",
    jabatan: "Gubernur Sumatera Barat",
    image: "/images/gubernur.jpg",
    badge: "Gubernur",
  },
  {
    nama: "Vasko Ruseimy",
    jabatan: "Wakil Gubernur Sumatera Barat",
    image: "/images/wagub.jpg",
    badge: "Wakil Gubernur",
  },
] as const;

const CONTACT_INFO = [
  {
    label: "Alamat",
    value: "Jl. Khatib Sulaiman No.1, Padang, Sumatera Barat",
    icon: MapPin
  },
  {
    label: "Email",
    value: "dp3ap2kb@sumbarprov.go.id",
    icon: Mail
  },
  {
    label: "Telepon",
    value: "(0751) 123-456",
    icon: Phone
  }
] as const;

// Memoized Components for better performance
const BreadcrumbNav = memo(() => (
  <motion.nav
    {...fadeInUp}
    className="flex items-center gap-1 text-sm text-gray-600"
  >
    <Link href="/" className="hover:underline text-green-700 font-semibold transition-colors">
      Beranda
    </Link>
    <ChevronRight size={16} className="text-gray-400" />
    <Link href="/profil" className="hover:underline text-green-700 font-semibold transition-colors">
      Profil
    </Link>
    <ChevronRight size={16} className="text-gray-400" />
    <span className="text-gray-700">Tugas dan Fungsi</span>
  </motion.nav>
));

BreadcrumbNav.displayName = 'BreadcrumbNav';

const TugasPokokSection = memo(() => (
  <div className="mb-8">
    <motion.h2 
      {...fadeInUp}
      className="text-2xl font-bold text-gray-900 mb-6 text-center"
    >
      {TUGAS_POKOK.title}
    </motion.h2>
    
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl"
      >
        <p className="text-green-800 leading-relaxed italic">
          "{TUGAS_POKOK.description}"
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h3 className="font-semibold text-gray-900 mb-4">Dasar Hukum:</h3>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid gap-3"
        >
          {TUGAS_POKOK.dasarHukum.map((hukum, index) => (
            <motion.div 
              key={index}
              variants={staggerItem}
              className="p-4 border border-gray-200 rounded-xl hover:border-green-200 hover:bg-green-50/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 text-gray-700">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs font-bold">{index + 1}</span>
                </div>
                <span className="group-hover:text-green-700 transition-colors">{hukum}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </div>
));

TugasPokokSection.displayName = 'TugasPokokSection';

const FungsiUtamaSection = memo(() => (
  <div>
    <motion.h2 
      {...fadeInUp}
      className="text-2xl font-bold text-gray-900 mb-6 text-center"
    >
      Fungsi Utama
    </motion.h2>
    
    <motion.div 
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid gap-4"
    >
      {FUNGSI_UTAMA.map((fungsi, index) => (
        <motion.div
          key={fungsi.id}
          variants={staggerItem}
          whileHover={{ scale: 1.01 }}
          className="p-6 border border-gray-200 rounded-xl hover:border-green-200 hover:bg-green-50/30 transition-all duration-300 group cursor-pointer"
        >
          <div className="w-full">
            <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
              {fungsi.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{fungsi.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
));

FungsiUtamaSection.displayName = 'FungsiUtamaSection';

const PejabatCard = memo(({ pejabat, index }: { pejabat: typeof PEJABAT[number], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -2 }}
    className="text-center cursor-pointer"
  >
    <div className="w-20 h-24 relative mx-auto mb-3 rounded-xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg">
      <Image 
        src={pejabat.image} 
        alt={`${pejabat.nama} - ${pejabat.jabatan}`} 
        fill 
        className="object-cover object-top transition-transform duration-300 hover:scale-105" 
        sizes="80px"
        priority={index === 0}
      />
    </div>
    <h4 className="font-semibold text-gray-900 text-sm mb-1">{pejabat.nama}</h4>
    <p className="text-xs text-gray-600 mb-2">{pejabat.jabatan}</p>
    <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
      {pejabat.badge}
    </span>
  </motion.div>
));

PejabatCard.displayName = 'PejabatCard';

const BeritaCard = memo(({ berita, index }: { berita: typeof BERITA_POPULER[number], index: number }) => {
  const formattedDate = useMemo(() => 
    new Date(berita.date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }), [berita.date]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link 
        href={berita.link}
        className="group block hover:bg-gray-50 rounded-lg p-3 transition-all duration-300"
      >
        <div className="flex gap-3">
          <div className="w-16 h-12 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
            <Image 
              src={berita.image} 
              alt={berita.title} 
              fill 
              className="object-cover transition-transform duration-300 group-hover:scale-105" 
              sizes="64px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                {berita.kategori}
              </span>
            </div>
            <h4 className="text-sm font-medium text-gray-900 group-hover:text-green-600 line-clamp-2 transition-colors leading-tight mb-1">
              {berita.title}
            </h4>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
});

BeritaCard.displayName = 'BeritaCard';

const QuickLinkItem = memo(({ link, index }: { link: typeof QUICK_LINKS[number], index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
  >
    <Link
      href={link.href}
      className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all duration-300 text-sm hover:shadow-sm ${link.color}`}
    >
      <link.icon size={16} />
      <span className="font-medium">{link.label}</span>
      <ChevronRight size={14} className="ml-auto transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  </motion.div>
));

QuickLinkItem.displayName = 'QuickLinkItem';

const ContactItem = memo(({ contact }: { contact: typeof CONTACT_INFO[number] }) => (
  <div className="flex items-start gap-3">
    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
      <contact.icon size={16} />
    </div>
    <div>
      <p className="font-medium text-sm mb-1">{contact.label}</p>
      <p className="text-green-100 text-sm">{contact.value}</p>
    </div>
  </div>
));

ContactItem.displayName = 'ContactItem';

const HeaderSection = memo(() => (
  <>
    {/* Green Header Box */}
    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            TUGAS DAN FUNGSI DP3AP2KB SUMATERA BARAT
          </h1>
        </motion.div>
      </div>
    </div>

    {/* Breadcrumb Section */}
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <BreadcrumbNav />
      </div>
    </div>
  </>
));

HeaderSection.displayName = 'HeaderSection';

const MainContent = memo(() => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
  >
    <TugasPokokSection />
    
    {/* Divider */}
    <div className="border-t border-gray-200 my-8"></div>
    
    <FungsiUtamaSection />
  </motion.section>
));

MainContent.displayName = 'MainContent';

const Sidebar = memo(() => (
  <div className="space-y-6">
    {/* Pimpinan */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
    >
      <h3 className="font-bold text-gray-900 mb-6 text-center">
        Pimpinan Daerah
      </h3>
      <div className="space-y-6">
        {PEJABAT.map((p, index) => (
          <PejabatCard key={p.nama} pejabat={p} index={index} />
        ))}
      </div>
    </motion.div>

    {/* Berita Terkait */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
    >
      <h3 className="font-bold text-gray-900 mb-4">Berita Terkait</h3>
      <div className="space-y-4">
        {BERITA_POPULER.map((berita, index) => (
          <BeritaCard key={berita.id} berita={berita} index={index} />
        ))}
      </div>
      <Link 
        href="/berita" 
        className="block text-center text-green-600 text-sm font-medium hover:text-green-700 transition-colors mt-4 pt-3 border-t border-gray-100"
      >
        Lihat Semua Berita →
      </Link>
    </motion.div>

    {/* Quick Links */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
    >
      <h3 className="font-bold text-gray-900 mb-4">Akses Cepat</h3>
      <div className="space-y-3">
        {QUICK_LINKS.map((link, index) => (
          <QuickLinkItem key={link.href} link={link} index={index} />
        ))}
      </div>
    </motion.div>

    {/* Kontak */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white shadow-lg"
    >
      <h3 className="font-bold mb-4">Hubungi Kami</h3>
      <div className="space-y-3">
        {CONTACT_INFO.map((contact, index) => (
          <ContactItem key={contact.label} contact={contact} />
        ))}
      </div>
      <Link
        href="/profil/hubungi"
        className="block w-full text-center bg-white/20 hover:bg-white/30 py-3 rounded-lg font-medium transition-all duration-300 mt-4"
      >
        Kontak Lengkap
      </Link>
    </motion.div>
  </div>
));

Sidebar.displayName = 'Sidebar';

export default function TugasFungsi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeaderSection />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content Area */}
          <div className="lg:col-span-2">
            <MainContent />
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
