import { useState, useEffect, useMemo } from 'react';
import { GALLERY_PHOTOS } from '../data/galeri';
import { GalleryPhoto } from '../types/galeri';

export const useFotoGaleri = (category: string = 'all', searchTerm: string = '') => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredPhotos = useMemo(() => {
    return GALLERY_PHOTOS.filter((photo: GalleryPhoto) => {
      const matchesCategory = category === 'all' || photo.category === category;
      const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, searchTerm]);

  const totalItems = filteredPhotos.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedPhotos = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredPhotos.slice(startIndex, endIndex);
  }, [currentPage, filteredPhotos, itemsPerPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [category, searchTerm]);

  return {
    photos: paginatedPhotos,
    currentPage,
    totalPages,
    handlePageChange,
    totalItems
  };
};