"use client";

import React from "react";
import { motion } from "framer-motion";
import BeritaHero from "@/components/berita/BeritaHero";
import BeritaGrid from "@/components/berita/BeritaGrid";
import BeritaSidebar from "@/components/berita/BeritaSidebar";
import SearchFilter from "@/components/berita/SearchFilter";
import Container from "@/components/ui/Container";
import { useBeritaFilter } from "../../hooks/useBerita";

export default function BeritaPage() {
  const {
    searchTerm,
    selectedKategori,
    filteredBerita,
    handleSearchChange,
    handleKategoriChange
  } = useBeritaFilter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <BeritaHero />

      {/* Main Content */}
      <div className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Search and Filter */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SearchFilter
              searchTerm={searchTerm}
              selectedKategori={selectedKategori}
              onSearchChange={handleSearchChange}
              onKategoriChange={handleKategoriChange}
            />
          </div>

          {/* Content Grid */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* News Grid */}
              <div className="lg:col-span-4">
              {/* Results Summary */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {searchTerm || selectedKategori !== "all" 
                      ? `Hasil Pencarian` 
                      : "Semua Berita"
                    }
                  </h2>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {filteredBerita.length} berita ditemukan
                  </span>
                </div>
                {(searchTerm || selectedKategori !== "all") && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>Filter aktif:</span>
                    {searchTerm && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md">
                        "{searchTerm}"
                      </span>
                    )}
                    {selectedKategori !== "all" && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md">
                        {selectedKategori}
                      </span>
                    )}
                    <button 
                      onClick={() => {
                        handleSearchChange("");
                        handleKategoriChange("all");
                      }}
                      className="ml-2 text-blue-600 hover:text-blue-700 underline"
                    >
                      Reset filter
                    </button>
                  </div>
                )}
              </div>

              <BeritaGrid 
                berita={filteredBerita}
                searchTerm={searchTerm}
                selectedKategori={selectedKategori}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BeritaSidebar />
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
