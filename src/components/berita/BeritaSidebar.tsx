"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Calendar, FileText, Users, Shield } from "lucide-react";

interface BeritaSidebarProps {
  className?: string;
}

const BeritaSidebar: React.FC<BeritaSidebarProps> = ({ className = "" }) => {
  // Data agenda kegiatan
  const agendaKegiatan = [
    { id: 1, tanggal: "25", bulan: "Jan", judul: "Rapat Koordinasi Bulanan", waktu: "09:00", lokasi: "Ruang Rapat" },
    { id: 2, tanggal: "28", bulan: "Jan", judul: "Workshop Digital", waktu: "13:00", lokasi: "Aula Utama" },
    { id: 3, tanggal: "30", bulan: "Jan", judul: "Sosialisasi Regulasi", waktu: "10:00", lokasi: "Online" }
  ];

  const layananPublik = [
    { id: 1, nama: "Permohonan Informasi", deskripsi: "Ajukan permohonan informasi publik", icon: FileText, link: "/layanan/permohonan-informasi" },
    { id: 2, nama: "Pengaduan Masyarakat", deskripsi: "Sampaikan keluhan dan saran", icon: Users, link: "/layanan/pengaduan" },
    { id: 3, nama: "Konsultasi Online", deskripsi: "Konsultasi dengan petugas", icon: Shield, link: "/layanan/konsultasi" }
  ];

  const informasiPublik = [
    { id: 1, nama: "Dokumen Kebijakan", deskripsi: "Akses dokumen kebijakan terbaru", icon: FileText, link: "/ppid/dokumen" },
    { id: 2, nama: "Data Statistik", deskripsi: "Lihat data dan statistik", icon: MapPin, link: "/ppid/statistik" },
    { id: 3, nama: "Laporan Keuangan", deskripsi: "Transparansi laporan keuangan", icon: Shield, link: "/ppid/laporan" }
  ];

  return (
    <aside className={`space-y-6 ${className}`}>
      {/* Berita Terkait */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-5">
          Berita Terkait
        </h3>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="flex gap-3">
                <div className="w-14 h-10 bg-gray-100 rounded-lg flex-shrink-0 group-hover:bg-gray-200 transition-colors duration-200"></div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    Judul berita terkait yang menarik untuk dibaca
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    2 hari yang lalu
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Agenda Kegiatan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-5">
          Agenda Kegiatan
        </h3>
        <div className="space-y-4">
          {agendaKegiatan.map((agenda) => (
            <div
              key={agenda.id}
              className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group cursor-pointer"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex flex-col items-center justify-center">
                  <div className="text-sm font-semibold text-blue-600">{agenda.tanggal}</div>
                  <div className="text-xs text-blue-500">{agenda.bulan}</div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 text-sm mb-2 group-hover:text-blue-600 transition-colors">
                  {agenda.judul}
                </h4>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock size={12} />
                    <span>{agenda.waktu}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin size={12} />
                    <span>{agenda.lokasi}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Layanan Publik */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-5">
          Layanan Publik
        </h3>
        <div className="space-y-3">
          {layananPublik.map((layanan) => {
            const IconComponent = layanan.icon;
            return (
              <a
                key={layanan.id}
                href={layanan.link}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <IconComponent size={18} className="text-gray-600 group-hover:text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {layanan.nama}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-1">{layanan.deskripsi}</p>
                </div>
              </a>
            );
          })}
        </div>
      </motion.div>

      {/* Informasi Publik */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-5">
          Informasi Publik
        </h3>
        <div className="space-y-3">
          {informasiPublik.map((info) => {
            const IconComponent = info.icon;
            return (
              <a
                key={info.id}
                href={info.link}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <IconComponent size={18} className="text-gray-600 group-hover:text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {info.nama}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-1">{info.deskripsi}</p>
                </div>
              </a>
            );
          })}
        </div>
      </motion.div>
    </aside>
  );
};

export default BeritaSidebar;
