import React from 'react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { LAYANAN_PUBLIK } from '@/constants/homepage';

const LayananPopulerSection: React.FC = () => {
  return (
    <Section className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-6 text-center">
          Layanan Publik Populer
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {LAYANAN_PUBLIK.map((layanan, idx) => (
            <Link
              key={idx}
              href={layanan.link}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center gap-2 hover:bg-green-50 transition group"
            >
              <span className="bg-green-100 text-green-700 p-3 rounded-full group-hover:bg-green-200 transition-colors">
                <layanan.icon size={20} />
              </span>
              <span className="font-semibold text-green-800 text-sm text-center group-hover:text-green-600 transition-colors">
                {layanan.nama}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default LayananPopulerSection;
