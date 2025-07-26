"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { src: "/images/galeri1.jpg", alt: "Kegiatan Sosialisasi", caption: "Sosialisasi Perlindungan Anak" },
  { src: "/images/galeri2.jpg", alt: "Rapat Koordinasi", caption: "Rapat Koordinasi DP3AP2KB" },
  { src: "/images/galeri3.jpg", alt: "Pelayanan Publik", caption: "Pelayanan Publik Prima" },
];

const pejabat = {
  nama: "Nama Pejabat",
  jabatan: "Kepala Dinas",
  foto: "/images/kepala-dinas.jpg",
};

export default function VisiMisi() {
  const [modalImg, setModalImg] = useState<null | typeof galleryImages[0]>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Green Header Box - Full Width */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
              VISI & MISI DP3AP2KB SUMATERA BARAT
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-1 text-sm text-gray-600"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:underline text-green-700 font-semibold transition-colors">
              Beranda
            </Link>
            <span className="mx-1">/</span>
            <Link href="/profil" className="hover:underline text-green-700 font-semibold transition-colors">
              Profil
            </Link>
            <span className="mx-1">/</span>
            <span className="text-gray-700">Visi Misi</span>
          </motion.nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Konten Utama - ditempatkan pertama untuk tampilan mobile */}
            <div className="md:order-2 md:col-span-9">
          {/* Visi & Misi dalam satu box */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            {/* Visi */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-green-700 text-center">Visi</h2>
              <div className="mb-4 text-gray-700 leading-relaxed text-justify">
                Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana Provinsi Sumatera Barat selaku penyelenggara dua urusan wajib pemerintahan, yaitu Urusan Pemberdayaan Perempuan dan Perlindungan Anak dan Urusan Keluarga Berencana dalam melaksanakan Tugas Pokok dan Fungsinya mempunyai Visi :
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                <p className="italic font-semibold text-lg text-green-800">
                  "TERWUJUDNYA SUMATERA BARAT MADANI<br />YANG UNGGUL DAN BERKELANJUTAN"
                </p>
              </div>
            </div>
            
            {/* Garis pemisah */}
            <div className="border-t border-gray-200 my-6"></div>
            
            {/* Misi */}
            <div>
              <h2 className="text-xl font-bold mb-4 text-green-700 text-center">Misi</h2>
              <div className="mb-4 text-gray-700 leading-relaxed text-justify">
                Dalam rangka mewujudkan Visi tersebut, Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana Provinsi Sumatera Barat menetapkan 2 (dua) misi yang dilaksanakan secara berkesinambungan yaitu :
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-green-800">
                <li>
                  <span className="font-semibold text-justify block">
                    Meningkatkan tata kehidupan sosial kemasyarakatan berdasarkan falsafah Adat Basandi Syara', Syara' Basandi Kitabullah.
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-justify block">
                    Meningkatkan tata kelola Pemerintahan dan Pelayanan Publik yang bersih, akuntabel serta berkualitas.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        
          {/* Galeri Foto */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 text-green-700 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7V6a2 2 0 012-2h2.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0012.828 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" /></svg>
              Galeri Kegiatan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img) => (
                <button
                  key={img.src}
                  className="group relative rounded-lg overflow-hidden shadow hover:shadow-lg transition-all border border-gray-100 hover:border-green-600 focus:outline-none"
                  onClick={() => setModalImg(img)}
                  aria-label={img.caption}
                >
                  <Image src={img.src} alt={img.alt} width={400} height={250} className="object-cover w-full h-40 group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-60 text-white text-xs px-2 py-1 font-medium">{img.caption}</span>
                </button>
              ))}
            </div>
          </div>
        
          {/* Box Pengumuman */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded shadow p-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
            <div className="text-sm text-yellow-900">
              <span className="font-semibold">Pengumuman:</span> Website DP3AP2KB Sumbar dalam pengembangan. Untuk info layanan terbaru, silakan cek menu <Link href="/berita" className="underline font-semibold">Berita</Link> atau <Link href="/layanan" className="underline font-semibold">Informasi Layanan</Link>.
            </div>
          </div>
            </div>

            {/* Sidebar - ditempatkan kedua untuk tampilan mobile */}
            <aside className="md:order-1 md:col-span-3 space-y-6 mt-8 md:mt-0">
          {/* Profil Pejabat */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-2 border-4 border-green-200">
              <Image src={pejabat.foto} alt={pejabat.nama} width={96} height={96} className="object-cover w-full h-full" />
            </div>
            <h3 className="font-bold text-green-800 text-base">{pejabat.nama}</h3>
            <div className="text-xs text-gray-500">{pejabat.jabatan}</div>
          </div>
          
          {/* Kontak Singkat */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-green-800 mb-2 text-base">Kontak Instansi</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><span className="font-semibold">Alamat:</span> Jl. Khatib Sulaiman No.1, Padang</li>
              <li><span className="font-semibold">Telepon:</span> (0751) 123456</li>
              <li><span className="font-semibold">Email:</span> info@dp3ap2kb.sumbarprov.go.id</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-green-800 mb-2 text-base">Link Cepat</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li><Link href="/berita" className="hover:underline">Berita Terkini</Link></li>
              <li><Link href="/galeri" className="hover:underline">Galeri Kegiatan</Link></li>
              <li><Link href="/ppid" className="hover:underline">PPID</Link></li>
              <li><Link href="/layanan" className="hover:underline">Informasi Layanan</Link></li>
              <li><Link href="/download" className="hover:underline">Download Dokumen</Link></li>
            </ul>
          </div>
            </aside>
          </div>
          
          {/* Modal Preview Gambar */}
          <AnimatePresence>
        {modalImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            onClick={() => setModalImg(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-lg p-4 max-w-lg w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500" onClick={() => setModalImg(null)} aria-label="Tutup">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <Image 
                src={modalImg.src} 
                alt={modalImg.alt} 
                width={600} 
                height={400} 
                className="object-cover w-full rounded mb-2" 
              />
              <div className="text-center text-green-800 font-semibold">{modalImg.caption}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
        </motion.section>
      </div>
    </div>
  );
}
