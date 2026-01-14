import { useState, useMemo } from 'react';
import { AGENDA_EVENTS, getAgendaByCategory, AgendaItem } from '@/data/agenda';

export const useAgendaFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [selectedStatus, setSelectedStatus] = useState<'semua' | AgendaItem['status']>('semua');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleCategoryChange = (kategori: string) => {
    setSelectedCategory(kategori);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handleStatusChange = (status: 'semua' | AgendaItem['status']) => {
    setSelectedStatus(status);
    setCurrentPage(1); // Reset to first page when changing status
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Filter logic
  const filteredAgenda = useMemo(() => {
    let filtered = getAgendaByCategory(selectedCategory);
    
    if (selectedStatus !== 'semua') {
      filtered = filtered.filter(agenda => agenda.status === selectedStatus);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(agenda => 
        agenda.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agenda.deskripsi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agenda.lokasi.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    const sorted = filtered.sort((a, b) => new Date(a.tanggal).getTime() - new Date(b.tanggal).getTime());
    
    // Calculate pagination
    const totalItems = sorted.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedAgenda = sorted.slice(startIndex, startIndex + itemsPerPage);

    return {
      items: paginatedAgenda,
      total: totalItems,
      totalPages
    };
  }, [searchTerm, selectedCategory, selectedStatus, currentPage]);

  return {
    searchTerm,
    selectedCategory,
    selectedStatus,
    currentPage,
    totalPages: filteredAgenda.totalPages,
    filteredAgenda: filteredAgenda.items,
    totalItems: filteredAgenda.total,
    handleSearchChange,
    handleCategoryChange,
    handleStatusChange,
    handlePageChange
  };
};