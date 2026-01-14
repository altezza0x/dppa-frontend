import React from 'react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination = ({ currentPage, totalPages, onPageChange, className }: PaginationProps) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Display only current and adjacent pages
  const getVisiblePages = () => {
    const pages: number[] = [];
    
    if (totalPages <= 2) {
      return pageNumbers;
    }
    
    if (currentPage === 1) {
      pages.push(1, 2);
    } else if (currentPage === totalPages) {
      pages.push(totalPages - 1, totalPages);
    } else {
      pages.push(currentPage - 1, currentPage, currentPage + 1);
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <nav className={cn('flex justify-center items-center space-x-1 my-8', className)}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          'p-2 rounded-md transition-colors',
          'text-gray-500 hover:text-emerald-600',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-gray-500'
        )}
        aria-label="Previous page"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="flex items-center space-x-1">
        {visiblePages.map((page, index) => (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={cn(
              'min-w-[2rem] h-8 text-sm flex items-center justify-center rounded-md transition-colors cursor-pointer',
              page === currentPage 
                ? 'bg-emerald-500 text-white font-medium'
                : 'text-gray-600 hover:text-emerald-600'
            )}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          'p-2 rounded-md transition-colors',
          'text-gray-500 hover:text-emerald-600',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-gray-500'
        )}
        aria-label="Next page"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;