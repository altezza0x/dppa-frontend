import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  date: string;
  author: string;
  views: number;
  category: string;
  excerpt: string;
  href?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = React.memo(({
  title,
  date,
  views,
  excerpt,
  href = '#'
}) => {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full group hover:shadow-lg transition-shadow duration-300">
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <time className="text-xs text-gray-500" dateTime={date}>{date}</time>
          <span className="text-xs text-gray-500">{views} views</span>
        </div>
        <h2 className="text-lg font-bold text-green-800 mb-2 leading-tight group-hover:text-green-600 transition-colors">
          <Link href={href} className="hover:underline">{title}</Link>
        </h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
        <Link 
          href={href} 
          className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold hover:text-green-700 mt-auto group-hover:gap-2 transition-all"
          aria-label={`Baca artikel: ${title}`}
        >
          Baca Selengkapnya 
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
});

ArticleCard.displayName = 'ArticleCard';

export default ArticleCard;
