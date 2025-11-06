"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function TugasFungsiPPID() {
  const tugasFungsiPPID = [
    "Mengkoordinasikan dan mengkonsolidasikan pengumpulan bahan informasi dan dokumentasi yang ada dilingkungannnya",
    "Menyimpan, mendokumentasikan, menyediakan dan memberi pelayanan informasi yang ada dilingkungannya kepada publik",
    "Melakukan verifikasi bahan informasi publik yang ada di lingkungannya",
    "Melakukan pemutakhiran informasi dan dokumentasi yang ada dilingkungannya",
    "Menyediakana informasi dan dokumentasi yang ada di lingkungannya untuk akses oleh masyarakat",
    "Melakukan inventerisasi informasi yang dikecualikan untuk disampaikan kepada PPID Utama",
    "Memberikan laporan tentang pengelolaan informasi yang ada di lingkungannya kepada PPID Utama secara berkala"
  ];

  const kewajibanBadanPublik = [
    "Badan Publik wajib menyediakan, memberikan dan/atau menerbitkan Informasi Publik yang berada di bawah kewenangannya kepada Pemohon Informasi Publik, selain informasi yang dikecualikan sesuai dengan ketentuan",
    "Badan Publik wajib menyediakan Informasi Publik yang akurat, benar, dan tidak menyesatkan",
    "Untuk melaksanakan kewajiban sebagaimana dimaksud pada angka 2, Badan Publik harus membangun dan mengembangkan sistem informasi dan dokumentasi untuk mengelola Informasi Publik secara baik dan efisien sehingga dapat diakses dengan mudah",
    "Badan Publik wajib membuat pertimbangan secara tertulis setiap kebijakan yang diambil untuk memenuhi hak setiap orang atas Informasi Publik",
    "Pertimbangan sebagaimana dimaksud pada angka 4, antara lain memuat pertimbangan politik, ekonomi, sosial, budaya, dan/atau pertahanan dan keamanan Negara",
    "Dalam rangka memenuhi kewajiban sebagaimana dimaksud pada angka 1 sampai dengan angka 4, Badan Publik dapat memanfaatkan sarana dan/atau media elektronik dan nonelektronik",
    "Menetapkan peraturan mengenai standar prosedur operasional layanan Informasi Publik",
    "Membangun dan mengembangkan sistem informasi dan dokumentasi untuk mengelola Informasi Publik secara baik dan efisien",
    "Menunjuk dan mengangkat PPID untuk melaksanakan tugas dan tanggung jawab serta wewenangnya",
    "Menganggarkan pembiayaan secara memadai bagi layanan Informasi Publik sesuai dengan peraturan perundang-undangan yang berlaku",
    "Menyediakan sarana dan prasarana layanan Informasi Publik, termasuk papan pengumuman dan meja informasi di setiap kantor Badan Publik, serta situs resmi bagi Badan Publik Negara",
    "Menetapkan standar biaya perolehan salinan Informasi Publik",
    "Menetapkan dan memutakhirkan secara berkala Daftar Informasi Publik atas seluruh Informasi Publik yang dikelola",
    "Menyediakan dan memberikan Informasi Publik",
    "Memberikan tanggapan atas keberatan yang diajukan oleh Pemohon Informasi Publik yang mengajukan keberatan",
    "Membuat dan mengumumkan laporan tentang layanan Informasi Publik sesuai dengan Peraturan ini serta menyampaikan salinan laporan kepada Komisi Informasi",
    "Melakukan evaluasi dan pengawasan terhadap pelaksanaan layanan Informasi Publik pada instansinya"
  ];

  const jenisInformasi = [
    {
      title: "Informasi yang wajib disediakan dan diumumkan secara berkala",
      description: "Informasi yang telah dikuasai dan didokumentasikan oleh Badan Publik untuk diumumkan secara teratur dan rutin tanpa ada permintaan",
      color: "blue"
    },
    {
      title: "Informasi yang wajib diumumkan secara serta merta",
      description: "Informasi yang apabila tidak disampaikan dapat mengancam hajat hidup orang banyak dan ketertiban umum yang berhubungan dengan tupoksi Badan Publik tanpa ada permintaan",
      color: "red"
    },
    {
      title: "Informasi yang wajib tersedia setiap saat",
      description: "Informasi yang telah dikuasasi dan didokumentasikan oleh Badan Publik serta telah dinyatakan terbuka sebagai informasi yang dapat diakses oleh pengguna informasi bilamana ada permintaan",
      color: "green"
    },
    {
      title: "Informasi yang dikecualikan",
      description: "Informasi yang dikuasai dan didokumentasikan oleh Badan Publik yang tidak dapat diakses oleh pemohon informasi berdasarkan alasan-alasan pengecualian",
      color: "gray"
    }
  ];

  const definisi = [
    {
      term: "Informasi",
      definition: "Keterangan, pernyataan, gagasan, dan tanda-tanda yang mengandung nilai, makna, dan pesan, baik data, fakta, maupun penjelasannya yang dapat dilihat, didengar, dan dibaca yang disajikan dalam berbagai kemasan dan format sesuai dengan perkembangan teknologi informasi dan komunikasi secara elektronik atau non elektronik."
    },
    {
      term: "Informasi Publik",
      definition: "Informasi yang dihasilkan, disimpan, dikelola, dikirim, dan/ atau diterima oleh suatu badan publik yang berkaitan dengan penyelenggara dan penyelenggaraan negara dan/atau penyelenggara dan penyelenggaraan badan publik lainnya yang sesuai dengan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik serta informasi lain yang berkaitan dengan kepentingan publik."
    },
    {
      term: "Badan Publik",
      definition: "Lembaga eksekutif, legislatif, yudikatif, dan badan lain yang fungsi dan tugas pokoknya berkaitan dengan penyelenggaraan negara, yang sebagian atau seluruh dananya bersumber dari APBN dan/ atau APBD, atau organisasi nonpemerintah sepanjang sebagian atau seluruh dananya bersumber dari APBN dan/ atau APBD, sumbangan masyarakat, dan/ atau luar negeri."
    },
    {
      term: "Dokumen",
      definition: "Data, catatan dan/atau keterangan yang dibuat dan/atau diterima oleh badan publik dalam rangka pelaksanaan kegiatannya, baik tertulis di atas kertas atau sarana lainnya maupun terekam dalam bentuk apapun, yang dapat dilihat, dibaca atau didengar."
    },
    {
      term: "Dokumentasi",
      definition: "Kegiatan penyimpanan data, catatan dan/ atau keterangan yang dibuat dan/ atau diterima oleh badan publik."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Container className="py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Tugas dan Fungsi PPID
            <span className="block text-green-600">Pemerintah Provinsi Sumatera Barat</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rincian Tugas, Fungsi, dan Kewajiban PPID dalam Mengelola Informasi dan Dokumentasi Publik
          </p>
        </motion.div>

        {/* PPID Pembantu Definition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-6 py-3 rounded-full mb-6">
              <span className="font-semibold">PPID Pembantu</span>
            </div>
          </div>
          
          <p className="text-gray-800 leading-relaxed text-justify mb-8 text-lg">
            <strong>Pejabat Pengelola Informasi dan Dokumentasi Pembantu (PPID Pembantu)</strong> adalah pejabat yang melaksanakan tugas dan fungsi sebagai PPID pada Satuan Organisasi Perangkat Daerah di lingkungan Pemerintah Daerah, berupa:
          </p>

          {/* Klasifikasi Informasi */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pengklasifikasian informasi yang terdiri dari:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {jenisInformasi.map((jenis, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">{jenis.title}</h4>
                    <p className="text-xs text-gray-600 text-justify">{jenis.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tugas dan Fungsi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-green-100 text-green-700 px-6 py-3 rounded-full mb-6">
              <span className="font-semibold">Tugas dan Fungsi</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tugas dan Fungsi PPID Pembantu</h2>
          </div>
          
          <div className="space-y-4">
            {tugasFungsiPPID.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Definisi-Definisi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-purple-100 text-purple-700 px-6 py-3 rounded-full mb-6">
              <span className="font-semibold">Definisi</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Definisi Istilah</h2>
          </div>
          
          <div className="space-y-6">
            {definisi.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.term}</h3>
                <p className="text-gray-700 leading-relaxed text-justify">{item.definition}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Kewajiban Badan Publik */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-red-100 text-red-700 px-6 py-3 rounded-full mb-6">
              <span className="font-semibold">Kewajiban Badan Publik</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kewajiban Badan Publik berdasarkan Pasal 7 UU No. 14 Tahun 2008</h2>
          </div>
          
          <div className="space-y-4">
            {kewajibanBadanPublik.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.05 }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Jenis Informasi Publik */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl text-white p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Kategori Informasi Publik</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jenisInformasi.map((jenis, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-semibold text-sm">{jenis.title}</h3>
                </div>
                <p className="text-sm text-green-100 leading-relaxed text-justify">{jenis.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </main>
  );
}
