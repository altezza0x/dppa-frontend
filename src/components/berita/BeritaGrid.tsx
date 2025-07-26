"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Calendar, ArrowRight } from "lucide-react";

interface BeritaGridProps {
  berita: any[];
  searchTerm?: string;
  selectedKategori?: string;
  className?: string;
}

const BeritaGrid: React.FC<BeritaGridProps> = ({ 
  berita,
  searchTerm = "", 
  selectedKategori = "all", 
  className = "" 
}) => {
  // Use the provided berita array
  const displayBerita = berita;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        duration: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full ${className}`}
    >
      {displayBerita.map((berita: any) => (
        <motion.article
          key={berita.id}
          variants={itemVariants}
          className="group h-full"
        >
          <a
            href={`/berita/${berita.slug}`}
            className="flex flex-col h-full bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
          <div className="relative">
            <div className="w-full h-48 sm:h-52 md:h-56 lg:h-60 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {berita.featured && (
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
                  <span className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold rounded-full shadow-lg">
                    Unggulan
                  </span>
                </div>
              )}
              <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ArrowRight size={14} className="md:hidden text-blue-600" />
                  <ArrowRight size={16} className="hidden md:block text-blue-600" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col">
            <div className="flex items-center gap-2 md:gap-3 text-xs sm:text-sm text-gray-500 mb-3">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span className="truncate">{berita.tanggal}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Eye size={14} />
                <span className="whitespace-nowrap">{berita.views} views</span>
              </span>
            </div>
            
            <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-3 md:mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
              {berita.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 md:mb-5 flex-grow">
              {berita.excerpt}
            </p>
            
            <div className="space-y-3 md:space-y-4 mt-auto">
              {/* Tags */}
              <div className="flex gap-1.5 md:gap-2 flex-wrap">
                {berita.kategori.slice(0, 2).map((kat: string, index: number) => {
                  // Function to get tag styling based on category
                  const getTagStyle = (category: string) => {
                    switch (category) {
                      case 'berita-utama':
                      case 'utama':
                        return "px-2.5 py-1 md:px-3 md:py-1.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-lg border border-blue-200";
                      case 'program':
                        return "px-2.5 py-1 md:px-3 md:py-1.5 bg-green-100 text-green-700 text-xs font-medium rounded-lg border border-green-200";
                      case 'kegiatan':
                        return "px-2.5 py-1 md:px-3 md:py-1.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-lg border border-purple-200";
                      case 'pengumuman':
                        return "px-2.5 py-1 md:px-3 md:py-1.5 bg-orange-100 text-orange-700 text-xs font-medium rounded-lg border border-orange-200";
                      case 'berita':
                        return "px-2.5 py-1 md:px-3 md:py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg border border-gray-200";
                      default:
                        return "px-2.5 py-1 md:px-3 md:py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg border border-gray-200";
                    }
                  };

                  // Function to get display label
                  const getDisplayLabel = (category: string) => {
                    switch (category) {
                      case 'berita-utama':
                        return 'utama';
                      default:
                        return category;
                    }
                  };

                  return (
                    <span
                      key={index}
                      className={getTagStyle(kat)}
                    >
                      {getDisplayLabel(kat)}
                    </span>
                  );
                })}
              </div>
              
              {/* Read More Button */}
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors group/link">
                Baca Selengkapnya
                <ArrowRight 
                  size={16} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </div>
            </div>
          </div>
          </a>
        </motion.article>
      ))}
      
      {displayBerita.length === 0 && (
        <motion.div
          variants={itemVariants}
          className="col-span-full text-center py-16"
        >
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Tidak ada berita ditemukan</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Coba ubah kata kunci pencarian atau pilih kategori lain untuk menemukan berita yang Anda cari
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Reset Filter
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BeritaGrid;
