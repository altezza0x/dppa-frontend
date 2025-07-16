import React from 'react';
import Link from 'next/link';
import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

const KontakSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 pb-12">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Gubernur & Wakil */}
        <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col items-center md:items-start justify-center gap-4 min-w-[260px]">
          <div className="flex items-center gap-4 w-full">
            <img 
              src="/images/gubernur.jpg" 
              alt="Gubernur Sumatera Barat" 
              className="w-20 h-24 object-cover rounded-lg shadow-md" 
            />
            <div>
              <h4 className="font-bold text-gray-900 text-lg">H. Mahyeldi Ansharullah, SP</h4>
              <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded mb-1">
                Gubernur
              </span>
              <p className="text-xs text-gray-500">
                "Mewujudkan Sumatera Barat Madani, Unggul dan Berkelanjutan"
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 w-full">
            <img 
              src="/images/wagub.jpg" 
              alt="Wakil Gubernur Sumatera Barat" 
              className="w-20 h-24 object-cover rounded-lg shadow-md" 
            />
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Vasko Ruseimy, ST</h4>
              <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded mb-1">
                Wakil Gubernur
              </span>
              <p className="text-xs text-gray-500">
                "Bersama membangun masa depan generasi emas Sumbar"
              </p>
            </div>
          </div>
        </div>
        
        {/* Kontak & Pengaduan */}
        <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 justify-center min-w-[260px]">
          <h3 className="text-base font-bold text-green-800 mb-2 flex items-center gap-2">
            <MessageSquare size={20} className="text-green-600" /> 
            Kontak & Pengaduan Cepat
          </h3>
          <div className="flex flex-col gap-2 text-green-700 text-sm">
            <span className="flex items-center gap-2">
              <Phone size={16}/> 0751-123456
            </span>
            <span className="flex items-center gap-2">
              <Mail size={16}/> dp3ap2kb@sumbarprov.go.id
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16}/> Jl. Khatib Sulaiman No.1, Padang
            </span>
          </div>
          <Link 
            href="/lapor" 
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2 justify-center mt-2"
          >
            <MessageSquare size={18} /> 
            Lapor Pengaduan
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KontakSection;
