"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Calendar, ArrowRight } from "lucide-react";
import { beritaList } from "@/data/berita";

interface BeritaHeroProps {
  className?: string;
}

const BeritaHero: React.FC<BeritaHeroProps> = ({ className = "" }) => {
  // Ambil berita utama (berita pertama dari list)
  const mainNews = beritaList.find(berita => berita.kategori.includes("utama")) || beritaList[0];

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl shadow-xl border border-blue-100 overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full mb-4">
                Berita Utama
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                {mainNews.title}
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 text-sm text-gray-600"
            >
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {mainNews.date}
              </span>
              <span className="flex items-center gap-2">
                <Eye size={18} />
                {mainNews.views} views
              </span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              {mainNews.excerpt}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {mainNews.kategori.map((kategori, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-md font-medium"
                >
                  {kategori}
                </span>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <a
                href={mainNews.link}
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                Baca Selengkapnya
                <ArrowRight 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-200 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <span className="text-blue-600 font-medium text-sm">
                    {mainNews.badge}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BeritaHero;
