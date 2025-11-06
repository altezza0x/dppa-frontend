"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Shield, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";

export default function ProfilPPID() {
  const dasarHukumData = [
    "Undang undang No 11 Tahun 2008 Tentang Informasi dan transaksi Elektronik.",
    "Undang undang No 14 Tahun 2008 Tentang Keterbukaan informasi umum.",
    "Peraturan Pemerintah Nomor 61 Tahun 2010 Tentang Pelaksanaan Undang-undang Nomor 14 Tahun 2010 Tentang Keterbukaan Informasi Publik.",
    "Peraturan Pemerintah Nomor 35 Tahun 2010 Tentang Pedoman Pengelola Informasi dan Dokumentasi Dilingkungan Kementrian Dalam Negeri Dan Pemerintah Daerah.",
    "Peraturan Komisi Informasi Nomor 1 Tahun 2010 tentang Standar Layanan Informasi Publik.",
    "Peraturan Gubernur Sumatera Barat Nomor 6 Tahun 2017 tentang Pedoman Pengelolaan Informasi dan Dokumentasi Di Lingkungan Pemerintah Provinsi Sumatera Barat."
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
            Profil PPID
            <span className="block text-green-600">DP3AP2KB Sumbar</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pejabat Pengelola Informasi dan Dokumentasi yang berkomitmen untuk transparansi 
            dan keterbukaan informasi publik
          </p>
        </motion.div>

        {/* Dasar Hukum Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 mb-16"
        >
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dasar Hukum Pelayanan Informasi Publik dan Dokumentasi</h2>
          </div>
          
          <div className="space-y-4">
            {dasarHukumData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PPID Definition & Function */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Definition Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Building2 size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Definisi PPID</h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-justify">
              <strong>Pejabat Pengelola Informasi dan Dokumentasi (PPID)</strong> berfungsi sebagai pengelola dan 
              penyampai dokumen yang dimiliki oleh badan publik sesuai dengan amanat UU 14/2008 tentang 
              Keterbukaan Informasi Publik. Dengan keberadaan PPID maka masyarakat yang akan menyampaikan 
              permohonan informasi lebih mudah dan tidak berbelit karena dilayani lewat satu pintu.
            </p>
          </div>

          {/* Responsibility Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <FileText size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Tanggung Jawab PPID</h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-justify">
              Pejabat Pengelola Informasi dan Dokumentasi (PPID) bertanggung jawab di bidang penyimpanan, 
              pendokumentasian, penyediaan, dan/atau pelayanan informasi di badan publik.
            </p>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}
