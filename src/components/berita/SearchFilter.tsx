"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, X, Filter, Globe, Users, FileText, Laptop, BookOpen, Shield } from "lucide-react";

// Data kategori yang disederhanakan sesuai kebutuhan
const kategoriList = [
  { key: "all", label: "Semua", icon: Globe },
  { key: "berita", label: "Berita", icon: FileText },
  { key: "pengumuman", label: "Pengumuman", icon: Shield },
  { key: "program", label: "Program", icon: Laptop },
  { key: "kegiatan", label: "Kegiatan", icon: Users },
  { key: "berita-utama", label: "Berita Utama", icon: BookOpen }
];

interface SearchFilterProps {
  searchTerm: string;
  selectedKategori: string;
  onSearchChange: (value: string) => void;
  onKategoriChange: (kategori: string) => void;
  className?: string;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchTerm,
  selectedKategori,
  onSearchChange,
  onKategoriChange,
  className = ""
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`space-y-8 ${className}`}
    >
      {/* Search Bar */}
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          animate={{
            scale: isSearchFocused ? 1.01 : 1,
            boxShadow: isSearchFocused 
              ? "0 20px 40px -10px rgba(16, 185, 129, 0.2)" 
              : "0 8px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl overflow-hidden border border-gray-200/50 backdrop-blur-sm"
        >
          <div className="flex items-center">
            <div className="pl-6">
              <Search 
                size={24} 
                className={`transition-colors duration-300 ${
                  isSearchFocused ? 'text-emerald-600' : 'text-gray-400'
                }`} 
              />
            </div>
            <input
              type="text"
              placeholder="Cari berita, program, atau kegiatan..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full pl-4 pr-12 py-5 text-lg bg-transparent focus:outline-none placeholder-gray-400 text-gray-700"
            />
            {searchTerm && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => onSearchChange("")}
                className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={20} className="text-gray-400 hover:text-gray-600" />
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Filter Categories */}
      <div className="space-y-6">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-center">
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
          >
            <Filter size={20} className="text-emerald-600" />
            <span className="font-medium text-gray-700">
              {showMobileFilters ? 'Tutup Filter' : 'Tampilkan Filter'}
            </span>
          </motion.button>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            height: showMobileFilters || (typeof window !== 'undefined' && window.innerWidth >= 1024) ? "auto" : 0
          }}
          className="overflow-hidden lg:overflow-visible"
        >
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {kategoriList.map((kategori) => {
              const isActive = selectedKategori === kategori.key;
              
              return (
                <motion.button
                  key={kategori.key}
                  layout
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onKategoriChange(kategori.key)}
                  className={`
                    flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 min-w-fit
                    ${isActive
                      ? "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-xl transform scale-105"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-emerald-300 hover:shadow-lg hover:bg-emerald-50"
                    }
                  `}
                >
                  <span className="text-sm font-semibold">{kategori.label}</span>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Search Results Summary */}
      {searchTerm && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-gray-600">
            Menampilkan hasil pencarian untuk{" "}
            <span className="font-semibold text-emerald-600">"{searchTerm}"</span>
            {selectedKategori !== "all" && (
              <>
                {" "}dalam kategori{" "}
                <span className="font-semibold text-emerald-600">
                  {kategoriList.find(k => k.key === selectedKategori)?.label}
                </span>
              </>
            )}
          </p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default SearchFilter;
