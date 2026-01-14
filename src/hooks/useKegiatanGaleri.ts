import { useState, useEffect, useMemo } from 'react';
import { KEGIATAN_EVENTS } from '../data/galeri';
import { KegiatanEvent } from '../types/galeri';

export const useKegiatanGaleri = (category: string = 'all', searchTerm: string = '') => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredEvents = useMemo(() => {
    return KEGIATAN_EVENTS.filter((event: KegiatanEvent) => {
      const matchesCategory = category === 'all' || event.category === category;
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, searchTerm]);

  const totalItems = filteredEvents.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredEvents.slice(startIndex, endIndex);
  }, [currentPage, filteredEvents, itemsPerPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [category, searchTerm]);

  return {
    events: paginatedEvents,
    currentPage,
    totalPages,
    handlePageChange,
    totalItems
  };
};