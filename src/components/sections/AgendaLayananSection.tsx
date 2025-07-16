import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, MapPin } from 'lucide-react';
import Section from '@/components/ui/Section';
import { AGENDA_KEGIATAN, LAYANAN_DIGITAL } from '@/constants/homepage';

const AgendaLayananSection: React.FC = () => {
  return (
    <Section className="container mx-auto px-4 pb-8 md:pb-12">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Agenda */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
            <Calendar size={20} className="text-green-600" /> 
            Agenda Kegiatan
          </h3>
          <ul className="divide-y divide-green-50">
            {AGENDA_KEGIATAN.map((agenda, idx) => (
              <li key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <span className="font-semibold text-green-800">{agenda.judul}</span>
                  <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                    <Calendar size={14} /> {agenda.tanggal} <span>|</span> 
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {agenda.lokasi}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-green-700 bg-green-50 px-3 py-1 rounded-full font-semibold mt-2 sm:mt-0">
                  {agenda.waktu}
                </span>
              </li>
            ))}
          </ul>
          <Link 
            href="/agenda" 
            className="text-green-600 text-sm font-semibold hover:underline mt-4 inline-flex items-center gap-1 group"
          >
            Lihat Semua Agenda 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Layanan Digital Utama */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
            <Calendar size={20} className="text-green-600" /> 
            Layanan Digital Utama
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {LAYANAN_DIGITAL.map((layanan, idx) => (
              <Link 
                key={idx}
                href={layanan.href} 
                className="flex flex-col items-center gap-2 bg-green-50 rounded-lg p-4 hover:bg-green-100 transition"
              >
                <layanan.icon size={28} className="text-green-700" />
                <span className="font-semibold text-green-800 text-sm text-center">
                  {layanan.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <Link 
              href="/layanan" 
              className="text-green-600 text-sm font-semibold hover:underline inline-flex items-center gap-1 group"
            >
              Semua Layanan 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AgendaLayananSection;
