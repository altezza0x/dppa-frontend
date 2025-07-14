"use client";
import { FileText, Search, Users, TrendingUp, BarChart3, Calendar, Megaphone, Shield, FileCheck, Scale, MessageSquare, Phone, Mail, MapPin, ArrowRight, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { colors, colorCombinations, getColor } from '@/config/colors';

// Dummy data layanan publik (pakai string nama icon)
const layananPublik = [
  { nama: 'Pengaduan Kekerasan', icon: 'Shield', link: '/layanan/pengaduan-kekerasan' },
  { nama: 'Konsultasi KB', icon: 'Users', link: '/layanan/konsultasi-kb' },
  { nama: 'Bantuan Hukum Anak', icon: 'Scale', link: '/layanan/bantuan-hukum-anak' },
  { nama: 'Perizinan Online', icon: 'FileCheck', link: '/layanan/perizinan-online' },
];

// Dummy data agenda
const agendaKegiatan = [
  { tanggal: '15 Jul', judul: 'Sosialisasi Program KB', waktu: '09:00 WIB', lokasi: 'Aula Kantor Dinas' },
  { tanggal: '18 Jul', judul: 'Pelatihan Kader Posyandu', waktu: '13:00 WIB', lokasi: 'Gedung Serbaguna' },
  { tanggal: '22 Jul', judul: 'Seminar Perlindungan Anak', waktu: '09:00 WIB', lokasi: 'Hotel Grand Zuri' },
];

// Dummy statistik
const statistikPengunjung = [
  { jumlah: '1,234', label: 'Hari Ini', icon: <Users size={18} /> },
  { jumlah: '5,678', label: 'Minggu Ini', icon: <TrendingUp size={18} /> },
  { jumlah: '15,234', label: 'Bulan Ini', icon: <BarChart3 size={18} /> },
  { jumlah: '256,789', label: 'Total', icon: <Users size={18} /> },
];

// Dummy berita
const articles = [
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
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HomePage() {
  const [showButton, setShowButton] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // Mapping nama icon ke komponen
  const iconMap = { Shield, Users, Scale, FileCheck };
  return (
    <>
      {/* Hero Section - Split Layout Tanpa Animasi */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Split Background Dekoratif (tetap, tanpa animasi) */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
            {/* Dekorasi dots/hexagon bisa tetap statis di sini jika ingin */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" className="w-full h-full">
                <defs>
                  <pattern id="hexPattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                    <polygon points="30,2 50,17 50,35 30,50 10,35 10,17" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hexPattern)" className={colors.semantic.accent.emerald}/>
              </svg>
            </div>
          </div>
          <div className="w-1/2 h-full bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-900 relative">
            <div className="absolute inset-0 opacity-8">
              <svg width="100%" height="100%" className="w-full h-full">
                <defs>
                  <pattern id="hexPatternRight" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                    <polygon points="30,2 50,17 50,35 30,50 10,35 10,17" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hexPatternRight)" className={colors.semantic.accent.teal}/>
              </svg>
            </div>
          </div>
        </div>
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content - Text */}
            <div className={`${colors.text.white} space-y-8`}>
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                  <span className={`block ${colorCombinations.heroTitle}`}>Selamat Datang</span>
                  <span className="block">di Website</span>
                  <span className={`block ${colorCombinations.heroTitle}`}>Resmi</span>
                </h1>
                <p className={`text-xl md:text-2xl ${colorCombinations.heroSubtitle} leading-relaxed max-w-lg`}>
                  Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <Link 
                  href="/layanan"
                  className={`flex-1 w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 ${colorCombinations.heroButtonPrimary} px-4 py-2 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl text-sm`}
                >
                  <span>Layanan Publik</span>
                </Link>
                <Link 
                  href="/profil"
                  className={`flex-1 w-full sm:w-auto border-2 border-emerald-400/50 ${colorCombinations.heroButtonSecondary} hover:bg-emerald-500/10 px-4 py-2 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm text-sm`}
                >
                  <Users size={15} />
                  <span>Tentang Kami</span>
                </Link>
              </div>
            </div>
            {/* Right Content - Simple Service Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <Shield size={20} className={colors.components.icon.white} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${colors.components.hero.cardTitle}`}>Layanan Digital</h3>
                    <p className={`text-sm ${colors.components.hero.cardSubtitle}`}>Portal Layanan Terpadu</p>
                  </div>
                </div>
                {/* Service List */}
                <div className="space-y-3 mb-6">
                  {[
                    { icon: FileCheck, label: "E-Perizinan", desc: "Layanan perizinan online" },
                    { icon: Users, label: "Bantuan KB", desc: "Program keluarga berencana" },
                    { icon: Shield, label: "Perlindungan", desc: "Perlindungan anak & perempuan" },
                    { icon: Calendar, label: "Agenda Kegiatan", desc: "Jadwal kegiatan dinas" }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
                    >
                      <div className="w-8 h-8 bg-white/10 group-hover:bg-emerald-500/20 rounded-lg flex items-center justify-center transition-colors">
                        <item.icon size={16} className={`${colors.components.hero.iconDefault} group-hover:${colors.components.hero.iconHover} transition-colors`} />
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-medium ${colors.components.hero.serviceLabel}`}>{item.label}</div>
                        <div className={`text-xs ${colors.components.hero.serviceDesc}`}>{item.desc}</div>
                      </div>
                      <ArrowRight size={14} className={`${colors.text.gray.base} group-hover:${colors.components.hero.iconHover} group-hover:translate-x-1 transition-all`} />
                    </div>
                  ))}
                </div>
                {/* Action Button */}
                <div>
                  <Link 
                    href="/layanan"
                    className={`w-full bg-emerald-500/90 hover:bg-emerald-500 ${colors.text.white} font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors backdrop-blur-sm`}
                  >
                    <span>Lihat Semua Layanan</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Publik Populer */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mb-8"
        >
          <h2 className={`text-xl md:text-2xl font-bold ${colorCombinations.sectionTitle} mb-6 text-center`}>Layanan Publik Populer</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {layananPublik.map((layanan, idx) => {
              const Icon = iconMap[layanan.icon as keyof typeof iconMap];
              return (
                <Link
                  key={idx}
                  href={layanan.link}
                  className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center gap-2 hover:bg-green-50 transition group"
                >
                  <span className={`bg-green-100 ${colors.primary.green.medium} p-3 rounded-full group-hover:bg-green-200 transition-colors`}>
                    {Icon && <Icon size={20} />}
                  </span>
                  <span className={`font-semibold ${colorCombinations.serviceTitle} text-sm text-center group-hover:${colors.components.service.titleHover} transition-colors`}>{layanan.nama}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Agenda & Layanan Digital (row) */}
      <section className="container mx-auto px-4 pb-8 md:pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Agenda */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md p-6 mb-4 md:mb-0"
          >
            <h3 className={`text-lg font-bold ${colors.components.agenda.title} mb-4 flex items-center gap-2`}><Calendar size={20} className={colors.components.icon.primary} /> Agenda Kegiatan</h3>
            <ul className="divide-y divide-green-50">
              {agendaKegiatan.map((agenda, idx) => (
                <li key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <span className={`font-semibold ${colors.components.agenda.eventTitle}`}>{agenda.judul}</span>
                    <div className={`text-xs ${colors.components.agenda.eventMeta} flex items-center gap-2 mt-1`}>
                      <Calendar size={14} /> {agenda.tanggal} <span>|</span> 
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {agenda.lokasi}
                      </span>
                    </div>
                  </div>
                  <span className={`text-xs ${colors.components.agenda.eventTime} bg-green-50 px-3 py-1 rounded-full font-semibold mt-2 sm:mt-0`}>{agenda.waktu}</span>
                </li>
              ))}
            </ul>
            <Link href="/agenda" className={`${colors.components.agenda.link} text-sm font-semibold hover:underline mt-4 inline-flex items-center gap-1 group`}>Lihat Semua Agenda <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></Link>
          </motion.div>
          {/* Layanan Digital Utama */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-center"
          >
            <h3 className={`text-lg font-bold ${colorCombinations.sectionTitle} mb-4 flex items-center gap-2`}><FileCheck size={20} className={colors.components.icon.primary} /> Layanan Digital Utama</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/layanan/e-ktp" className="flex flex-col items-center gap-2 bg-green-50 rounded-lg p-4 hover:bg-green-100 transition">
                <FileText size={28} className={colors.components.service.icon} />
                <span className={`font-semibold ${colorCombinations.serviceTitle} text-sm text-center`}>e-KTP Online</span>
              </Link>
              <Link href="/layanan/perizinan-online" className="flex flex-col items-center gap-2 bg-green-50 rounded-lg p-4 hover:bg-green-100 transition">
                <FileCheck size={28} className={colors.components.service.icon} />
                <span className={`font-semibold ${colorCombinations.serviceTitle} text-sm text-center`}>Perizinan Online</span>
              </Link>
              <Link href="/layanan/bantuan-sosial" className="flex flex-col items-center gap-2 bg-green-50 rounded-lg p-4 hover:bg-green-100 transition">
                <Users size={28} className={colors.components.service.icon} />
                <span className={`font-semibold ${colorCombinations.serviceTitle} text-sm text-center`}>Bantuan Sosial</span>
              </Link>
              <Link href="/layanan/pengaduan-kekerasan" className="flex flex-col items-center gap-2 bg-green-50 rounded-lg p-4 hover:bg-green-100 transition">
                <Megaphone size={28} className={colors.components.service.icon} />
                <span className={`font-semibold ${colorCombinations.serviceTitle} text-sm text-center`}>Pengaduan Kekerasan</span>
              </Link>
            </div>
            <div className="flex justify-end mt-4">
              <Link href="/layanan" className={`${colorCombinations.cardLink} text-sm font-semibold hover:underline inline-flex items-center gap-1 group`}>Semua Layanan <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Berita & Pengumuman Terbaru */}
      <section className="container mx-auto px-4 pb-8 md:pb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h2 className={`text-xl md:text-2xl font-bold ${colorCombinations.sectionTitle}`}>Berita & Pengumuman Terbaru</h2>
            <div className="relative w-full md:w-72">
              <input type="text" placeholder="Cari berita..." className="w-full pl-10 pr-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white" />
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-green-400" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs ${colors.components.news.meta} flex items-center gap-1`}><Calendar size={14} className={colors.components.icon.primary} />{article.date}</span>
                    <span className={`text-xs ${colors.components.news.meta} flex items-center gap-1`}><FileText size={14} className={colors.components.icon.primary} />{article.views}</span>
                  </div>
                  <h2 className={`text-lg font-bold ${colors.components.news.title} mb-2 leading-tight group-hover:${colors.components.news.titleHover} transition-colors`}>
                    <Link href="#">{article.title}</Link>
                  </h2>
                  <p className={`${colors.components.news.content} text-sm mb-4 line-clamp-3`}>{article.excerpt}</p>
                  <Link href="#" className={`inline-flex items-center gap-1 ${colors.components.news.link} text-sm font-semibold hover:${colors.components.news.linkHover} mt-auto group-hover:gap-2 transition-all`}>Baca Selengkapnya <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/berita" className={`bg-green-600 ${colors.text.white} px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2`}>Lihat Semua Berita <ArrowRight size={16} /></Link>
          </div>
        </motion.div>
      </section>

      {/* Info Gubernur & Kontak Cepat */}
      <section className="container mx-auto px-4 pb-12">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Gubernur & Wakil */}
          <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col items-center md:items-start justify-center gap-4 min-w-[260px]">
            <div className="flex items-center gap-4 w-full">
              <img src="/images/gubernur.jpg" alt="Gubernur Sumatera Barat" className="w-20 h-24 object-cover rounded-lg shadow-md" />
              <div>
                <h4 className={`font-bold ${colors.components.contact.title} text-lg`}>H. Mahyeldi Ansharullah, SP</h4>
                <span className={`inline-block bg-green-100 ${colors.components.contact.subtitle} text-xs font-semibold px-2 py-0.5 rounded mb-1`}>Gubernur</span>
                <p className={`text-xs ${colors.components.contact.text}`}>"Mewujudkan Sumatera Barat Madani, Unggul dan Berkelanjutan"</p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full">
              <img src="/images/wagub.jpg" alt="Wakil Gubernur Sumatera Barat" className="w-20 h-24 object-cover rounded-lg shadow-md" />
              <div>
                <h4 className={`font-bold ${colors.components.contact.title} text-lg`}>Vasko Ruseimy, ST</h4>
                <span className={`inline-block bg-green-100 ${colors.components.contact.subtitle} text-xs font-semibold px-2 py-0.5 rounded mb-1`}>Wakil Gubernur</span>
                <p className={`text-xs ${colors.components.contact.text}`}>"Bersama membangun masa depan generasi emas Sumbar"</p>
              </div>
            </div>
          </div>
          {/* Kontak & Pengaduan */}
          <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 justify-center min-w-[260px]">
            <h3 className={`text-base font-bold ${colorCombinations.sectionTitle} mb-2 flex items-center gap-2`}><MessageSquare size={20} className={colors.components.icon.primary} /> Kontak & Pengaduan Cepat</h3>
            <div className={`flex flex-col gap-2 ${colors.components.contact.link} text-sm`}>
              <span className="flex items-center gap-2"><Phone size={16}/> 0751-123456</span>
              <span className="flex items-center gap-2"><Mail size={16}/> dp3ap2kb@sumbarprov.go.id</span>
              <span className="flex items-center gap-2"><MapPin size={16}/> Jl. Khatib Sulaiman No.1, Padang</span>
            </div>
            <Link href="/lapor" className={`bg-green-600 ${colors.text.white} px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2 justify-center mt-2`}><MessageSquare size={18} /> Lapor Pengaduan</Link>
          </div>
        </div>
      </section>

      {/* Statistik Pengunjung (simple, paling bawah) */}
      <section className="container mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className={`text-base font-bold ${colors.components.stats.title} mb-4 flex items-center gap-2`}><BarChart3 size={18} className={colors.components.icon.primary} /> Statistik Pengunjung</h3>
          <div className="flex gap-3 overflow-x-auto md:grid md:grid-cols-4 md:gap-4">
            {statistikPengunjung.map((stat, idx) => (
              <div key={idx} className="min-w-[120px] bg-green-50 rounded-lg p-3 text-center flex-shrink-0">
                <div className={`${colors.components.icon.primary} mb-1 flex justify-center`}>{stat.icon}</div>
                <div className={`text-lg font-bold ${colors.components.stats.value} mb-0.5`}>{stat.jumlah}</div>
                <div className={`text-xs ${colors.components.stats.label}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Floating Scroll-to-Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.7, y: 40 }}
        animate={showButton ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 40 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
        className="fixed bottom-8 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg w-11 h-11 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-400"
        style={{ pointerEvents: showButton ? 'auto' : 'none' }}
      >
        <ArrowUp size={22} />
      </motion.button>
    </>
  );
}
