"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Users } from "lucide-react";
import Container from "@/components/ui/Container";

export default function VisiMisiPPID() {
  const misiData = [
    "Meningkatkan pengelolaan dan pelayanan informasi yang berkualitas",
    "Membangun dan mengembangkan system penyediaan dan layanan informasi",
    "Meningkatkan kompetensi sumberdaya manusia"
  ];

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
            Visi & Misi PPID
            <span className="block text-green-600">Pemerintah Provinsi Sumatera Barat</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Komitmen Kami Dalam Memberikan Pelayanan Informasi Yang Transparan Dan Akuntabel 
            Kepada Masyarakat
          </p>
        </motion.div>

        {/* Visi Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-6 py-3 rounded-full mb-6">
              <span className="font-semibold">Visi PPID</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Visi PPID Pemerintah Provinsi Sumatera Barat</h2>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-800 leading-relaxed font-medium italic">
              "Terwujudnya pelayanan informasi yang transparan dan akuntabel untuk memenuhi hak 
              pemohon informasi sesuai dengan ketentuan peraturan perundang-undangan."
            </p>
          </div>
        </motion.div>

        {/* Misi Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-green-100 text-green-700 px-6 py-3 rounded-full mb-6">
              <span className="font-semibold">Misi PPID</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Misi PPID Pemerintah Provinsi Sumatera Barat</h2>
          </div>
          
          <div className="space-y-4">
            {misiData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-800 leading-relaxed font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl text-white p-8 lg:p-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Komitmen Kami</h3>
          <p className="text-lg text-green-100 max-w-3xl mx-auto leading-relaxed">
            Dengan Visi dan Misi Yang Jelas, PPID Pemerintah Provinsi Sumatera Barat Berkomitmen 
            Untuk Terus Meningkatkan Kualitas Pelayanan Informasi Publik dan Memastikan 
            Transparansi Dalam Setiap Aspek Pelayanan.
          </p>
        </motion.div>
      </Container>
    </main>
  );
}
