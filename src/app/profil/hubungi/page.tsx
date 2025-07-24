"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Building2, User, MessageSquare } from "lucide-react";
import Container from "@/components/ui/Container";

export default function HubungiKami() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    subjek: '',
    pesan: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Pesan Anda telah terkirim. Terima kasih!');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Khatib Sulaiman No. 52, Padang Utara, Kota Padang, Sumatera Barat 25173",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "(0751) 7051711",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email",
      content: "dp3ap2kb@sumbarprov.go.id",
      color: "purple"
    },
    {
      icon: Clock,
      title: "Jam Kerja",
      content: "Senin - Jumat: 08:00 - 16:00 WIB",
      color: "orange"
    }
  ];

  const layananOptions = [
    "Konsultasi Pemberdayaan Perempuan",
    "Layanan Perlindungan Anak",
    "Program Keluarga Berencana",
    "Pengendalian Penduduk",
    "Pengaduan/Keluhan",
    "Informasi Umum",
    "Lainnya"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Container className="py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        > 
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Hubungi Kami
            <span className="block text-blue-600">DP3AP2KB Sumbar</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami Siap Melayani dan Membantu Anda. Jangan ragu Untuk Menghubungi Kami 
            Melalui Berbagai Saluran Komunikasi Yang Tersedia.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${
                  info.color === 'blue' ? 'bg-blue-100' :
                  info.color === 'green' ? 'bg-green-100' :
                  info.color === 'purple' ? 'bg-purple-100' :
                  'bg-orange-100'
                }`}>
                  <Icon size={24} className={`${
                    info.color === 'blue' ? 'text-blue-600' :
                    info.color === 'green' ? 'text-green-600' :
                    info.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{info.content}</p>
              </div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MessageSquare size={20} className="text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Kirim Pesan</h2>
              </div>
              <p className="text-gray-600">
                Sampaikan pertanyaan, saran, atau keluhan Anda melalui form di bawah ini
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nama" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label htmlFor="telepon" className="block text-sm font-semibold text-gray-700 mb-2">
                    No. Telepon
                  </label>
                  <input
                    type="tel"
                    id="telepon"
                    name="telepon"
                    value={formData.telepon}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Masukkan nomor telepon"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Masukkan alamat email"
                />
              </div>

              <div>
                <label htmlFor="subjek" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subjek/Layanan *
                </label>
                <select
                  id="subjek"
                  name="subjek"
                  value={formData.subjek}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Pilih subjek atau layanan</option>
                  {layananOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="pesan" className="block text-sm font-semibold text-gray-700 mb-2">
                  Pesan *
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tuliskan pesan, pertanyaan, atau keluhan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                Kirim Pesan
              </button>
            </form>
          </motion.div>

          {/* Office Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Office Info */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Building2 size={20} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Kantor Kami</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Alamat Lengkap</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dinas Pemberdayaan Perempuan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana<br />
                    Provinsi Sumatera Barat<br />
                    Jl. Khatib Sulaiman No. 52<br />
                    Padang Utara, Kota Padang<br />
                    Sumatera Barat 25173
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Jam Pelayanan</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Senin - Kamis: 08:00 - 16:00 WIB</p>
                    <p>Jumat: 08:00 - 16:30 WIB</p>
                    <p className="text-red-500 font-medium">Sabtu - Minggu: Tutup</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Layanan Darurat</h3>
                  <p className="text-gray-600">
                    Untuk kasus darurat perlindungan anak, hubungi hotline 24 jam kami
                  </p>
                  <p className="font-bold text-red-600">Hotline: 129 (Telepon Sahabat Anak)</p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lokasi Kantor</h3>
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center">
                <MapPin size={48} className="text-blue-600 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">DP3AP2KB Sumbar</h4>
                <p className="text-gray-600 text-center px-4">
                  Jl. Khatib Sulaiman No. 52<br />
                  Padang Utara, Kota Padang<br />
                  Sumatera Barat 25173
                </p>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://maps.google.com/?q=Jl.+Khatib+Sulaiman+No.52,+Padang+Utara,+Kota+Padang,+Sumatera+Barat+25173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <MapPin size={16} />
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </main>
  );
}
