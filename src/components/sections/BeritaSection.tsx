import React from 'react';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import ArticleCard from '@/components/ui/ArticleCard';
import { ARTICLES } from '@/constants/homepage';

const BeritaSection: React.FC = () => {
  return (
    <Section className="container mx-auto px-4 pb-8 md:pb-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-xl md:text-2xl font-bold text-green-800">
          Berita & Pengumuman Terbaru
        </h2>
        <div className="relative w-full md:w-72">
          <input 
            type="text" 
            placeholder="Cari berita..." 
            className="w-full pl-10 pr-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white" 
          />
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-green-400" />
        </div>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTICLES.map((article, idx) => (
          <ArticleCard
            key={idx}
            title={article.title}
            date={article.date}
            author={article.author}
            views={article.views}
            category={article.category}
            excerpt={article.excerpt}
          />
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <Link 
          href="/berita" 
          className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
        >
          Lihat Semua Berita 
          <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
};

export default BeritaSection;
