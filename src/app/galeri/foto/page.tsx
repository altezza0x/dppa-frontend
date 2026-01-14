"use client";
import { memo, useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Eye,
  Download,
  Search,
  Camera,
  Heart,
  Share2,
  X,
  ChevronLeft,
  ZoomIn,
  Play,
  Send
} from "lucide-react";

// Minimal animation variants
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Consistent transition settings
const transitions = {
  default: { duration: 0.3, ease: "easeOut" as const },
  fast: { duration: 0.2, ease: "easeOut" as const },
  slow: { duration: 0.5, ease: "easeOut" as const }
};

import { GALLERY_CATEGORIES, GALLERY_PHOTOS } from '@/data/galeri';
import Pagination from '@/components/ui/Pagination';

// Components
const BreadcrumbNav = memo(() => (
  <motion.nav
    variants={slideUp}
    initial="initial"
    animate="animate"
    transition={transitions.default}
    className="flex items-center gap-1 text-sm text-gray-600"
  >
    <Link href="/" className="hover:underline text-emerald-700 font-semibold transition-colors duration-200">
      Beranda
    </Link>
    <ChevronRight size={16} className="text-gray-400" />
    <span className="text-gray-700">Galeri</span>
    <ChevronRight size={16} className="text-gray-400" />
    <span className="text-gray-700">Foto</span>
  </motion.nav>
));

BreadcrumbNav.displayName = 'BreadcrumbNav';

const HeaderSection = memo(() => (
  <>
    {/* Header */}
    <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={transitions.slow}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">
            Galeri Foto
          </h1>
          <p className="text-lg text-emerald-100 max-w-3xl mx-auto">
            Dokumentasi kegiatan dan program DP3AP2KB Sumatera Barat dalam melayani masyarakat
          </p>
        </motion.div>
      </div>
    </div>

    {/* Breadcrumb */}
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <BreadcrumbNav />
      </div>
    </div>
  </>
));

HeaderSection.displayName = 'HeaderSection';

// Photo Modal Component
const PhotoModal = memo(({ 
  photo, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev, 
  hasNext, 
  hasPrev,
  currentIndex,
  totalCount
}: { 
  photo: GalleryPhoto | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  currentIndex: number;
  totalCount: number;
}) => {
  if (!isOpen || !photo) return null;

  const formattedDate = new Date(photo.date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transitions.default}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
      {/* Close Button - Elegant minimalist design */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-all duration-300 text-white backdrop-blur-md border border-white/10 hover:border-white/20 hover:scale-110 group"
      >
        <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Navigation Buttons - Elegant minimalist design */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-all duration-300 text-white backdrop-blur-md border border-white/10 hover:border-white/20 hover:scale-110 group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform duration-300" />
        </button>
      )}
      
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-all duration-300 text-white backdrop-blur-md border border-white/10 hover:border-white/20 hover:scale-110 group"
        >
          <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform duration-300" />
        </button>
      )}

      {/* Modal Content */}
      <div 
        className="relative max-w-6xl max-h-[95vh] w-full mx-3 sm:mx-4 bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with tags and counter */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/60 to-transparent p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              {photo.featured && (
                <span className="bg-emerald-500 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium text-white shadow-sm">
                  Featured
                </span>
              )}
              <span className="bg-white/90 text-gray-700 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium backdrop-blur-sm shadow-sm">
                {GALLERY_CATEGORIES.find(cat => cat.id === photo.category)?.name}
              </span>
            </div>
            
            {/* Elegant page counter */}
            <div className="bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span className="text-white text-xs font-medium">
                {currentIndex + 1} / {totalCount}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-full max-h-[95vh]">
          {/* Image Section */}
          <div className="flex-1 relative bg-gray-900">
            <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[95vh]">
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 70vw"
                priority
                quality={95}
              />
            </div>
          </div>

          {/* Info Panel */}
          <div className="lg:w-96 bg-white p-4 sm:p-6 lg:p-8 flex flex-col max-h-[45vh] lg:max-h-none overflow-y-auto">
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                {photo.title}
              </h2>
              
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {photo.description}
              </p>

              {/* Metadata */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="h-5 w-5 text-emerald-600" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <span>{photo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Eye className="h-5 w-5 text-emerald-600" />
                  <span>{photo.views} views</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex gap-3">
                <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download
                </button>
                <button className="px-4 py-3 border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors flex items-center justify-center">
                  <Heart size={18} className="text-gray-600" />
                </button>
                <button className="px-4 py-3 border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors flex items-center justify-center">
                  <Share2 size={18} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

PhotoModal.displayName = 'PhotoModal';

import { GalleryPhoto } from '@/types/galeri';

const PhotoCard = memo(({ photo, index, onClick }: { 
  photo: GalleryPhoto,
  index: number,
  onClick: () => void 
}) => {
  const formattedDate = useMemo(() => 
    new Date(photo.date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }), [photo.date]
  );

  const categoryName = useMemo(() => 
    GALLERY_CATEGORIES.find(cat => cat.id === photo.category)?.name,
    [photo.category]
  );

  return (
    <motion.div
      variants={slideUp}
      transition={transitions.default}
      whileHover={{ 
        scale: 1.005,
        transition: transitions.fast
      }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200 h-full flex flex-col group-hover:translate-y-[-2px]">
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <div className="relative aspect-[16/10] bg-gray-100">
            <Image
              src={photo.image}
              alt={photo.title}
              fill
              className="object-cover transition-all duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              priority={index < 6}
              loading={index < 6 ? "eager" : "lazy"}
            />
            
            {/* Clean overlay with minimal hover effect */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
              {/* Minimalist zoom indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <ZoomIn className="h-5 w-5 text-gray-700" />
                </div>
              </div>
            </div>

            {/* Clean featured badge */}
            {photo.featured && (
              <div className="absolute top-3 right-3">
                <div className="bg-emerald-500 text-white px-2.5 py-1 rounded-lg text-xs font-medium shadow-sm">
                  Featured
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Clean category tags */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-medium px-3 py-1.5 rounded-lg border border-emerald-100">
              {categoryName}
            </span>
          </div>
          
          <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2 min-h-[3rem] text-lg leading-snug">
            {photo.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">
            {photo.description}
          </p>
          
          {/* Minimal metadata */}
          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-emerald-500" />
              <span className="text-xs">{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Eye size={14} className="text-emerald-500" />
              <span className="text-xs">{photo.views}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-emerald-500" />
              <span className="text-xs truncate max-w-16">{photo.location}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

PhotoCard.displayName = 'PhotoCard';

import { useFotoGaleri } from '@/hooks/useFotoGaleri';

export default function Foto() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    photos: filteredPhotos,
    currentPage,
    totalPages,
    handlePageChange,
  } = useFotoGaleri(activeCategory, debouncedSearchTerm);

  // Calculate dynamic category counts
  const categoriesWithCounts = useMemo(() => {
    return GALLERY_CATEGORIES.map(category => {
      if (category.id === 'all') {
        return { ...category, count: GALLERY_PHOTOS.length };
      }
      const count = GALLERY_PHOTOS.filter(photo => photo.category === category.id).length;
      return { ...category, count };
    });
  }, []);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // We now use filteredPhotos from useFotoGaleri hook

  const openModal = (photo: typeof GALLERY_PHOTOS[number]) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'next' | 'prev') => {
    if (!selectedPhoto) return;
    
    const currentIndex = filteredPhotos.findIndex((p: GalleryPhoto) => p.id === selectedPhoto.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex + 1 < filteredPhotos.length ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    }
    
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const currentPhotoIndex = selectedPhoto ? filteredPhotos.findIndex((p: GalleryPhoto) => p.id === selectedPhoto.id) : -1;
  const hasNext = currentPhotoIndex < filteredPhotos.length - 1;
  const hasPrev = currentPhotoIndex > 0;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          if (hasPrev) navigatePhoto('prev');
          break;
        case 'ArrowRight':
          if (hasNext) navigatePhoto('next');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, hasNext, hasPrev]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <HeaderSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters & Search */}
        <motion.div
          variants={slideUp}
          initial="initial"
          animate="animate"
          transition={transitions.default}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Cari foto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-sm placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categoriesWithCounts.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-emerald-300 hover:text-emerald-600'
                }`}
              >
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-emerald-400 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
        >
          {filteredPhotos.map((photo: GalleryPhoto, index: number) => (
            <PhotoCard 
              key={photo.id} 
              photo={photo} 
              index={index} 
              onClick={() => openModal(photo)}
            />
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          variants={slideUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={transitions.default}
          className="text-center mt-16"
        >
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </motion.div>

        {/* Quick Links Footer */}
        <motion.div
          variants={slideUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={transitions.default}
          className="mt-16 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Jelajahi Lainnya
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/galeri/kegiatan" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                  <Calendar className="h-6 w-6 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Galeri Kegiatan</h4>
                <p className="text-sm text-gray-600">Dokumentasi acara dan kegiatan resmi</p>
                <div className="mt-4 flex items-center text-emerald-600 text-sm font-medium">
                  Lihat Galeri
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link href="/galeri/video" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Play className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Galeri Video</h4>
                <p className="text-sm text-gray-600">Koleksi video dokumentasi kegiatan</p>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                  Lihat Video
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link href="/berita" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Send className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Berita Terkini</h4>
                <p className="text-sm text-gray-600">Informasi dan berita terbaru</p>
                <div className="mt-4 flex items-center text-purple-600 text-sm font-medium">
                  Baca Berita
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Photo Modal */}
      <AnimatePresence mode="wait">
        <PhotoModal
          photo={selectedPhoto}
          isOpen={isModalOpen}
          onClose={closeModal}
          onNext={() => navigatePhoto('next')}
          onPrev={() => navigatePhoto('prev')}
          hasNext={hasNext}
          hasPrev={hasPrev}
          currentIndex={currentPhotoIndex}
          totalCount={filteredPhotos.length}
        />
      </AnimatePresence>
    </div>
  );
}
