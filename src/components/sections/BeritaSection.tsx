"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight, Bookmark, Eye } from 'lucide-react';
import Container from '@/components/ui/Container';
import { useBeritaFilter } from '@/hooks/useBerita';

const BeritaSection: React.FC = () => {
  // Gunakan hook yang sama dengan halaman berita utama
  const { filteredBerita } = useBeritaFilter();
  
  // Ambil 7 berita terbaru dari data yang sama dengan halaman berita
  const beritaTerbaru = filteredBerita.slice(0, 7);

  const getKategoryColor = (kategori: string[]) => {
    // Ambil kategori pertama untuk menentukan warna
    const firstKategori = kategori[0] || '';
    const colors: { [key: string]: string } = {
      'utama': 'bg-yellow-100 text-yellow-700',
      'program': 'bg-blue-100 text-blue-700',
      'kegiatan': 'bg-purple-100 text-purple-700',
      'pengumuman': 'bg-green-100 text-green-700',
      'berita': 'bg-orange-100 text-orange-700'
    };
    return colors[firstKategori] || 'bg-gray-100 text-gray-700';
  };

  // Fungsi untuk memotong judul dengan rapi
  const truncateTitle = (title: string, maxWords: number) => {
    const words = title.split(' ');
    if (words.length <= maxWords) {
      return title;
    }
    return words.slice(0, maxWords).join(' ') + '...';
  };

  // Fungsi untuk memotong excerpt dengan rapi
  const truncateExcerpt = (excerpt: string, maxWords: number) => {
    const words = excerpt.split(' ');
    if (words.length <= maxWords) {
      return excerpt;
    }
    return words.slice(0, maxWords).join(' ') + '...';
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Berita Terbaru
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Informasi dan update terkini dari kami
            </motion.p>
          </div>

          {/* Featured News (First 3) */}
          <div className="grid gap-6 md:gap-8 lg:grid-cols-3 mb-12">
            {beritaTerbaru.slice(0, 3).map((berita, index) => (
              <motion.article
                key={berita.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col h-full"
              >
                <Link href={`/berita/${berita.slug}`} className="flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ 
                        backgroundImage: `url('${berita.image}')`,
                        backgroundColor: '#10b981'
                      }}
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {berita.kategori.slice(0, 2).map((kat, idx) => (
                        <span key={idx} className={`px-3 py-1 rounded-full text-xs font-medium ${getKategoryColor([kat])}`}>
                          {kat.charAt(0).toUpperCase() + kat.slice(1)}
                        </span>
                      ))}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {berita.views}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <Calendar className="h-3 w-3 mr-1" />
                      {berita.tanggal}
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors min-h-[3.5rem] flex items-start">
                      {truncateTitle(berita.title, 8)}
                    </h3>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 flex-grow min-h-[4.5rem]">
                      {truncateExcerpt(berita.excerpt, 20)}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center text-xs text-gray-500">
                        <Bookmark className="h-3 w-3 mr-1" />
                        Simpan
                      </div>
                      <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700 flex items-center">
                        Baca Selengkapnya
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Other News (Remaining 4) */}
          <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
            {beritaTerbaru.slice(3).map((berita, index) => (
              <motion.article
                key={berita.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group h-full"
              >
                <Link href={`/berita/${berita.slug}`} className="h-full">
                  <div className="flex gap-4 p-4 md:p-6 h-full items-center">
                    {/* Image */}
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex-shrink-0 overflow-hidden">
                      <div 
                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                        style={{ 
                          backgroundImage: `url('${berita.image}')`,
                          backgroundColor: '#3b82f6'
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex flex-wrap gap-1">
                          {berita.kategori.slice(0, 2).map((kat, idx) => (
                            <span key={idx} className={`px-2 py-1 rounded-full text-xs font-medium ${getKategoryColor([kat])}`}>
                              {kat.charAt(0).toUpperCase() + kat.slice(1)}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-xs text-gray-500 ml-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          {berita.tanggal}
                        </div>
                      </div>

                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors min-h-[2.5rem] flex items-start">
                        {truncateTitle(berita.title, 6)}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-grow min-h-[2.5rem]">
                        {truncateExcerpt(berita.excerpt, 15)}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center text-xs text-gray-500">
                          <Eye className="h-3 w-3 mr-1" />
                          {berita.views} views
                        </div>
                        <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700">
                          Baca →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              href="/berita"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Lihat Semua Berita
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BeritaSection;
