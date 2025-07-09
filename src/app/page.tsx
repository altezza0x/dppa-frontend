import { FileText, Search } from 'lucide-react';
import React from 'react';

// Di aplikasi nyata, data ini akan diambil dari CMS (Content Management System)
const articles = [
  {
    title: "Renstra Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana 2021-2026",
    date: "13 Juni 2025 09:08:27 WIB",
    author: "Administrator DPPA",
    views: 380,
    category: "Program",
    excerpt: "Dokumen Rencana Strategis (Renstra) ini merupakan dokumen perencanaan jangka menengah yang menjadi pedoman dalam pelaksanaan program dan kegiatan..."
  },
  {
    title: "Perjanjian Kinerja DP3AP2KB Tahun 2024",
    date: "13 Juni 2025 09:03:00 WIB",
    author: "Administrator DPPA",
    views: 381,
    category: "Program",
    excerpt: "Perjanjian Kinerja merupakan lembar atau dokumen yang berisikan penugasan dari pimpinan instansi yang lebih tinggi kepada pimpinan instansi di bawahnya..."
  },
  {
    title: "Kegiatan Sosialisasi Pencegahan Kekerasan Terhadap Perempuan dan Anak",
    date: "10 Juni 2025 11:30:15 WIB",
    author: "Tim Lapangan",
    views: 542,
    category: "Berita",
    excerpt: "Sosialisasi ini bertujuan untuk meningkatkan kesadaran masyarakat tentang pentingnya peran serta aktif dalam upaya pencegahan kekerasan terhadap perempuan dan anak."
  }
];

// Data dummy berita populer (integrasi dengan konten berita utama)
const beritaPopuler = [
  {
    id: 1,
    img: "/images/berita1.jpg",
    date: "2021-03-18 13:18:25",
    title: "Anak berhadapan dengan hukum A . ."
  },
  {
    id: 2,
    img: "/images/berita2.jpg",
    date: "2021-03-29 15:52:16",
    title: "Musyawarah X Badan Kerjasama O . ."
  },
  {
    id: 3,
    img: "/images/berita3.jpg",
    date: "2021-04-01 17:34:59",
    title: "Verifikasi Lapangan Anugrah Pr . ."
  },
  {
    id: 4,
    img: "/images/berita4.jpg",
    date: "2021-03-15 14:12:18",
    title: "Penguatan Jejaring antar Lemb . ."
  },
  {
    id: 5,
    img: "/images/berita5.jpg",
    date: "2018-07-10 08:41:57",
    title: "SOSIALISASI SISTEM INFORMASI G . ."
  },
];

// Komponen Kartu Artikel. Di aplikasi besar, ini juga bisa dipindah ke src/components/
type ArticleCardProps = {
  article: {
    title: string;
    date: string;
    author: string;
    views: number;
    category: string;
    excerpt: string;
  };
};

const ArticleCard = ({ article }: ArticleCardProps) => (
  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-stretch min-h-[180px]">
    <div className="w-full md:w-40 flex-shrink-0 flex items-center justify-center bg-slate-50 text-slate-300 h-40 md:h-40">
      <FileText size={64} />
    </div>
    <div className="p-6 flex flex-col justify-between flex-1">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">{article.category}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
          <a href="#" className="hover:text-blue-600">{article.title}</a>
        </h2>
        <p className="text-gray-500 text-sm mb-4">
          {article.excerpt}
        </p>
      </div>
      <div>
        <div className="text-xs text-gray-400 mb-4">
          <span>{article.date}</span> | <span>Oleh: {article.author}</span> | <span>Pengunjung: {article.views}</span>
        </div>
        <a href="#" className="inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
          Lihat Selengkapnya
        </a>
      </div>
    </div>
  </div>
);

type Article = {
  image?: string;
  date: string;
  title: string;
  // Tambahkan properti lain jika ada, misal id
};

// Komponen Berita Populer Sidebar
const BeritaPopulerSidebar = ({ articles }: { articles: Article[] }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
    <h3 className="font-bold text-lg mb-4 section-title">Berita Populer</h3>
    <div className="space-y-4">
      {articles.slice(0, 5).map((article: Article, idx: number) => (
        <a
          key={idx}
          href={`/berita/${idx}`}
          className="flex items-start gap-3 group hover:bg-slate-50 rounded-lg p-2 -mx-2 transition"
        >
          <img
            src={article.image || '/images/berita-default.jpg'}
            alt={article.title}
            className="w-16 h-16 object-cover rounded-md border border-gray-200 bg-slate-100 flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="text-xs text-gray-400 mb-1">{article.date}</div>
            <div className="font-semibold text-gray-800 text-sm truncate group-hover:text-blue-700">
              {article.title}
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

// Komponen Halaman Beranda
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-500 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background Animation Elements */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-white opacity-10 rounded-full mix-blend-overlay animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white opacity-10 rounded-full mix-blend-overlay animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white opacity-10 rounded-full mix-blend-overlay animate-pulse-slow animation-delay-500"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInDown" style={{ animationDelay: '0.2s' }}>
            Selamat Datang di Website Resmi
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fadeInDown" style={{ animationDelay: '0.4s' }}>
            DP3AP2KB Provinsi Sumatera Barat
          </p>
          <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <a
              href="/profil"
              className="btn-primary text-lg"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </section>

      {/* Konten Utama (Berita & Pengumuman, Sidebar) */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kolom Utama (Daftar Artikel) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex justify-between items-center border-b-2 border-green-700 pb-2 mb-4">
              <h1 className="text-2xl md:text-3xl font-bold section-title">Berita & Pengumuman Terbaru</h1>
              <a href="/berita" className="text-sm font-medium text-green-700 hover:underline">Lihat Semua</a>
            </div>
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>

          {/* Sidebar (Kolom Kanan) */}
          <aside className="space-y-8">
            {/* Kotak Pencarian */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 section-title">Pencarian Berita</h3>
              <div className="relative">
                <input type="text" placeholder="Ketik kata kunci..." className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>

            {/* Info Gubernur */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
              <h3 className="font-bold text-lg mb-4 section-title">Gubernur dan Wakil Gubernur</h3>
              <div className="space-y-6">
                <div>
                  <img src="/images/gubernur.jpg" alt="Gubernur Sumatera Barat" className="w-50 h-60 object-cover rounded-lg mx-auto mb-3 shadow-md" />
                  <h4 className="font-bold text-gray-900">H. Mahyeldi Ansharullah, SP</h4>
                  <p className="text-sm text-gray-500">Gubernur Sumatera Barat</p>
                </div>
                <div>
                  <img src="/images/wagub.jpg" alt="Gubernur Sumatera Barat" className="w-50 h-60 object-cover rounded-lg mx-auto mb-3 shadow-md" />
                  <h4 className="font-bold text-gray-900">Vasko Ruseimy, ST</h4>
                  <p className="text-sm text-gray-500">Wakil Gubernur Sumatera Barat</p>
                </div>
              </div>
            </div>

            {/* Berita Populer Sidebar */}
            <BeritaPopulerSidebar articles={articles} />
          </aside>
        </div>
      </main>
    </>
  );
}
