import { useRef, useState, useEffect } from "react";

// Hook untuk intersection observer (alias for useScrollAnimation)
export const useScrollAnimation = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, {
      threshold: 0.1,
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, inView };
};

// Hook untuk filter dan search berita
export const useBeritaFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedKategori, setSelectedKategori] = useState("all");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleKategoriChange = (kategori: string) => {
    setSelectedKategori(kategori);
  };

  // Import berita data inside the hook to avoid import issues
  const beritaList = [
    {
      id: 1,
      title: "Rencana Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana 2021-2026",
      slug: "rencana-dinas-pppa-2021-2026",
      excerpt: "Rencana strategis untuk pemberdayaan perempuan dan perlindungan anak dalam periode 2021-2026 yang mencakup berbagai program inovatif dan berkelanjutan untuk meningkatkan kualitas hidup masyarakat Sumatera Barat.",
      image: "/public/images/bg.jpg",
      kategori: ["berita-utama", "program"],
      tanggal: "13 Juli 2025",
      author: "Admin DPPA",
      views: 389,
      featured: true
    },
    {
      id: 2,
      title: "Workshop Peningkatan Kapasitas ASN dalam Era Digital",
      slug: "workshop-kapasitas-asn-digital",
      excerpt: "Serangkaian pelatihan komprehensif untuk mempersiapkan aparatur sipil negara menghadapi tantangan digitalisasi pemerintahan.",
      image: "/public/images/bg.jpg",
      kategori: ["kegiatan", "program"],
      tanggal: "2025-01-18",
      author: "Tim Pelatihan",
      views: 890,
      featured: false
    },
    {
      id: 3,
      title: "Sosialisasi Peraturan Daerah Terbaru tentang Transparansi Informasi",
      slug: "sosialisasi-perda-transparansi-informasi",
      excerpt: "Upaya meningkatkan pemahaman masyarakat terhadap hak akses informasi publik sesuai dengan regulasi terkini.",
      image: "/public/images/bg.jpg",
      kategori: ["pengumuman", "berita"],
      tanggal: "2025-01-15",
      author: "Bagian Hukum",
      views: 670,
      featured: false
    },
    {
      id: 4,
      title: "Pengumuman Hasil Seleksi Program Beasiswa Pendidikan",
      slug: "pengumuman-hasil-seleksi-beasiswa",
      excerpt: "Daftar nama peserta yang lolos seleksi program beasiswa pendidikan untuk tahun 2025.",
      image: "/public/images/bg.jpg",
      kategori: ["pengumuman"],
      tanggal: "2025-01-12",
      author: "Tim Seleksi",
      views: 945,
      featured: false
    },
    {
      id: 5,
      title: "Program Pelatihan Digital Literacy untuk Masyarakat",
      slug: "program-pelatihan-digital-literacy",
      excerpt: "Inisiatif untuk meningkatkan kemampuan digital masyarakat dalam mengakses layanan pemerintahan online.",
      image: "/public/images/bg.jpg",
      kategori: ["program", "kegiatan"],
      tanggal: "2025-01-10",
      author: "Divisi Pelatihan",
      views: 756,
      featured: false
    },
    {
      id: 6,
      title: "Kegiatan Gotong Royong Membersihkan Lingkungan Kantor",
      slug: "kegiatan-gotong-royong-lingkungan",
      excerpt: "Partisipasi aktif seluruh pegawai dalam menjaga kebersihan dan kenyamanan lingkungan kerja.",
      image: "/public/images/bg.jpg",
      kategori: ["kegiatan", "berita"],
      tanggal: "2025-01-08",
      author: "Tim Kebersihan",
      views: 589,
      featured: false
    }
  ];

  const filteredBerita = beritaList.filter((berita) => {
    const matchesSearch = berita.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         berita.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesKategori = selectedKategori === "all" || 
                           berita.kategori.includes(selectedKategori);
    return matchesSearch && matchesKategori;
  });

  return {
    searchTerm,
    selectedKategori,
    filteredBerita,
    handleSearchChange,
    handleKategoriChange
  };
};

// Hook untuk animasi stagger
export const useStaggerAnimation = (delay = 0.1) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return { containerVariants, itemVariants };
};
