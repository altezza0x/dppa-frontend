"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Building, UserCheck, ChevronDown, Award } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Struktur() {
  const strukturData = {
    kepala: {
      nama: "Dra. Hj. Gemala Ranti, M.Si",
      jabatan: "Kepala Dinas",
      foto: "/images/kepala-dinas.jpeg"
    },
    sekretaris: {
      nama: "Sekretaris Dinas",
      jabatan: "Sekretaris",
      bidang: ["Umum dan Kepegawaian", "Keuangan", "Perencanaan dan Evaluasi"]
    },
    bidang: [
      {
        nama: "Kepala Bidang Pemberdayaan Perempuan",
        jabatan: "Kabid Pemberdayaan Perempuan",
        seksi: [
          "Seksi Peningkatan Kualitas Hidup Perempuan",
          "Seksi Penguatan Kelembagaan dan Partisipasi Perempuan"
        ]
      },
      {
        nama: "Kepala Bidang Perlindungan Anak",
        jabatan: "Kabid Perlindungan Anak",
        seksi: [
          "Seksi Pemenuhan Hak Anak",
          "Seksi Perlindungan Khusus Anak"
        ]
      },
      {
        nama: "Kepala Bidang Pengendalian Penduduk",
        jabatan: "Kabid Pengendalian Penduduk",
        seksi: [
          "Seksi Pengendalian Penduduk",
          "Seksi Pengembangan Data dan Informasi"
        ]
      },
      {
        nama: "Kepala Bidang Keluarga Berencana dan Kesehatan Reproduksi",
        jabatan: "Kabid KB dan Kesehatan Reproduksi",
        seksi: [
          "Seksi Keluarga Berencana",
          "Seksi Kesehatan Reproduksi dan Kelangsungan Hidup"
        ]
      },
      {
        nama: "Kepala Bidang Keluarga Sejahtera dan Pemberdayaan Keluarga",
        jabatan: "Kabid Keluarga Sejahtera",
        seksi: [
          "Seksi Ketahanan dan Pemberdayaan Keluarga",
          "Seksi Bina Keluarga Balita dan Anak"
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Container className="py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Struktur Organisasi
            <span className="block text-green-600">DP3AP2KB Sumbar</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Struktur organisasi Dinas Pemberdayaan Perempuan dan Perlindungan Anak, 
            Pengendalian Penduduk dan Keluarga Berencana Provinsi Sumatera Barat
          </p>
        </motion.div>

        {/* Kepala Dinas Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 mb-8 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-6 py-3 rounded-full mb-8">
            <Award size={24} />
            <span className="font-semibold">Pimpinan</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mb-6 bg-gradient-to-br from-green-100 to-emerald-100">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${strukturData.kepala.foto}')`
                }}
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{strukturData.kepala.nama}</h2>
            <p className="text-lg text-green-600 font-semibold">{strukturData.kepala.jabatan}</p>
          </div>
        </motion.div>

        {/* Connection Line */}
        <div className="flex justify-center mb-8">
          <div className="w-px h-8 bg-gradient-to-b from-green-300 to-green-500"></div>
        </div>

        {/* Sekretaris Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
            <UserCheck size={20} />
            <span className="font-semibold">Sekretaris Dinas</span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">{strukturData.sekretaris.nama}</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {strukturData.sekretaris.bidang.map((bidang, index) => (
              <div key={index} className="p-4 bg-purple-50 rounded-xl">
                <p className="text-sm font-medium text-gray-800">{bidang}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Connection Line */}
        <div className="flex justify-center mb-8">
          <div className="w-px h-8 bg-gradient-to-b from-green-300 to-green-500"></div>
        </div>

        {/* Bidang-Bidang Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-green-100 text-green-700 px-6 py-3 rounded-full">
            <Building size={24} />
            <span className="font-semibold">Bidang-Bidang</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {strukturData.bidang.map((bidang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{bidang.nama}</h3>
                  <p className="text-sm text-green-600 font-medium">{bidang.jabatan}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700 mb-3">
                  <ChevronDown size={16} className="text-green-500" />
                  <span className="font-semibold">Seksi-Seksi:</span>
                </div>
                
                {bidang.seksi.map((seksi, seksiIndex) => (
                  <div key={seksiIndex} className="ml-6 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-800">{seksi}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl text-white p-8 lg:p-12 text-center mt-16"
        >
          <Building size={48} className="mx-auto mb-6 text-green-200" />
          <h3 className="text-2xl font-bold mb-4">Organisasi yang Solid</h3>
          <p className="text-lg text-green-100 max-w-4xl mx-auto leading-relaxed">
            Dengan struktur organisasi yang jelas dan terorganisir, DP3AP2KB Provinsi Sumatera Barat 
            berkomitmen memberikan pelayanan terbaik dalam pemberdayaan perempuan, perlindungan anak, 
            pengendalian penduduk, dan program keluarga berencana.
          </p>
        </motion.div>
      </Container>
    </main>
  );
}
