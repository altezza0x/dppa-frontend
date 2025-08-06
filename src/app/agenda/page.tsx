"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Search, 
  Filter,
  ChevronDown,
  Phone,
  ExternalLink,
  Tag,
  User,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import { 
  AGENDA_EVENTS, 
  AGENDA_CATEGORIES, 
  AgendaItem,
  getCategoryColor,
  getAgendaByCategory 
} from '@/data/agenda';

export default function Agenda() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [selectedStatus, setSelectedStatus] = useState<'semua' | AgendaItem['status']>('semua');
  const [showFilters, setShowFilters] = useState(false);

  // Filter dan search logic
  const filteredAgenda = useMemo(() => {
    let filtered = getAgendaByCategory(selectedCategory);
    
    if (selectedStatus !== 'semua') {
      filtered = filtered.filter(agenda => agenda.status === selectedStatus);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(agenda => 
        agenda.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agenda.deskripsi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agenda.lokasi.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered.sort((a, b) => new Date(a.tanggal).getTime() - new Date(b.tanggal).getTime());
  }, [searchTerm, selectedCategory, selectedStatus]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    AGENDA_CATEGORIES.forEach(category => {
      counts[category.id] = getAgendaByCategory(category.id).length;
    });
    return counts;
  }, []);

  const formatTanggal = (tanggal: string) => {
    const date = new Date(tanggal);
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getStatusBadge = (status: AgendaItem['status']) => {
    const badges = {
      'akan-datang': { text: 'Akan Datang', color: 'bg-emerald-100 text-emerald-700 border-emerald-200', icon: Calendar },
      'berlangsung': { text: 'Berlangsung', color: 'bg-blue-100 text-blue-700 border-blue-200', icon: AlertCircle },
      'selesai': { text: 'Selesai', color: 'bg-gray-100 text-gray-700 border-gray-200', icon: CheckCircle }
    };
    
    const badge = badges[status];
    const Icon = badge.icon;
    
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${badge.color}`}>
        <Icon size={12} />
        {badge.text}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline text-emerald-700 font-semibold transition-colors duration-200">
              Beranda
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Agenda</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Agenda Kegiatan
            </h1>
            <p className="text-lg text-emerald-100 max-w-3xl mx-auto">
              Ikuti berbagai kegiatan dan program pemberdayaan perempuan, perlindungan anak, 
              dan pengendalian penduduk di Sumatera Barat
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari agenda..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
            >
              <Filter size={18} />
              <span>Filter</span>
              <ChevronDown 
                size={16} 
                className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Kategori:</span>
                <div className="flex items-center gap-1">
                  {AGENDA_CATEGORIES.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                      <span className="ml-1 opacity-75">({categoryCounts[category.id]})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Status:</span>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value as any)}
                  className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="semua">Semua</option>
                  <option value="akan-datang">Akan Datang</option>
                  <option value="berlangsung">Berlangsung</option>
                  <option value="selesai">Selesai</option>
                </select>
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden mt-4 pt-4 border-t border-gray-100"
              >
                <div className="space-y-4">
                  
                  {/* Mobile Category Filter */}
                  <div>
                    <span className="block text-sm font-medium text-gray-700 mb-2">Kategori:</span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {AGENDA_CATEGORIES.map(category => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center ${
                            selectedCategory === category.id
                              ? 'bg-emerald-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {category.name}
                          <span className="block opacity-75">({categoryCounts[category.id]})</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Status Filter */}
                  <div>
                    <span className="block text-sm font-medium text-gray-700 mb-2">Status:</span>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value as any)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="semua">Semua</option>
                      <option value="akan-datang">Akan Datang</option>
                      <option value="berlangsung">Berlangsung</option>
                      <option value="selesai">Selesai</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Menampilkan <span className="font-semibold text-gray-900">{filteredAgenda.length}</span> agenda
            {searchTerm && (
              <span> untuk "<span className="font-semibold text-emerald-600">{searchTerm}</span>"</span>
            )}
          </p>
        </div>
      </div>

      {/* Agenda Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div 
          className="grid gap-6 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredAgenda.map((agenda, index) => (
            <motion.div
              key={`agenda-${agenda.id}`}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: Math.min(index * 0.1, 0.8),
                  ease: "easeOut"
                }
              }}
              exit={{ 
                opacity: 0, 
                y: -20, 
                scale: 0.9,
                transition: { duration: 0.3 }
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              {/* Header with date and category */}
              <div className={`bg-gradient-to-r ${getCategoryColor(agenda.kategori)} p-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white text-center min-w-[70px]">
                      <div className="text-xl font-bold leading-none">
                        {new Date(agenda.tanggal).getDate()}
                      </div>
                      <div className="text-xs opacity-90 mt-1">
                        {new Date(agenda.tanggal).toLocaleDateString('id-ID', { month: 'short' })}
                      </div>
                    </div>
                    <div className="text-white">
                      <div className="text-xs opacity-80 uppercase tracking-wide">
                        {new Date(agenda.tanggal).toLocaleDateString('id-ID', { weekday: 'long' })}
                      </div>
                      <div className="text-sm font-medium flex items-center mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {agenda.waktu}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right flex flex-col items-end gap-2">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium border border-white/30">
                      {AGENDA_CATEGORIES.find(cat => cat.id === agenda.kategori)?.name}
                    </span>
                    <div className="bg-white/90 rounded-full">
                      {getStatusBadge(agenda.status)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                  {agenda.judul}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {agenda.deskripsi}
                </p>

                {/* Metadata */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="bg-emerald-100 p-1.5 rounded-lg flex-shrink-0 mt-0.5">
                      <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">{agenda.lokasi}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-100 p-1.5 rounded-lg flex-shrink-0">
                      <Users className="h-3.5 w-3.5 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-700">{agenda.peserta}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-purple-100 p-1.5 rounded-lg flex-shrink-0">
                      <User className="h-3.5 w-3.5 text-purple-600" />
                    </div>
                    <span className="text-sm text-gray-700">{agenda.organizer}</span>
                  </div>

                  {agenda.kontak && (
                    <div className="flex items-center gap-2">
                      <div className="bg-orange-100 p-1.5 rounded-lg flex-shrink-0">
                        <Phone className="h-3.5 w-3.5 text-orange-600" />
                      </div>
                      <span className="text-sm text-gray-700">{agenda.kontak}</span>
                    </div>
                  )}
                </div>

                {/* Registration Progress (if available) */}
                {agenda.maxPeserta && agenda.currentPeserta && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Pendaftar</span>
                      <span className="font-medium text-gray-900">
                        {agenda.currentPeserta}/{agenda.maxPeserta}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(agenda.currentPeserta / agenda.maxPeserta) * 100}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Action Footer */}
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs text-gray-500 flex-1">
                      {formatTanggal(agenda.tanggal)}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {agenda.registrasi && agenda.status === 'akan-datang' && (
                        <a
                          href={agenda.registrasi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                        >
                          <ExternalLink size={12} />
                          Daftar
                        </a>
                      )}
                      
                      <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        <AnimatePresence>
          {filteredAgenda.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tidak ada agenda ditemukan
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Coba ubah kata kunci pencarian atau filter untuk menemukan agenda yang Anda cari.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('semua');
                setSelectedStatus('semua');
              }}
              className="inline-flex items-center px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"
            >
              Reset Filter
            </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
