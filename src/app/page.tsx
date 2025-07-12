"use client";
import { FileText, Search, Users, TrendingUp, BarChart3, Calendar, Megaphone, Shield, FileCheck, Scale, MessageSquare, Phone, Mail, MapPin, ArrowRight, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

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
      {/* Hero Section - Darker, Harmonious, Clean, with Modern Effects */}
      <section className="relative overflow-hidden min-h-[400px] flex items-center justify-center bg-gradient-to-br from-green-700 via-green-600 to-blue-900 px-2 md:px-0 border-b border-green-900/20">
        {/* Blurred blobs for depth */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20 z-0" />
        <div className="absolute top-10 right-0 w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-20 z-0" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-400 rounded-full blur-3xl opacity-20 z-0" />
        {/* Subtle SVG grid dots overlay */}
        <svg className="absolute inset-0 w-full h-full z-0" width="100%" height="100%" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.07}}>
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#fff" />
            </pattern>
          </defs>
          <rect width="1440" height="400" fill="url(#dots)" />
        </svg>
        {/* Subtle abstract icon/shape */}
        <svg className="absolute top-0 right-0 w-40 h-40 z-0 opacity-10" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="70" fill="url(#grad1)" />
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" />
              <stop offset="1" stopColor="#166534" />
            </linearGradient>
          </defs>
        </svg>
        {/* Layered SVG Waves at the bottom - now darker and blended */}
        <svg className="absolute bottom-0 left-0 w-full h-32 z-0" width="100%" height="100%" viewBox="0 0 1440 128" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,80 Q360,128 720,80 T1440,80 V128 H0 V80 Z" fill="#134e4a" fillOpacity="0.85" />
          <path d="M0,120 Q360,60 720,120 T1440,120 V128 H0 V120 Z" fill="#1e3a8a" fillOpacity="0.7" />
        </svg>
        {/* Content */}
        <div className="relative z-10 w-full max-w-2xl mx-auto text-center py-20 md:py-28 px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-white drop-shadow-lg tracking-tight">Selamat Datang di Website Resmi</h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium mb-8">Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana Provinsi Sumatera Barat</p>
          <div className="flex justify-center">
            <Link href="/layanan" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3 rounded-lg shadow-lg transition">Layanan Publik</Link>
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
          <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-6 text-center">Layanan Publik Populer</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {layananPublik.map((layanan, idx) => {
              const Icon = iconMap[layanan.icon as keyof typeof iconMap];
              return (
                <Link
                  key={idx}
                  href={layanan.link}
                  className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center gap-2 hover:bg-green-50 transition group"
                >
                  <span className="bg-green-100 text-green-700 p-3 rounded-full group-hover:bg-green-200 transition-colors">
                    {Icon && <Icon size={20} />}
                  </span>
                  <span className="font-semibold text-green-800 text-sm text-center group-hover:text-green-600 transition-colors">{layanan.nama}</span>
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
            <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2"><Calendar size={20} className="text-green-600" /> Agenda Kegiatan</h3>
            <ul className="divide-y divide-green-50">
              {agendaKegiatan.map((agenda, idx) => (
                <li key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <span className="font-semibold text-green-800">{agenda.judul}</span>
                    <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                      <Calendar size={14} /> {agenda.tanggal} <span>|</span> <span><MapPin size={14} /> {agenda.lokasi}</span>
                    </div>
                  </div>
                  <span className="text-xs text-green-700 bg-green-50 px-3 py-1 rounded-full font-semibold mt-2 sm:mt-0">{agenda.waktu}</span>
                </li>
              ))}
            </ul>
            <Link href="/agenda" className="text-green-600 text-sm font-semibold hover:underline mt-4 inline-flex items-center gap-1 group">Lihat Semua Agenda <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></Link>
          </motion.div>
          {/* Layanan Digital Utama */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-center"
          >
            <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2"><FileCheck size={20} className="text-green-600" /> Layanan Digital Utama</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/layanan/e-ktp" className="flex flex-col items-center gap-2 bg-green-50 rounded-lg p-4 hover:bg-green-100 transition">
                <FileText size={28} className="text-green-700" />
                <span className="font-semibold text-green-800 text-sm text-center">e-KTP Online</span>
              </Link>
              <Link href="/layanan/perizinan-online" className="flex flex-col items-center gap-2 bg-green-50 rounded-lg p-4 hover:bg-green-100 transition">
                <FileCheck size={28} className="text-green-700" />
                <span className="font-semibold text-green-800 text-sm text-center">Perizinan Online</span>
              </Link>
              <Link href="/layanan/bantuan-sosial" className="flex flex-col items-center gap-2 bg-green-50 rounded-lg p-4 hover:bg-green-100 transition">
                <Users size={28} className="text-green-700" />
                <span className="font-semibold text-green-800 text-sm text-center">Bantuan Sosial</span>
              </Link>
              <Link href="/layanan/pengaduan-kekerasan" className="flex flex-col items-center gap-2 bg-green-50 rounded-lg p-4 hover:bg-green-100 transition">
                <Megaphone size={28} className="text-green-700" />
                <span className="font-semibold text-green-800 text-sm text-center">Pengaduan Kekerasan</span>
              </Link>
            </div>
            <div className="flex justify-end mt-4">
              <Link href="/layanan" className="text-green-600 text-sm font-semibold hover:underline inline-flex items-center gap-1 group">Semua Layanan <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></Link>
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
            <h2 className="text-xl md:text-2xl font-bold text-green-800">Berita & Pengumuman Terbaru</h2>
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
                    <span className="text-xs text-gray-500 flex items-center gap-1"><Calendar size={14} className="text-green-600" />{article.date}</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1"><FileText size={14} className="text-green-600" />{article.views}</span>
                  </div>
                  <h2 className="text-lg font-bold text-green-800 mb-2 leading-tight group-hover:text-green-600 transition-colors">
                    <Link href="#">{article.title}</Link>
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <Link href="#" className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold hover:text-green-700 mt-auto group-hover:gap-2 transition-all">Baca Selengkapnya <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/berita" className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2">Lihat Semua Berita <ArrowRight size={16} /></Link>
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
                <h4 className="font-bold text-gray-900 text-lg">H. Mahyeldi Ansharullah, SP</h4>
                <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded mb-1">Gubernur</span>
                <p className="text-xs text-gray-500">"Mewujudkan Sumatera Barat Madani, Unggul dan Berkelanjutan"</p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full">
              <img src="/images/wagub.jpg" alt="Wakil Gubernur Sumatera Barat" className="w-20 h-24 object-cover rounded-lg shadow-md" />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Vasko Ruseimy, ST</h4>
                <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded mb-1">Wakil Gubernur</span>
                <p className="text-xs text-gray-500">"Bersama membangun masa depan generasi emas Sumbar"</p>
              </div>
            </div>
          </div>
          {/* Kontak & Pengaduan */}
          <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 justify-center min-w-[260px]">
            <h3 className="text-base font-bold text-green-800 mb-2 flex items-center gap-2"><MessageSquare size={20} className="text-green-600" /> Kontak & Pengaduan Cepat</h3>
            <div className="flex flex-col gap-2 text-green-700 text-sm">
              <span className="flex items-center gap-2"><Phone size={16}/> 0751-123456</span>
              <span className="flex items-center gap-2"><Mail size={16}/> dp3ap2kb@sumbarprov.go.id</span>
              <span className="flex items-center gap-2"><MapPin size={16}/> Jl. Khatib Sulaiman No.1, Padang</span>
            </div>
            <Link href="/lapor" className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2 justify-center mt-2"><MessageSquare size={18} /> Lapor Pengaduan</Link>
          </div>
        </div>
      </section>

      {/* Statistik Pengunjung (simple, paling bawah) */}
      <section className="container mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-base font-bold text-green-800 mb-4 flex items-center gap-2"><BarChart3 size={18} className="text-green-600" /> Statistik Pengunjung</h3>
          <div className="flex gap-3 overflow-x-auto md:grid md:grid-cols-4 md:gap-4">
            {statistikPengunjung.map((stat, idx) => (
              <div key={idx} className="min-w-[120px] bg-green-50 rounded-lg p-3 text-center flex-shrink-0">
                <div className="text-green-600 mb-1 flex justify-center">{stat.icon}</div>
                <div className="text-lg font-bold text-green-800 mb-0.5">{stat.jumlah}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
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
