"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Eye, UserCheck, ListChecks, MapPin, Mail, Phone, FileText, Megaphone, Download, BarChart3, User } from "lucide-react";

const beritaPopuler = [
  {
    id: 1,
    title: "Anak berhadapan dengan hukum A . .",
    date: "2021-03-18 13:18:25",
    image: "/images/berita1.jpg",
    link: "/berita/1",
  },
  {
    id: 2,
    title: "Musyawarah X Badan Kerjasama O . .",
    date: "2021-03-29 15:52:16",
    image: "/images/berita2.jpg",
    link: "/berita/2",
  },
  {
    id: 3,
    title: "Rencana Aksi DP3AP2KB Tahun 2024",
    date: "2021-03-10 10:00:00",
    image: "/images/berita3.jpg",
    link: "/berita/3",
  },
];

const quickLinks = [
  { label: "PPID", icon: FileText, href: "/ppid" },
  { label: "Pengumuman", icon: Megaphone, href: "/pengumuman" },
  { label: "Download", icon: Download, href: "/download" },
  { label: "Statistik", icon: BarChart3, href: "/statistik" },
];

const pejabat = [
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
];

export default function TugasFungsi() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-2 md:px-0">
      {/* Judul di tengah */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 flex items-center justify-center gap-3 mb-2">
          <UserCheck size={36} className="text-green-600" /> TUGAS DAN FUNGSI
        </h1>
        <div className="w-24 h-1 bg-green-500 mx-auto mb-4 rounded-full" />
      </motion.div>
      {/* Grid utama dua kolom sejajar */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* KONTEN UTAMA */}
        <div className="md:col-span-2 flex flex-col gap-8">
          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-4 items-center mb-2"
          >
            <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-semibold">
              <Calendar size={18} /> 10 Juli 2025 11:17:36 WIB
            </div>
            <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold">
              <Eye size={18} /> 6,354 Hits
            </div>
            <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold">
              <User size={18} /> By Admin
            </div>
          </motion.div>
          {/* Deskripsi Tugas Pokok */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow p-8 border border-green-100 mb-2"
          >
            <p className="text-gray-800 text-lg leading-relaxed mb-4 text-justify">
              Dinas Pemberdayaan Perempuan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana Provinsi Sumatera Barat dibentuk berdasarkan Peraturan Daerah Provinsi Sumatera Barat Nomor 13 Tahun 2019 tentang Perubahan Atas Peraturan Daerah Provinsi Sumatera Barat Nomor 8 tahun 2016 tentang Pembentukan dan Susunan Perangkat Daerah Provinsi Sumatera Barat dan Peraturan Gubernur Sumatera Barat Nomor 3 Tahun 2020 tentang Kedudukan, Susunan Organisasi Tugas dan Fungsi Serta Tata Kerja Dinas Daerah Provinsi Sumatera Barat dan Peraturan Gubernur Sumatera Barat Nomor 67 Tahun 2020, yang secara umum mempunyai tugas pokok <span className="italic font-semibold text-green-700">melaksanakan penyusunan dan pelaksanaan kebijakan daerah bidang Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana.</span>
            </p>
          </motion.div>
          {/* Fungsi Utama */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow p-8 border border-green-100"
          >
            <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2"><ListChecks size={24} className="text-green-600" />Fungsi Utama</h2>
            <ol className="list-decimal pl-6 text-gray-800 text-lg space-y-2 mb-2">
              <li>Perumusan kebijakan teknis bidang Pemberdayaan Perempuan dan Perlindungan Anak.</li>
              <li>Penyelenggaraan urusan pemerintahan dan pelayanan umum bidang Pemberdayaan Perempuan dan Perlindungan Anak.</li>
              <li>Penyelenggaraan urusan Pemerintahan dan Pelayanan umum bidang Pengendalian Penduduk dan Keluarga Berencana.</li>
              <li>Pembinaan dan fasilitasi bidang Pemberdayaan Perempuan dan Perlindungan Anak lingkup Provinsi dan Kabupaten/Kota.</li>
              <li>Pembinaan dan fasilitasi bidang Pengendalian Penduduk dan Keluarga Berencana lingkup Provinsi dan Kabupaten/Kota.</li>
              <li>Pelaksanaan Kesekretariatan Dinas.</li>
              <li>Pelaksanaan fungsi kedinasan lain yang diberikan oleh pimpinan.</li>
            </ol>
          </motion.div>
        </div>

        {/* SIDEBAR */}
        <div className="flex flex-col gap-8">
          {/* Card Pejabat */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow p-6 border border-green-100 flex flex-col items-center min-h-[340px] justify-center"
          >
            <h3 className="text-lg font-bold text-gray-700 mb-4">Gubernur dan Wakil Gubernur</h3>
            <div className="flex flex-row gap-4 w-full justify-center mb-2 flex-wrap">
              {pejabat.map((p) => (
                <div key={p.nama} className="flex flex-col items-center w-32">
                  <div className="w-24 h-28 relative mb-2 rounded-xl overflow-hidden shadow">
                    <Image src={p.image} alt={p.nama + ' - ' + p.jabatan} fill className="object-cover" style={{objectPosition:'top'}} />
                  </div>
                  <div className="font-bold text-gray-800 text-sm leading-tight text-center mt-1">{p.nama}</div>
                  <div className="text-gray-600 text-xs italic text-center mb-1">{p.jabatan}</div>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full mt-1">{p.badge}</span>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Berita Populer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow p-6 border border-green-100"
          >
            <h3 className="text-lg font-bold text-gray-700 mb-4">Berita Populer</h3>
            <div className="flex flex-col gap-4">
              {beritaPopuler.map((b) => (
                <Link key={b.id} href={b.link} className="flex items-center gap-3 group hover:bg-green-50 rounded-lg p-2 transition">
                  <div className="w-16 h-12 relative rounded overflow-hidden flex-shrink-0 bg-gray-100">
                    <Image src={b.image} alt={b.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500 mb-1 truncate">{b.date}</div>
                    <div className="text-sm font-semibold text-gray-800 group-hover:text-green-700 line-clamp-2 truncate">{b.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow p-6 border border-green-100"
          >
            <h3 className="text-lg font-bold text-gray-700 mb-4">Akses Cepat</h3>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="flex items-center gap-2 px-4 py-3 rounded-lg bg-green-100 hover:bg-green-200 text-green-800 font-semibold shadow transition-all">
                  <link.icon size={20} />
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
          {/* Kontak Singkat */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow p-6 border border-green-100"
          >
            <h3 className="text-lg font-bold text-gray-700 mb-4">Kontak</h3>
            <div className="flex flex-col gap-2 text-green-700 text-sm">
              <div className="flex items-center gap-2"><MapPin size={16}/> Jl. Khatib Sulaiman No.1, Padang</div>
              <div className="flex items-center gap-2"><Mail size={16}/> dp3ap2kb@sumbarprov.go.id</div>
              <div className="flex items-center gap-2"><Phone size={16}/> 0751-123456</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
