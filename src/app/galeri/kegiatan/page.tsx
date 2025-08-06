"use client";
import { memo, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Eye,
  Users,
  Search,
  Camera,
  Heart,
  Share2,
  X,
  ChevronLeft,
  ZoomIn,
  Clock,
  Tag
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

// Gallery data
const KEGIATAN_CATEGORIES = [
  { id: 'all', name: 'Semua', count: 0 }, // Will be calculated dynamically
  { id: 'workshop', name: 'Workshop', count: 0 },
  { id: 'sosialisasi', name: 'Sosialisasi', count: 0 },
  { id: 'rapat', name: 'Rapat Koordinasi', count: 0 },
  { id: 'pelatihan', name: 'Pelatihan', count: 0 }
] as const;

const KEGIATAN_EVENTS = [
  {
    id: 1,
    title: "Workshop Pemberdayaan Ekonomi Perempuan",
    description: "Pelatihan intensif untuk meningkatkan keterampilan wirausaha perempuan di berbagai sektor ekonomi kreatif dan UMKM",
    image: "/images/gallery/workshop-1.jpg",
    category: "workshop",
    date: "2025-01-20",
    location: "Padang Pariaman",
    participants: 150,
    duration: "2 hari",
    views: 245,
    featured: true
  },
  {
    id: 2,
    title: "Sosialisasi Perlindungan Anak dari Kekerasan",
    description: "Program edukasi komprehensif untuk orang tua, guru, dan masyarakat tentang pencegahan kekerasan pada anak",
    image: "/images/gallery/sosialisasi-1.jpg",
    category: "sosialisasi",
    date: "2025-01-18",
    location: "Bukittinggi",
    participants: 200,
    duration: "1 hari",
    views: 189,
    featured: false
  },
  {
    id: 3,
    title: "Rapat Koordinasi Lintas Sektor",
    description: "Koordinasi strategis dengan berbagai instansi terkait untuk sinkronisasi program pemberdayaan perempuan dan anak",
    image: "/images/gallery/rapat-1.jpg",
    category: "rapat",
    date: "2025-01-15",
    location: "Padang",
    participants: 50,
    duration: "4 jam",
    views: 156,
    featured: false
  },
  {
    id: 4,
    title: "Pelatihan Kader Posyandu",
    description: "Pemberdayaan kader posyandu untuk meningkatkan kualitas pelayanan kesehatan ibu dan anak di tingkat desa",
    image: "/images/gallery/posyandu-1.jpg",
    category: "pelatihan",
    date: "2025-01-12",
    location: "Solok",
    participants: 80,
    duration: "3 hari",
    views: 203,
    featured: true
  },
  {
    id: 5,
    title: "Kampanye Stop Perkawinan Anak",
    description: "Kampanye massal untuk meningkatkan kesadaran masyarakat tentang bahaya perkawinan anak dan pencegahannya",
    image: "/images/gallery/kampanye-1.jpg",
    category: "sosialisasi",
    date: "2025-01-10",
    location: "Payakumbuh",
    participants: 300,
    duration: "1 hari",
    views: 278,
    featured: true
  },
  {
    id: 6,
    title: "Workshop Parenting Positif",
    description: "Pelatihan pola asuh positif untuk orang tua dalam mendidik anak dengan pendekatan yang tepat dan bermartabat",
    image: "/images/gallery/workshop-2.jpg",
    category: "workshop",
    date: "2025-01-08",
    location: "Pesisir Selatan",
    participants: 120,
    duration: "2 hari",
    views: 167,
    featured: false
  }
] as const;

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
    <span className="text-gray-700">Kegiatan</span>
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
            Galeri Kegiatan
          </h1>
          <p className="text-lg text-emerald-100 max-w-3xl mx-auto">
            Dokumentasi berbagai kegiatan dan program DP3AP2KB Sumatera Barat dalam melayani masyarakat
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

// Event Modal Component
const EventModal = memo(({ 
  event, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev, 
  hasNext, 
  hasPrev 
}: { 
  event: typeof KEGIATAN_EVENTS[number] | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}) => {
  if (!isOpen || !event) return null;

  const formattedDate = new Date(event.date).toLocaleDateString('id-ID', {
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
      {/* Close Button - Outside modal */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white backdrop-blur-sm border border-white/20"
      >
        <X size={24} />
      </button>

      {/* Navigation Buttons - Outside modal */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white backdrop-blur-sm border border-white/20"
        >
          <ChevronLeft size={28} />
        </button>
      )}
      
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white backdrop-blur-sm border border-white/20"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Modal Content */}
      <div 
        className="relative max-w-6xl max-h-[95vh] w-full mx-3 sm:mx-4 bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with just tags */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/60 to-transparent p-3 sm:p-4">
          <div className="flex items-center gap-2 sm:gap-3">
            {event.featured && (
              <span className="bg-emerald-500 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white">
                Featured
              </span>
            )}
            <span className="bg-emerald-100 text-emerald-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              {KEGIATAN_CATEGORIES.find(cat => cat.id === event.category)?.name}
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-full max-h-[95vh]">
          {/* Image Section */}
          <div className="flex-1 relative bg-gray-900">
            <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[95vh]">
              <Image
                src={event.image}
                alt={event.title}
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
                {event.title}
              </h2>
              
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {event.description}
              </p>

              {/* Metadata */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="h-5 w-5 text-emerald-600" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <span>{event.participants} peserta</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  <span>{event.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Eye className="h-5 w-5 text-emerald-600" />
                  <span>{event.views} views</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex gap-3">
                <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                  <Share2 size={18} />
                  Bagikan
                </button>
                <button className="px-4 py-3 border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors flex items-center justify-center">
                  <Heart size={18} className="text-gray-600" />
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

EventModal.displayName = 'EventModal';

const EventCard = memo(({ event, index, onClick }: { 
  event: typeof KEGIATAN_EVENTS[number], 
  index: number,
  onClick: () => void 
}) => {
  const formattedDate = useMemo(() => 
    new Date(event.date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }), [event.date]
  );

  const categoryName = useMemo(() => 
    KEGIATAN_CATEGORIES.find(cat => cat.id === event.category)?.name,
    [event.category]
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
              src={event.image}
              alt={event.title}
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
            {event.featured && (
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
            <span className="inline-block bg-gray-50 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded-lg border border-gray-100">
              {event.duration}
            </span>
          </div>
          
          <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2 min-h-[3rem] text-lg leading-snug">
            {event.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">
            {event.description}
          </p>
          
          {/* Minimal metadata */}
          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-emerald-500" />
              <span className="text-xs">{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users size={14} className="text-emerald-500" />
              <span className="text-xs">{event.participants}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-emerald-500" />
              <span className="text-xs truncate max-w-16">{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

EventCard.displayName = 'EventCard';

export default function Kegiatan() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<typeof KEGIATAN_EVENTS[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate dynamic category counts
  const categoriesWithCounts = useMemo(() => {
    return KEGIATAN_CATEGORIES.map(category => {
      if (category.id === 'all') {
        return { ...category, count: KEGIATAN_EVENTS.length };
      }
      const count = KEGIATAN_EVENTS.filter(event => event.category === category.id).length;
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

  const filteredEvents = useMemo(() => {
    return KEGIATAN_EVENTS.filter(event => {
      const matchesCategory = activeCategory === 'all' || event.category === activeCategory;
      const matchesSearch = event.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, debouncedSearchTerm]);

  const openModal = (event: typeof KEGIATAN_EVENTS[number]) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const navigateEvent = (direction: 'next' | 'prev') => {
    if (!selectedEvent) return;
    
    const currentIndex = filteredEvents.findIndex(e => e.id === selectedEvent.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex + 1 < filteredEvents.length ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : filteredEvents.length - 1;
    }
    
    setSelectedEvent(filteredEvents[newIndex]);
  };

  const currentEventIndex = selectedEvent ? filteredEvents.findIndex(e => e.id === selectedEvent.id) : -1;
  const hasNext = currentEventIndex < filteredEvents.length - 1;
  const hasPrev = currentEventIndex > 0;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          if (hasPrev) navigateEvent('prev');
          break;
        case 'ArrowRight':
          if (hasNext) navigateEvent('next');
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
                placeholder="Cari kegiatan..."
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

        {/* Events Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
        >
          {filteredEvents.map((event, index) => (
            <EventCard 
              key={event.id} 
              event={event} 
              index={index} 
              onClick={() => openModal(event)}
            />
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          variants={slideUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={transitions.default}
          className="text-center mt-16"
        >
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-xl font-semibold transition-colors duration-200 text-base shadow-lg hover:shadow-xl">
            Muat Lebih Banyak
          </button>
        </motion.div>

        {/* Statistics Section */}
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
              Statistik Kegiatan
            </h3>
            <p className="text-gray-600">
              Ringkasan pencapaian kegiatan DP3AP2KB tahun ini
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">18+</h4>
              <p className="text-sm text-gray-600">Total Kegiatan</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">1,200+</h4>
              <p className="text-sm text-gray-600">Total Peserta</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">12</h4>
              <p className="text-sm text-gray-600">Kabupaten/Kota</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Tag className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">5</h4>
              <p className="text-sm text-gray-600">Kategori Program</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Event Modal */}
      <AnimatePresence mode="wait">
        <EventModal
          event={selectedEvent}
          isOpen={isModalOpen}
          onClose={closeModal}
          onNext={() => navigateEvent('next')}
          onPrev={() => navigateEvent('prev')}
          hasNext={hasNext}
          hasPrev={hasPrev}
        />
      </AnimatePresence>
    </div>
  );
}
