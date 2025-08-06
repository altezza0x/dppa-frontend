"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, Users, Baby, Heart, FileText, Calendar, Scale, CheckCircle } from 'lucide-react';
import Container from '@/components/ui/Container';

const LayananUnggulanSection: React.FC = () => {
  const layananUtama = [
    {
      icon: Shield,
      title: "Perlindungan Perempuan",
      description: "Layanan konseling dan bantuan hukum untuk kasus kekerasan terhadap perempuan",
      features: ["Konseling 24/7", "Bantuan Hukum", "Rumah Aman"],
      color: "emerald",
      link: "/layanan/perlindungan-perempuan"
    },
    {
      icon: Baby,
      title: "Perlindungan Anak",
      description: "Program perlindungan dan pengembangan potensi anak untuk masa depan yang lebih baik",
      features: ["Deteksi Dini", "Rehabilitasi", "Edukasi"],
      color: "blue",
      link: "/layanan/perlindungan-anak"
    },
    {
      icon: Users,
      title: "Keluarga Berencana",
      description: "Program KB untuk kesejahteraan keluarga dan pengendalian penduduk yang berkelanjutan",
      features: ["Konsultasi KB", "Alat Kontrasepsi", "Edukasi Keluarga"],
      color: "purple",
      link: "/layanan/keluarga-berencana"
    },
    {
      icon: Heart,
      title: "Pemberdayaan Perempuan",
      description: "Program peningkatan kapasitas dan ekonomi perempuan untuk kemandirian",
      features: ["Pelatihan Usaha", "Pendampingan", "Akses Modal"],
      color: "pink",
      link: "/layanan/pemberdayaan-perempuan"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Layanan Terbaik untuk
            <span className="block text-emerald-600 mt-1">Masyarakat Sumbar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan berbagai layanan berkualitas untuk pemberdayaan perempuan, 
            perlindungan anak, dan program keluarga berencana yang inovatif.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {layananUtama.map((layanan, index) => {
            const Icon = layanan.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <Link href={layanan.link}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-gray-100 hover:border-emerald-200 group-hover:-translate-y-2 flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-${layanan.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 text-${layanan.color}-600`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                      {layanan.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow line-clamp-3 min-h-[4.5rem]">
                      {layanan.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6 min-h-[6rem]">
                      <ul className="space-y-2">
                        {layanan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors mt-auto">
                      Pelajari Lebih Lanjut
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Butuh Bantuan atau Konsultasi?
            </h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Tim ahli kami siap membantu Anda 24/7. Hubungi kami sekarang untuk mendapatkan layanan terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/layanan"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
              >
                Lihat Semua Layanan
              </Link>
              <Link
                href="/profil/hubungi"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default LayananUnggulanSection;
