"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, MapPin, Users, ArrowRight, Calendar } from 'lucide-react';
import Container from '@/components/ui/Container';
import { getUpcomingAgenda, getCategoryColor, AGENDA_CATEGORIES } from '@/data/agenda';

const AgendaSection: React.FC = () => {
  const agendaTerbaru = getUpcomingAgenda(6);

  const formatTanggal = (tanggal: string) => {
    const date = new Date(tanggal);
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long'
    };
    return date.toLocaleDateString('id-ID', options);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
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
              Agenda Kegiatan
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Jadwal kegiatan dan acara terbaru kami
            </motion.p>
          </div>

          {/* Agenda Grid */}
          <div className="grid gap-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {agendaTerbaru.map((agenda, index) => (
              <motion.div
                key={`homepage-agenda-${agenda.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -6,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group overflow-hidden border border-gray-100 flex flex-col h-full"
              >
                {/* Header with date and category */}
                <div className={`bg-gradient-to-r ${getCategoryColor(agenda.kategori)} p-4`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-white text-center min-w-[60px]">
                        <div className="text-lg font-bold leading-none">
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
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                      {AGENDA_CATEGORIES.find(cat => cat.id === agenda.kategori)?.name}
                    </span>
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
                  </div>

                  {/* Action Footer */}
                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-xs text-gray-500 flex-1 pr-2">
                        {new Date(agenda.tanggal).toLocaleDateString('id-ID', { 
                          weekday: 'long', 
                          day: 'numeric', 
                          month: 'long' 
                        })}
                      </div>
                      <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center group/btn flex-shrink-0">
                        Detail
                        <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
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
              href="/agenda"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Lihat Semua Agenda
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AgendaSection;
