"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Building2, FileText, Users, Baby, Heart } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Sejarah() {
  const timelineData = [
    {
      year: "2016",
      title: "Pembentukan Awal",
      description: "Dibentuk berdasarkan Peraturan Daerah Provinsi Sumatera Barat Nomor 8 tahun 2016 tentang Pembentukan dan Susunan Perangkat Daerah Provinsi Sumatera Barat.",
      icon: Building2,
      color: "blue"
    },
    {
      year: "2019",
      title: "Perubahan Struktur",
      description: "Diperbaharui melalui Peraturan Daerah Provinsi Sumatera Barat Nomor 13 Tahun 2019 tentang Perubahan Atas Peraturan Daerah sebelumnya.",
      icon: FileText,
      color: "green"
    },
    {
      year: "Sebelum 2022",
      title: "Dinas PPPA",
      description: "Beroperasi sebagai Dinas Pemberdayaan Perempuan dan Perlindungan Anak dengan fokus pada satu urusan utama.",
      icon: Heart,
      color: "purple"
    },
    {
      year: "21 Mei 2022",
      title: "Transformasi Menjadi DP3AP2KB",
      description: "Bertransformasi menjadi Dinas DP3AP2KB dengan penambahan urusan Pengendalian Penduduk dan Keluarga Berencana.",
      icon: Users,
      color: "orange"
    }
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
            Sejarah Singkat
            <span className="block text-green-600">DP3AP2KB Sumbar</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Perjalanan transformasi organisasi dari pembentukan hingga menjadi 
            Dinas Pemberdayaan Perempuan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana
          </p>
        </motion.div>

        {/* Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 mb-16"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Gambaran Umum</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-lg text-justify">
              Dinas Pemberdayaan Perempuan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana 
              Provinsi Sumatera Barat dibentuk berdasarkan <strong>Peraturan Daerah Provinsi Sumatera Barat 
              Nomor 13 Tahun 2019</strong> tentang Perubahan Atas Peraturan Daerah Provinsi Sumatera Barat 
              Nomor 8 tahun 2016 tentang Pembentukan dan Susunan Perangkat Daerah Provinsi Sumatera Barat.
            </p>
            
            <p className="text-lg text-justify">
              Dinas P3AP2KB sebelumnya adalah <strong>Dinas Pemberdayaan Perempuan dan Perlindungan Anak </strong> 
              yang membidangi satu urusan yaitu urusan pemberdayaan perempuan dan perlindungan anak. 
              Per tanggal <strong>21 Mei 2022</strong>, Dinas PPPA menjadi dinas DP3AP2KB dengan bertambahnya 
              satu urusan yaitu urusan Pengendalian Penduduk dan Keluarga Berencana, yang sebelumnya berada 
              di Dinas Pengendalian Penduduk, Keluarga Berencana, Kependudukan dan Pencatatan Sipil Provinsi Sumatera Barat.
            </p>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Timeline Perkembangan
            </h2>
            <p className="text-lg text-gray-600">
              Kronologi Perubahan dan Perkembangan Organisasi dari Masa ke Masa
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-200 via-emerald-200 to-orange-200"></div>
            
            <div className="space-y-12">
              {timelineData.map((item, index) => {
                const colorClasses: { [key: string]: string } = {
                  blue: "bg-green-500 border-green-200",
                  green: "bg-green-500 border-green-200",
                  purple: "bg-emerald-500 border-emerald-200",
                  orange: "bg-orange-500 border-orange-200"
                };
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Timeline Circle */}
                    <div className={`relative z-10 w-6 h-6 rounded-full border-4 border-white shadow-lg ${colorClasses[item.color]}`}>
                    </div>
                    
                    {/* Content Card */}
                    <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          item.color === 'blue' ? 'bg-green-100 text-green-700' :
                          item.color === 'green' ? 'bg-green-100 text-green-700' :
                          item.color === 'purple' ? 'bg-emerald-100 text-emerald-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {item.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed text-justify">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl text-white p-8 lg:p-12"
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <span className="font-semibold">Status Saat Ini</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">
              Dinas DP3AP2KB Provinsi Sumatera Barat
            </h2>
            
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Kini mengemban dua urusan utama: Pemberdayaan Perempuan & Perlindungan Anak, 
              serta Pengendalian Penduduk & Keluarga Berencana untuk melayani masyarakat Sumatera Barat.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Heart size={32} className="mx-auto mb-3 text-pink-200" />
                <h3 className="font-semibold mb-2">Pemberdayaan Perempuan & Perlindungan Anak</h3>
                <p className="text-sm text-blue-100">Melindungi dan memberdayakan perempuan serta anak-anak</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Users size={32} className="mx-auto mb-3 text-green-200" />
                <h3 className="font-semibold mb-2">Pengendalian Penduduk & KB</h3>
                <p className="text-sm text-blue-100">Mengelola program kependudukan dan keluarga berencana</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}
