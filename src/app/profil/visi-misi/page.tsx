"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  { src: "/images/galeri1.jpg", alt: "Kegiatan Sosialisasi", caption: "Sosialisasi Perlindungan Anak" },
  { src: "/images/galeri2.jpg", alt: "Rapat Koordinasi", caption: "Rapat Koordinasi DP3AP2KB" },
  { src: "/images/galeri3.jpg", alt: "Pelayanan Publik", caption: "Pelayanan Publik Prima" },
];

const pejabat = {
  nama: "Edi Syafrianto",
  jabatan: "Kepala Dinas",
  foto: "/images/edi.jpg",
};

export default function VisiMisi() {
  const [modalImg, setModalImg] = useState<null | typeof galleryImages[0]>(null);

  return (
    <section className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Sidebar */}
      <aside className="order-2 md:order-1 md:col-span-1 space-y-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="list-none flex flex-wrap gap-1">
            <li>
              <Link href="/" className="hover:underline text-[var(--accent,#ff7e6b)] font-semibold">Beranda</Link>
              <span className="mx-1">/</span>
            </li>
            <li>
              <Link href="/profil" className="hover:underline text-[var(--accent,#ff7e6b)] font-semibold">Profil</Link>
              <span className="mx-1">/</span>
            </li>
            <li className="text-gray-700">Visi Misi</li>
          </ol>
        </nav>
        {/* Profil Pejabat */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-2 border-4 border-[var(--accent,#ff7e6b)]">
            <Image src={pejabat.foto} alt={pejabat.nama} width={96} height={96} className="object-cover w-full h-full" />
          </div>
          <div className="font-bold text-gray-700 text-base">{pejabat.nama}</div>
          <div className="text-xs text-gray-500">{pejabat.jabatan}</div>
        </div>
        {/* Kontak Singkat */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-bold text-gray-700 mb-2 text-base">Kontak Instansi</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><span className="font-semibold">Alamat:</span> Jl. Khatib Sulaiman No.1, Padang</li>
            <li><span className="font-semibold">Telepon:</span> (0751) 123456</li>
            <li><span className="font-semibold">Email:</span> info@dp3ap2kb.sumbarprov.go.id</li>
          </ul>
        </div>
        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-bold text-gray-700 mb-2 text-base">Link Cepat</h3>
          <ul className="text-sm text-[var(--accent,#ff7e6b)] space-y-1">
            <li><Link href="/berita" className="hover:underline">Berita Terkini</Link></li>
            <li><Link href="/galeri" className="hover:underline">Galeri Kegiatan</Link></li>
            <li><Link href="/ppid" className="hover:underline">PPID</Link></li>
            <li><Link href="/layanan" className="hover:underline">Informasi Layanan</Link></li>
            <li><Link href="/download" className="hover:underline">Download Dokumen</Link></li>
          </ul>
        </div>
      </aside>
      {/* Konten Utama */}
      <div className="order-1 md:order-2 md:col-span-2">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--accent,#ff7e6b)] tracking-tight uppercase text-center md:text-left">
          VISI MISI DINAS PEMBERDAYAAN PEREMPUAN DAN PERLINDUNGAN ANAK
        </h1>
        <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Visi</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana Provinsi Sumatera Barat selaku penyelenggara dua urusan wajib pemerintahan, yaitu Urusan Pemberdayaan Perempuan dan Perlindungan Anak dan Urusan Keluarga Berencana dalam melaksanakan Tugas Pokok dan Fungsinya mempunyai Visi:
          </p>
          <blockquote className="italic font-semibold text-lg text-gray-800 border-l-4 border-[var(--accent,#ff7e6b)] pl-4 mb-6">
            “TERWUJUDNYA SUMATERA BARAT MADANI<br />YANG UNGGUL DAN BERKELANJUTAN”
          </blockquote>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Misi</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Dalam rangka mewujudkan Visi tersebut, Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana Provinsi Sumatera Barat menetapkan 2 (dua) misi yang dilaksanakan secara berkesinambungan yaitu:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-800">
            <li>
              <span className="font-semibold">
                Meningkatkan tata kehidupan sosial kemasyarakatan berdasarkan falsafah Adat Basandi Syara', Syara' Basandi Kitabullah
              </span>
            </li>
            <li>
              <span className="font-semibold">
                Meningkatkan tata kelola Pemerintahan dan Pelayanan Publik yang bersih, akuntabel serta berkualitas
              </span>
            </li>
          </ol>
        </div>
        {/* Galeri Foto */}
        <div className="mt-10">
          <h3 className="text-lg font-bold mb-4 text-gray-700 flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--accent,#ff7e6b)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7V6a2 2 0 012-2h2.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0012.828 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" /></svg>
            Galeri Kegiatan
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <button
                key={img.src}
                className="group relative rounded-lg overflow-hidden shadow hover:shadow-lg transition-all border border-gray-100 hover:border-[var(--accent,#ff7e6b)] focus:outline-none"
                onClick={() => setModalImg(img)}
                aria-label={img.caption}
              >
                <Image src={img.src} alt={img.alt} width={400} height={250} className="object-cover w-full h-40 group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white text-xs px-2 py-1 font-medium">{img.caption}</span>
              </button>
            ))}
          </div>
        </div>
        {/* Modal Preview Gambar */}
        {modalImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setModalImg(null)}>
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500" onClick={() => setModalImg(null)} aria-label="Tutup">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <Image src={modalImg.src} alt={modalImg.alt} width={600} height={400} className="object-cover w-full rounded mb-2" />
              <div className="text-center text-gray-700 font-semibold">{modalImg.caption}</div>
            </div>
          </div>
        )}
        {/* Box Pengumuman */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 rounded shadow p-4 flex items-center gap-3">
          <svg className="w-6 h-6 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
          <div className="text-sm text-yellow-900">
            <span className="font-semibold">Pengumuman:</span> Website DP3AP2KB Sumbar dalam pengembangan. Untuk info layanan terbaru, silakan cek menu <Link href="/berita" className="underline font-semibold">Berita</Link> atau <Link href="/layanan" className="underline font-semibold">Informasi Layanan</Link>.
          </div>
        </div>
      </div>
    </section>
  );
}
