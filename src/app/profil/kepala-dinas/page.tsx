"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Award, Calendar, MapPin, Phone, Mail, GraduationCap } from "lucide-react";
import Container from "@/components/ui/Container";

export default function KepalaDinas() {
  const pendidikan = [
    "S2 - Magister Sains (M.Si)",
    "S1 - Sarjana dalam bidang terkait",
  ];

  const pengalaman = [
    "Kepala Dinas Pemberdayaan Perempuan dan Perlindungan Anak",
    "Pengendalian Penduduk dan Keluarga Berencana Provinsi Sumatera Barat",
    "Berbagai jabatan strategis di lingkungan Pemerintah Provinsi Sumatera Barat",
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
            Kepala Dinas
            <span className="block text-green-600">DP3AP2KB Sumbar</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Profil dan biodata Kepala Dinas Pemberdayaan Perempuan dan Perlindungan Anak, 
            Pengendalian Penduduk dan Keluarga Berencana Provinsi Sumatera Barat
          </p>
        </motion.div>

        {/* Main Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 mb-16"
        >
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Photo Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-green-100 to-emerald-100">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: "url('/images/kepala-dinas.jpeg')"
                    }}
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"></div>
              </motion.div>
            </div>

            {/* Info Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Dra. Hj. Gemala Ranti, M.Si
                  </h2>
                  <p className="text-xl text-green-600 font-semibold mb-4">
                    Kepala Dinas DP3AP2KB Provinsi Sumatera Barat
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    Kepala Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk 
                    dan Keluarga Berencana Provinsi Sumatera Barat yang berpengalaman dalam memimpin 
                    berbagai program pemberdayaan perempuan, perlindungan anak, dan pengendalian penduduk 
                    di wilayah Sumatera Barat.
                  </p>
                </div>

                {/* Quick Info Cards */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <GraduationCap size={20} className="text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Pendidikan</p>
                      <p className="text-sm text-gray-600">Magister Sains (M.Si)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <Award size={20} className="text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Jabatan</p>
                      <p className="text-sm text-gray-600">Kepala Dinas DP3AP2KB</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Education & Experience Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <GraduationCap size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Riwayat Pendidikan</h3>
            </div>
            
            <div className="space-y-4">
              {pendidikan.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Award size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Pengalaman Jabatan</h3>
            </div>
            
            <div className="space-y-4">
              {pengalaman.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl text-white p-8 lg:p-12 text-center"
        >
          <User size={48} className="mx-auto mb-6 text-green-200" />
          <h3 className="text-2xl font-bold mb-4">Komitmen Kepemimpinan</h3>
          <p className="text-lg text-green-100 max-w-4xl mx-auto leading-relaxed">
            Dengan pengalaman dan dedikasi yang tinggi, Dra. Hj. Gemala Ranti, M.Si berkomitmen untuk 
            terus mengembangkan program-program pemberdayaan perempuan, perlindungan anak, dan pengendalian 
            penduduk yang berkualitas untuk mewujudkan masyarakat Sumatera Barat yang sejahtera dan berkeadilan gender.
          </p>
        </motion.div>
      </Container>
    </main>
  );
}
