// Gallery Categories Types
export type GalleryCategory = {
  id: string;
  name: string;
  count: number;
};

// Gallery Photos Types
export type GalleryPhoto = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  location: string;
  views: number;
  featured: boolean;
};

// Kegiatan Categories Types
export type KegiatanCategory = {
  id: string;
  name: string;
  count: number;
};

// Kegiatan Events Types
export type KegiatanEvent = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  location: string;
  participants: number;
  duration: string;
  views: number;
  featured: boolean;
};