"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

const PimpinanDaerahSection: React.FC = () => {
  const pimpinanData = [
    {
      nama: "H. Mahyeldi Ansharullah, S.T., M.T.",
      jabatan: "Gubernur Sumatera Barat",
      foto: "/images/gubernur.jpg",
      periode: "2021 - 2026"
    },
    {
      nama: "Audy Joinaldy, S.H., M.H.",
      jabatan: "Wakil Gubernur Sumatera Barat", 
      foto: "/images/wagub.jpg",
      periode: "2021 - 2026"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full animate-bounce" />
        <div className="absolute bottom-20 left-32 w-40 h-40 border border-white/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 right-10 w-28 h-28 border border-white/20 rounded-full animate-bounce delay-500" />
      </div>

      <Container className="relative z-10">
        {/* Pimpinan Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              Pimpinan Daerah
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Gubernur & Wakil Gubernur
              <span className="block">Sumatera Barat</span>
            </h2>
            <p className="text-xl text-emerald-100 leading-relaxed max-w-3xl mx-auto">
              Kepemimpinan yang berkomitmen untuk kesejahteraan masyarakat Sumatera Barat
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pimpinanData.map((pimpinan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20"
              >
                {/* Photo */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                      <div 
                        className="w-full h-full bg-cover bg-center bg-emerald-200"
                        style={{ 
                          backgroundImage: `url('${pimpinan.foto}')`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {pimpinan.nama}
                  </h3>
                  <p className="text-emerald-200 font-medium mb-1">
                    {pimpinan.jabatan}
                  </p>
                  <p className="text-emerald-300 text-sm mb-4">
                    Periode {pimpinan.periode}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default PimpinanDaerahSection;
