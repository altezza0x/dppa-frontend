import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Users } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import { HERO_SERVICES } from '@/constants/homepage';

const HeroSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = '/images/bg.jpg';
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image Layer */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('/images/bg.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-slate-900/85" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center min-h-[80vh]">
          {/* Left Content - Text */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="block text-emerald-400">Selamat Datang</span>
                <span className="block">di Website</span>
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Resmi</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-lg">
                Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <Link 
                href="/layanan/standar-pelayanan"
                className="flex-1 w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
              >
                <span>Layanan Publik</span>
              </Link>
              <Link 
                href="/profil/sejarah"
                className="flex-1 w-full sm:w-auto border-2 border-emerald-400/50 text-emerald-300 hover:bg-emerald-500/10 px-4 py-2 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm text-sm"
              >
                <Users size={15} />
                <span>Tentang Kami</span>
              </Link>
            </div>
          </div>
          
          {/* Right Content - Service Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 relative z-10 w-full max-w-md mx-auto lg:mx-0">
              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-white">Layanan Digital</h3>
                <p className="text-sm text-gray-300">Portal Layanan Terpadu</p>
              </div>
              
              {/* Service List */}
              <div className="space-y-3 mb-6">
                {HERO_SERVICES.map((item, idx) => (
                  <ServiceCard
                    key={idx}
                    icon={item.icon}
                    title={item.label}
                    description={item.desc}
                  />
                ))}
              </div>
              
              {/* Action Button */}
              <div>
                <Link 
                  href="/layanan/standar-pelayanan"
                  className="w-full bg-emerald-500/90 hover:bg-emerald-500 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors backdrop-blur-sm"
                >
                  <span>Lihat Semua Layanan</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
