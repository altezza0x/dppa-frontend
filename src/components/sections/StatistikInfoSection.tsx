"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChart3, Users, TrendingUp, Shield, Target, Award, MapPin, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';

const StatistikInfoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const statistikData = [
    {
      icon: Users,
      value: "256,789",
      label: "Masyarakat Terlayani",
      description: "Total masyarakat yang telah mendapatkan layanan kami",
      color: "blue",
      growth: "+12%"
    },
    {
      icon: Shield,
      value: "1,234",
      label: "Kasus Ditangani",
      description: "Kasus kekerasan dan perlindungan yang berhasil diselesaikan",
      color: "emerald",
      growth: "+8%"
    },
    {
      icon: Target,
      value: "89%",
      label: "Tingkat Kepuasan",
      description: "Persentase kepuasan masyarakat terhadap layanan kami",
      color: "purple",
      growth: "+5%"
    },
    {
      icon: Award,
      value: "15+",
      label: "Program Aktif",
      description: "Program pemberdayaan dan perlindungan yang sedang berjalan",
      color: "orange",
      growth: "+3"
    }
  ];

  const infoTabs = [
    {
      title: "Visi & Misi",
      content: {
        visi: "Terwujudnya Sumatera Barat Madani Yang Unggul Dan Berkelanjutan",
        misi: [
          "Meningkatkan tata kehidupan sosial kemasyarakatan berdasarkan falsafah Adat Basandi Syara', Syara' Basandi Kitabullah.",
          "Meningkatkan tata kelola Pemerintahan dan Pelayanan Publik yang bersih, akuntabel serta berkualitas."
        ]
      }
    },
    {
      title: "Struktur Organisasi",
      content: {
        kepala: "Dra. Hj. Gemala Ranti, M.Si",
        sekretaris: "-",
        bidang: [
          "Bidang Pemberdayaan Perempuan",
          "Bidang Perlindungan Perempuan dan Anak", 
          "Bidang Pengendalian Penduduk dan KB",
          "Bidang Data dan Informasi"
        ]
      }
    },
    {
      title: "Kontak & Lokasi",
      content: {
        alamat: "Jl. Khatib Sulaiman No. 52, Padang Utara, Kota Padang, Sumatera Barat 25173",
        telepon: "(0751) 7051711",
        email: "dp3ap2kb@sumbarprov.go.id",
        website: "https://dp3ap2kb.sumbarprov.go.id",
        jamKerja: "Senin - Jumat: 08:00 - 16:00 WIB"
      }
    }
  ];

  const CountUpAnimation = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    
    React.useEffect(() => {
      if (!isInView) return;
      
      const numericValue = parseInt(value.replace(/[^\d]/g, ''));
      const increment = numericValue / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, [isInView, value, duration]);
    
    return (
      <span>
        {value.includes('%') ? `${count}%` : 
         value.includes('+') ? `${count}+` : 
         count.toLocaleString('id-ID')}
      </span>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <Container>
        {/* Statistics Cards */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Capaian & Statistik
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Data dan pencapaian kami dalam melayani masyarakat Sumatera Barat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistikData.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center border border-gray-100 hover:border-emerald-200 h-full">
                    {/* Growth Indicator */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        {stat.growth}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-${stat.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 text-${stat.color}-600`} />
                    </div>

                    {/* Value */}
                    <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      <CountUpAnimation value={stat.value} />
                    </div>

                    {/* Label */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {stat.label}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Information Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Tab Headers */}
          <div className="flex flex-col sm:flex-row border-b border-gray-200">
            {infoTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-emerald-500 text-white'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === 0 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Visi
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {infoTabs[0].content.visi}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Misi
                    </h3>
                    <ul className="space-y-3">
                      {infoTabs[0].content.misi?.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="bg-emerald-100 text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                            {idx + 1}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Struktur Organisasi</h3>
                    <p className="text-gray-600">Kepemimpinan dan struktur organisasi DP3AP2KB Sumbar</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="bg-emerald-100 rounded-2xl p-6 mb-4">
                        <h4 className="text-lg font-semibold text-emerald-700 mb-2">Kepala Dinas</h4>
                        <p className="text-emerald-600 font-medium">{infoTabs[1].content.kepala}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 rounded-2xl p-6 mb-4">
                        <h4 className="text-lg font-semibold text-blue-700 mb-2">Sekretaris</h4>
                        <p className="text-blue-600 font-medium">{infoTabs[1].content.sekretaris}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Bidang-Bidang</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {infoTabs[1].content.bidang?.map((bidang, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-4 text-center">
                          <p className="text-gray-700 font-medium">{bidang}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Informasi Kontak</h3>
                    <p className="text-gray-600">Hubungi kami untuk informasi lebih lanjut</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Alamat */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Alamat</h4>
                          <p className="text-gray-600 leading-relaxed">{infoTabs[2].content.alamat}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Telepon */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Telepon</h4>
                          <p className="text-gray-600 font-medium">{infoTabs[2].content.telepon}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <BarChart3 className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                          <p className="text-gray-600 font-medium">{infoTabs[2].content.email}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Jam Kerja */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Jam Kerja</h4>
                          <p className="text-gray-600 font-medium">{infoTabs[2].content.jamKerja}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default StatistikInfoSection;
