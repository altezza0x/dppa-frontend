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
      nama: "Vasko Ruseimy, ST",
      jabatan: "Wakil Gubernur Sumatera Barat", 
      foto: "/images/wagub.jpg",
      periode: "2021 - 2026"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              Pimpinan Daerah
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gubernur & Wakil Gubernur
            </h2>
            <h3 className="text-xl md:text-2xl text-emerald-600 font-semibold mb-6">
              Sumatera Barat
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Kepemimpinan yang berkomitmen untuk kesejahteraan dan kemajuan masyarakat Sumatera Barat
            </p>
          </div>

          {/* Cards Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
              <div className="grid md:grid-cols-2 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {pimpinanData.map((pimpinan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`text-center ${index === 1 ? 'md:pl-12 pt-12 md:pt-0' : 'pb-12 md:pb-0'}`}
                  >
                    {/* Photo */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-400 shadow-lg">
                          <div 
                            className="w-full h-full bg-cover bg-center bg-gray-100"
                            style={{ 
                              backgroundImage: `url('${pimpinan.foto}')`,
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {pimpinan.nama}
                      </h3>
                      <p className="text-emerald-600 font-semibold">
                        {pimpinan.jabatan}
                      </p>
                      <div className="inline-flex items-center gap-1 text-gray-500 text-sm bg-gray-50 px-4 py-2 rounded-full">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        Periode {pimpinan.periode}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default PimpinanDaerahSection;
