"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, SetStateAction } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Eye, ChevronRight, Filter, ArrowRight, Clock, MapPin, Users, TrendingUp, Newspaper, Megaphone, FileText, Briefcase, BarChart3, RefreshCw, FileSearch, X, Layers, ArrowUp, Shield, Scale, FileCheck, AlertCircle, FileBarChart } from "lucide-react";

// Animasi untuk elemen yang muncul saat scroll
const useInView = (options = {}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsInView(entry.isIntersecting);
		}, options);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [options]); // Menghapus ref dari dependency array karena ref tidak berubah

	return [ref, isInView];
};


const kategoriList = [
	{ key: "all", label: "Semua", icon: Filter },
	{ key: "berita", label: "Berita", icon: Newspaper },
	{ key: "pengumuman", label: "Pengumuman", icon: Megaphone },
	{ key: "program", label: "Program", icon: FileText },
	{ key: "kegiatan", label: "Kegiatan", icon: Calendar },
	{ key: "utama", label: "Berita Utama", icon: TrendingUp },
];

// Data untuk komponen

// Statistik pengunjung website
const statistikPengunjung = [
	{
		id: 1,
		jumlah: "1,234",
		label: "Pengunjung Hari Ini",
		icon: <Users size={20} />
	},
	{
		id: 2,
		jumlah: "5,678",
		label: "Pengunjung Minggu Ini",
		icon: <TrendingUp size={20} />
	},
	{
		id: 3,
		jumlah: "15,234",
		label: "Pengunjung Bulan Ini",
		icon: <BarChart3 size={20} />
	},
	{
		id: 4,
		jumlah: "256,789",
		label: "Total Pengunjung",
		icon: <Users size={20} />
	}
];

// Agenda kegiatan mendatang
const agendaKegiatan = [
	{
		id: 1,
		tanggal: "15",
		bulan: "Jul",
		judul: "Sosialisasi Program KB",
		waktu: "09:00 WIB",
		lokasi: "Aula Kantor Dinas",
	},
	{
		id: 2,
		tanggal: "18",
		bulan: "Jul",
		judul: "Pelatihan Kader Posyandu",
		waktu: "13:00 WIB",
		lokasi: "Gedung Serbaguna",
	},
	{
		id: 3,
		tanggal: "22",
		bulan: "Jul",
		judul: "Seminar Perlindungan Anak",
		waktu: "09:00 WIB",
		lokasi: "Hotel Grand Zuri",
	},
];

// Layanan publik populer
const layananPublik = [
	{
		id: 1,
		nama: "Pengaduan Kekerasan",
		deskripsi: "Layanan pengaduan kasus kekerasan terhadap perempuan dan anak",
		link: "/layanan/pengaduan-kekerasan",
		icon: <Shield size={18} />,
	},
	{
		id: 2,
		nama: "Konsultasi KB",
		deskripsi: "Konsultasi program keluarga berencana",
		link: "/layanan/konsultasi-kb",
		icon: <Users size={18} />,
	},
	{
		id: 3,
		nama: "Bantuan Hukum Anak",
		deskripsi: "Layanan bantuan hukum untuk kasus anak",
		link: "/layanan/bantuan-hukum-anak",
		icon: <Scale size={18} />,
	},
	{
		id: 4,
		nama: "Perizinan Online",
		deskripsi: "Layanan perizinan secara online",
		link: "/layanan/perizinan-online",
		icon: <FileCheck size={18} />,
	},
];

// Informasi publik
const informasiPublik = [
	{
		id: 1,
		nama: "Informasi Berkala",
		deskripsi: "Informasi yang wajib disediakan dan diumumkan secara berkala",
		link: "/ppid/informasi-berkala",
		icon: <Clock size={18} />,
	},
	{
		id: 2,
		nama: "Informasi Serta Merta",
		deskripsi: "Informasi yang wajib diumumkan secara serta merta",
		link: "/ppid/informasi-serta-merta",
		icon: <AlertCircle size={18} />,
	},
	{
		id: 3,
		nama: "Informasi Setiap Saat",
		deskripsi: "Informasi yang wajib tersedia setiap saat",
		link: "/ppid/informasi-setiap-saat",
		icon: <Calendar size={18} />,
	},
	{
		id: 4,
		nama: "Laporan Akses Informasi",
		deskripsi: "Laporan akses informasi publik",
		link: "/ppid/laporan-akses-informasi",
		icon: <FileBarChart size={18} />,
	},
];

// Berita


const beritaList = [
	{
		id: 1,
		title:
			"Rencana Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana 2021-2026",
		date: "13 Juli 2025",
		excerpt:
			"Rencana strategis untuk pemberdayaan perempuan dan perlindungan anak dalam periode 2021-2026 yang mencakup berbagai program inovatif dan berkelanjutan untuk meningkatkan kualitas hidup masyarakat Sumatera Barat.",
		image: "/images/berita1.jpg",
		link: "/berita/1",
		kategori: ["utama", "program"],
		views: 389,
		badge: "Program",
	},
	{
		id: 2,
		title: "PERJANJIAN KINERJA DP3AP2KB TAHUN 2024",
		date: "13 Juli 2025",
		excerpt:
			"Komitmen kinerja untuk tahun 2024 dalam memaksimalkan berbagai program pemberdayaan.",
		image: "/images/berita2.jpg",
		link: "/berita/2",
		kategori: ["program"],
		views: 423,
		badge: "Program",
	},
	{
		id: 3,
		title: "Rencana Aksi DP3AP2KB Tahun 2024",
		date: "13 Juli 2025",
		excerpt:
			"Rencana aksi strategis untuk implementasi program prioritas dalam tahun berjalan.",
		image: "/images/berita3.jpg",
		link: "/berita/3",
		kategori: ["program"],
		views: 348,
		badge: "Program",
	},
	{
		id: 4,
		title: "Sosialisasi Sistem Informasi Gender dan Anak",
		date: "10 Juli 2025",
		excerpt:
			"Sosialisasi sistem untuk pelaporan gender dan anak sebagai bagian dari digitalisasi program pemerintah.",
		image: "/images/berita4.jpg",
		link: "/berita/4",
		kategori: ["kegiatan"],
		views: 210,
		badge: "Kegiatan",
	},
	{
		id: 5,
		title: "Workshop Perlindungan Anak dari Kekerasan Online",
		date: "10 Juli 2025",
		excerpt:
			"Workshop untuk meningkatkan kapasitas pendamping dan masyarakat dalam perlindungan anak dari kekerasan online.",
		image: "/images/berita5.jpg",
		link: "/berita/5",
		kategori: ["kegiatan"],
		views: 165,
		badge: "Kegiatan",
	},
	{
		id: 6,
		title: "Pengumuman Seleksi Calon Konselor KB Tingkat Daerah",
		date: "9 Juli 2025",
		excerpt:
			"Pengumuman seleksi untuk calon konselor KB tingkat daerah, silakan mendaftar melalui website resmi.",
		image: "/images/berita6.jpg",
		link: "/berita/6",
		kategori: ["pengumuman"],
		views: 98,
		badge: "Pengumuman",
	},
];

export default function Berita() {
	const [kategori, setKategori] = useState("all");
	const [search, setSearch] = useState("");
	const [isSearchFocused, setIsSearchFocused] = useState(false);
	
	// Refs untuk animasi scroll
	const [heroRef, heroInView] = useInView({ threshold: 0.1 });
	const [sidebarRef, sidebarInView] = useInView({ threshold: 0.1 });
	const [searchRef, searchInView] = useInView({ threshold: 0.1 });
	const [gridRef, gridInView] = useInView({ threshold: 0.1 });

	// Filter berita berdasarkan kategori dan pencarian
	const filtered = beritaList.filter((b) => {
  // Pastikan b.kategori ada sebelum memanggil includes
  const matchKategori =
    kategori === "all" || (b.kategori && b.kategori.includes(kategori));
  const matchSearch =
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.excerpt.toLowerCase().includes(search.toLowerCase());
  return matchKategori && matchSearch;
});

// Berita utama dan sidebar
const utama = beritaList.find((b) => b.kategori && b.kategori.includes("utama"));
const sidebarUtama = beritaList
  .filter((b) => b.kategori && b.kategori.includes("utama") && b.id !== utama?.id)
  .slice(0, 2);

	// Animasi variants untuk Framer Motion
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
	};
	
	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		}
	};
	
	const pulseAnimation = {
		scale: [1, 1.02, 1],
		transition: { duration: 1.5, repeat: Infinity }
	};
	
	// Handler untuk pencarian
	const handleSearchChange = (e: { target: { value: SetStateAction<string>; }; }) => {
		setSearch(e.target.value);
	};
	
	// Handler untuk kategori
	const handleCategoryChange = (key: SetStateAction<string>) => {
		setKategori(key);
	};


	return (
		<>
			{/* Loading overlay dihapus */}
			<motion.section
				className="max-w-7xl mx-auto py-8 px-4 bg-white"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				{/* Header dengan animasi */}
				<motion.div 
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-8"
				>
					<h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-2">
						Berita Utama
					</h1>
					<div className="w-20 h-1 bg-green-500 mx-auto mb-3 rounded-full"></div>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Berita dan informasi penting terbaru dari Dinas Pemberdayaan Perempuan dan Perlindungan Anak, 
						Pengendalian Penduduk dan Keluarga Berencana Provinsi Sumatera Barat
					</p>
				</motion.div>

				{/* Hero utama + sidebar dengan animasi */}
				<div className="flex flex-col lg:flex-row gap-6 mb-12">
					{/* Hero utama */}
					{utama && (
						<motion.div 
							ref={heroRef as React.RefObject<HTMLDivElement>}
							initial="hidden"
							animate={heroInView ? "visible" : "hidden"}
							variants={fadeInUp}
							className="w-full lg:w-2/3 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
						>
							<div className="relative overflow-hidden group h-56 md:h-72">
								<div className="absolute inset-0 bg-green-600 flex items-center justify-center">
									<svg
										className="w-20 h-20 text-white opacity-20"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-6">
									<motion.div 
										className="flex items-center gap-3 mb-3"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2, duration: 0.5 }}
									>
										<span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
											{utama.badge}
										</span>
										<span className="text-white/90 text-sm flex items-center gap-1">
											<Calendar size={14} />
											{utama.date}
										</span>
										<span className="text-white/80 text-sm flex items-center gap-1">
											<Eye size={14} />
											{utama.views}
										</span>
									</motion.div>
									<motion.h2 
										className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.3, duration: 0.5 }}
									>
										{utama.title}
									</motion.h2>
								</div>
							</div>
							<div className="p-6">
								<p className="text-gray-700 mb-4">
									{utama.excerpt}
								</p>
								<Link
									href={utama.link}
									className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors group"
								>
									Baca Selengkapnya
									<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
								</Link>
							</div>
						</motion.div>
					)}

					{/* Sidebar dengan konten */}
					<motion.div 
						ref={sidebarRef as React.RefObject<HTMLDivElement>}
						initial="hidden"
						animate={sidebarInView ? "visible" : "hidden"}
						variants={staggerContainer}
						className="w-full lg:w-1/3 flex flex-col gap-6"
					>
						{/* Berita utama lainnya */}
						<div className="bg-white rounded-xl shadow-md p-5 border border-green-100">
							<h3 className="text-lg font-bold text-green-800 mb-4 pb-2 border-b border-green-100">
								Berita Utama Lainnya
							</h3>
							<div className="space-y-4">
								{sidebarUtama && sidebarUtama.length > 0 && sidebarUtama.map((b) => (
								<motion.div
									key={b.id}
									variants={fadeInUp}
									className="group"
								>
									<div className="flex items-center gap-2 mb-1">
										<span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded-full">
											{b.badge}
										</span>
										<span className="text-xs text-gray-500 flex items-center gap-1">
											<Calendar size={12} />
											{b.date}
										</span>
									</div>
									<h4 className="text-sm font-bold text-green-800 line-clamp-2 group-hover:text-green-600 transition-colors">
										<Link href={b.link}>{b.title}</Link>
									</h4>
									<p className="text-xs text-gray-600 line-clamp-2 mt-1 mb-2">
										{b.excerpt}
									</p>
									<Link
										href={b.link}
										className="text-green-600 text-xs font-semibold hover:underline flex items-center gap-1 group-hover:gap-2 transition-all"
									>
										Baca
										<ChevronRight size={14} />
									</Link>
									{sidebarUtama.length > 1 && b.id !== sidebarUtama[sidebarUtama.length - 1].id && (
										<div className="border-b border-gray-100 my-4"></div>
									)}
								</motion.div>
							))}
							</div>
						</div>

						{/* Agenda Kegiatan */}
						<motion.div 
							variants={fadeInUp}
							className="bg-white rounded-xl shadow-md p-5 border border-green-100"
						>
							<h3 className="text-lg font-bold text-green-800 mb-4 pb-2 border-b border-green-100 flex items-center gap-2">
								<Calendar size={18} className="text-green-600" />
								Agenda Kegiatan
							</h3>
							<div className="space-y-4">
								{agendaKegiatan.map((agenda) => (
									<div key={agenda.id} className="flex gap-3 group">
										<div className="bg-green-100 rounded-lg p-2 text-center min-w-[50px] h-fit group-hover:bg-green-200 transition-colors">
											<span className="block text-lg font-bold text-green-800">{agenda.tanggal}</span>
											<span className="block text-xs text-green-700">{agenda.bulan}</span>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-green-800 group-hover:text-green-600 transition-colors">
												{agenda.judul}
											</h4>
											<p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
												<Clock size={12} className="text-green-600" />
												{agenda.waktu}
											</p>
											<p className="text-xs text-gray-600 flex items-center gap-1">
												<MapPin size={12} className="text-green-600" />
												{agenda.lokasi}
											</p>
										</div>
									</div>
								))}
							</div>
							<Link href="/agenda" className="text-green-600 text-sm font-semibold hover:underline mt-4 inline-flex items-center gap-1 group">
								Lihat Semua Agenda
								<ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
							</Link>
						</motion.div>
					</motion.div>
				</div>
			{/* Search & filter dengan animasi */}
			<motion.div 
				ref={searchRef as React.RefObject<HTMLDivElement>}
				initial="hidden"
				animate={searchInView ? "visible" : "hidden"}
				variants={fadeInUp}
				className="flex flex-col md:flex-row md:items-center gap-4 mb-8"
			>
				<div className="relative flex-1">
					<div className={`relative transition-all duration-300 ${isSearchFocused ? 'ring-2 ring-green-500 shadow-lg' : 'shadow-md'}`}>
						<input
							type="text"
							placeholder="Cari berita..."
							className="w-full pl-12 pr-4 py-3 border-0 rounded-lg focus:outline-none bg-white"
							value={search}
							onChange={handleSearchChange}
							onFocus={() => setIsSearchFocused(true)}
							onBlur={() => setIsSearchFocused(false)}
						/>
						<Search
							className={`w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${isSearchFocused ? 'text-green-600' : 'text-gray-400'}`}
						/>
					</div>
					{search && (
						<button 
							onClick={() => setSearch('')}
							className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
						>
							<X size={16} />
						</button>
					)}
				</div>
				<div className="flex gap-2 flex-wrap">
					{kategoriList.map((k) => (
						<motion.button
							key={k.key}
							layout
							transition={{ type: 'spring', stiffness: 400, damping: 30, duration: 0.25 }}
							whileTap={{ scale: 0.96 }}
							whileHover={{ scale: 1.04 }}
							onClick={() => handleCategoryChange(k.key)}
							className={`px-4 py-2 rounded-full border font-semibold transition-colors duration-200 text-xs
								${kategori === k.key
									? "bg-green-700 text-white border-green-700 shadow"
									: "bg-white text-green-700 border-green-300 hover:bg-green-50"}
							`}
							aria-pressed={kategori === k.key}
						>
							{k.label}
						</motion.button>
					))}
				</div>
			</motion.div>
			{/* Grid berita dengan animasi */}
			<motion.div 
				ref={gridRef as React.RefObject<HTMLDivElement>}
				initial="hidden"
				animate={gridInView ? "visible" : "hidden"}
				variants={staggerContainer}
				className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
			>
				{filtered.length > 0 ? (
					filtered.map((berita, index) => (
						<motion.div
							key={berita.id}
							variants={fadeInUp}
							custom={index % 3}
							className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full group hover:shadow-lg transition-shadow duration-300"
						>
							<div className="relative h-48 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
									<svg
										className="w-16 h-16 text-white opacity-20"
										fill="none"
										stroke="currentColor"
										strokeWidth={1.5}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div className="absolute top-3 left-3 flex gap-2">
									<span className="bg-white/90 backdrop-blur-sm text-green-800 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
										{berita.badge}
									</span>
								</div>
							</div>
							<div className="p-5 flex-1 flex flex-col">
								<div className="flex items-center justify-between mb-3">
									<span className="text-xs text-gray-500 flex items-center gap-1">
										<Calendar size={14} className="text-green-600" />
										{berita.date}
									</span>
									<span className="text-xs text-gray-500 flex items-center gap-1">
										<Eye size={14} className="text-green-600" />
										{berita.views}
									</span>
								</div>
								<h2 className="text-lg font-bold text-green-800 mb-2 leading-tight group-hover:text-green-600 transition-colors">
									<Link href={berita.link}>{berita.title}</Link>
								</h2>
								<p className="text-gray-600 text-sm mb-4 line-clamp-3">
									{berita.excerpt}
								</p>
								<div className="flex items-center gap-2 mt-auto">
									{berita.kategori && berita.kategori.slice(0, 2).map((cat) => (
										<span key={cat} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
											{cat}
										</span>
									))}
								</div>
								<Link
									href={berita.link}
									className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold hover:text-green-700 mt-4 group-hover:gap-2 transition-all"
								>
									Baca Selengkapnya
									<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
								</Link>
							</div>
						</motion.div>
					))
				) : (
					<motion.div 
						variants={fadeInUp} 
						className="col-span-full flex flex-col items-center justify-center py-12 text-center"
					>
						<FileSearch size={48} className="text-green-300 mb-4" />
						<h3 className="text-xl font-bold text-green-800 mb-2">Tidak Ada Berita Ditemukan</h3>
						<p className="text-gray-600 mb-4">Maaf, tidak ada berita yang sesuai dengan kriteria pencarian Anda.</p>
						<button 
								onClick={() => {
									setSearch('');
									setKategori('all');
								}}
							className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
						>
							<RefreshCw size={16} />
							Reset Pencarian
						</button>
					</motion.div>
				)}
			</motion.div>

			{/* Bagian tambahan - Layanan dan Informasi */}
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
				{/* Layanan Publik Populer */}
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ delay: 0.1, duration: 0.5 }}
					className="bg-white rounded-xl shadow-md p-5 border border-green-100"
				>
					<h3 className="text-lg font-bold text-green-800 mb-4 pb-2 border-b border-green-100 flex items-center gap-2">
						<Briefcase size={18} className="text-green-600" />
						Layanan Publik Populer
					</h3>
					<div className="space-y-3">
						{layananPublik.map((layanan) => (
							<Link 
								key={layanan.id} 
								href={layanan.link}
								className="flex items-center gap-3 p-2 hover:bg-green-50 rounded-lg group transition-colors"
							>
								<div className="bg-green-100 text-green-700 p-2 rounded-lg group-hover:bg-green-200 transition-colors">
									{layanan.icon}
								</div>
								<div>
									<h4 className="text-sm font-semibold text-green-800 group-hover:text-green-600 transition-colors">
										{layanan.nama}
									</h4>
									<p className="text-xs text-gray-600">{layanan.deskripsi}</p>
								</div>
							</Link>
						))}
					</div>
					<Link href="/layanan" className="text-green-600 text-sm font-semibold hover:underline mt-4 inline-flex items-center gap-1 group">
						Lihat Semua Layanan
						<ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
					</Link>
				</motion.div>

				{/* Informasi Publik */}
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className="bg-white rounded-xl shadow-md p-5 border border-green-100"
				>
					<h3 className="text-lg font-bold text-green-800 mb-4 pb-2 border-b border-green-100 flex items-center gap-2">
						<FileText size={18} className="text-green-600" />
						Informasi Publik
					</h3>
					<div className="space-y-3">
						{informasiPublik.map((info) => (
							<Link 
								key={info.id} 
								href={info.link}
								className="flex items-center gap-3 p-2 hover:bg-green-50 rounded-lg group transition-colors"
							>
								<div className="bg-green-100 text-green-700 p-2 rounded-lg group-hover:bg-green-200 transition-colors">
									{info.icon}
								</div>
								<div>
									<h4 className="text-sm font-semibold text-green-800 group-hover:text-green-600 transition-colors">
										{info.nama}
									</h4>
									<p className="text-xs text-gray-600">{info.deskripsi}</p>
								</div>
							</Link>
						))}
					</div>
					<Link href="/informasi" className="text-green-600 text-sm font-semibold hover:underline mt-4 inline-flex items-center gap-1 group">
						Lihat Semua Informasi
						<ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
					</Link>
				</motion.div>

				{/* Statistik Pengunjung */}
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className="bg-white rounded-xl shadow-md p-5 border border-green-100 col-span-1 md:col-span-2 lg:col-span-2"
				>
					<h3 className="text-lg font-bold text-green-800 mb-4 pb-2 border-b border-green-100 flex items-center gap-2">
						<BarChart3 size={18} className="text-green-600" />
						Statistik Pengunjung Website
					</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{statistikPengunjung.map((stat) => (
							<div 
								key={stat.id} 
								className="bg-green-50 rounded-lg p-4 text-center hover:bg-green-100 transition-colors"
							>
								<div className="text-green-600 mb-2 flex justify-center">
									{stat.icon}
								</div>
								<div className="text-2xl font-bold text-green-800 mb-1">{stat.jumlah}</div>
								<div className="text-xs text-gray-600">{stat.label}</div>
							</div>
						))}
					</div>
					<div className="mt-4 pt-4 border-t border-green-100">
						<div className="text-sm text-gray-600 flex items-center justify-between">
							<span className="flex items-center gap-1">
								<Clock size={14} className="text-green-600" />
								Update terakhir: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
							</span>
							<Link href="/statistik" className="text-green-600 text-sm font-semibold hover:underline inline-flex items-center gap-1 group">
								Detail
								<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.section>

		{/* Back to top button */}
		<motion.button
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1, duration: 0.3 }}
			className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors z-10"
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		>
			<ArrowUp size={20} />
		</motion.button>
	</>
	);
}
