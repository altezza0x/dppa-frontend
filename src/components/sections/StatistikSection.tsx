import React from 'react';
import { BarChart3 } from 'lucide-react';
import { STATISTIK_PENGUNJUNG } from '@/constants/homepage';

const StatistikSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 pb-8">
      <div className="bg-white rounded-xl shadow-md p-4">
        <h3 className="text-base font-bold text-green-800 mb-4 flex items-center gap-2">
          <BarChart3 size={18} className="text-green-600" /> 
          Statistik Pengunjung
        </h3>
        <div className="flex gap-3 overflow-x-auto md:grid md:grid-cols-4 md:gap-4">
          {STATISTIK_PENGUNJUNG.map((stat, idx) => (
            <div key={idx} className="min-w-[120px] bg-green-50 rounded-lg p-3 text-center flex-shrink-0">
              <div className="text-green-600 mb-1 flex justify-center">
                <stat.icon size={18} />
              </div>
              <div className="text-lg font-bold text-green-800 mb-0.5">{stat.jumlah}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatistikSection;
