"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const kategoriList = [
	{ key: "all", label: "Semua" },
	{ key: "berita", label: "Berita" },
	{ key: "pengumuman", label: "Pengumuman" },
	{ key: "program", label: "Program" },
	{ key: "kegiatan", label: "Kegiatan" },
	{ key: "utama", label: "Berita Utama" },
];

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
	const filtered = beritaList.filter((b) => {
		const matchKategori =
			kategori === "all" || b.kategori.includes(kategori);
		const matchSearch =
			b.title.toLowerCase().includes(search.toLowerCase()) ||
			b.excerpt.toLowerCase().includes(search.toLowerCase());
		return matchKategori && matchSearch;
	});
	const utama = beritaList.find((b) => b.kategori.includes("utama"));
	const sidebarUtama = beritaList
		.filter((b) => b.kategori.includes("utama") && b.id !== utama?.id)
		.slice(0, 2);

	return (
		<section className="max-w-7xl mx-auto py-8 px-4">
			<h1 className="text-xl md:text-2xl font-bold text-green-700 text-center mb-1">
				Berita Utama
			</h1>
			<div className="text-gray-500 text-center mb-8 text-sm">
				Berita dan informasi penting terbaru
			</div>
			{/* Hero utama + sidebar */}
			<div className="flex flex-col md:flex-row gap-6 mb-8">
				{/* Hero utama */}
				{utama && (
					<div className="flex-1 bg-white rounded-xl shadow-md p-0 flex flex-col overflow-hidden">
						<div className="bg-green-100 flex items-center justify-center h-32 md:h-40">
							<svg
								className="w-12 h-12 text-green-600"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div className="p-6 flex-1 flex flex-col">
							<div className="flex items-center gap-2 mb-2">
								<span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
									{utama.badge}
								</span>
								<span className="text-xs text-gray-500">
									{utama.date}
								</span>
								<span className="text-xs text-gray-400 flex items-center gap-1">
									<svg
										className="w-4 h-4"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
										/>
									</svg>
									{utama.views} views
								</span>
							</div>
							<h2 className="text-lg md:text-xl font-bold text-green-800 mb-1 leading-tight">
								{utama.title}
							</h2>
							<p className="text-gray-700 text-sm mb-2 line-clamp-2">
								{utama.excerpt}
							</p>
							<Link
								href={utama.link}
								className="text-green-700 text-sm font-semibold hover:underline mt-auto"
							>
								Baca Selengkapnya &rarr;
							</Link>
						</div>
					</div>
				)}
				{/* Sidebar berita utama */}
				<div className="w-full md:w-72 flex flex-col gap-4">
					{sidebarUtama.map((b) => (
						<div
							key={b.id}
							className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 border border-green-100"
						>
							<div className="flex items-center gap-2 mb-1">
								<span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
									{b.badge}
								</span>
								<span className="text-xs text-gray-500">{b.date}</span>
							</div>
							<h3 className="text-sm font-bold text-green-800 line-clamp-2">
								{b.title}
							</h3>
							<p className="text-xs text-gray-600 line-clamp-2">
								{b.excerpt}
							</p>
							<Link
								href={b.link}
								className="text-green-700 text-xs font-semibold hover:underline mt-auto"
							>
								Baca
							</Link>
						</div>
					))}
				</div>
			</div>
			{/* Search & filter */}
			<div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
				<div className="flex-1">
					<input
						type="text"
						placeholder="Cari berita..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="w-full border border-green-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
					/>
				</div>
				<div className="flex gap-2 flex-wrap">
					{kategoriList.map((k) => (
						<button
							key={k.key}
							onClick={() => setKategori(k.key)}
							className={`px-4 py-2 rounded-full border font-semibold transition text-xs
                ${
					kategori === k.key
						? "bg-green-700 text-white border-green-700 shadow"
						: "bg-white text-green-700 border-green-300 hover:bg-green-50"
				}`}
							aria-pressed={kategori === k.key}
						>
							{k.label}
						</button>
					))}
				</div>
			</div>
			{/* Grid berita */}
			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
				{filtered.length === 0 ? (
					<div className="col-span-full text-center text-gray-500 py-12">
						Tidak ada data untuk kategori ini.
					</div>
				) : (
					filtered.map((berita) => (
						<div
							key={berita.id}
							className="bg-white rounded-xl shadow-sm border border-green-100 flex flex-col overflow-hidden group hover:shadow-md transition-all"
						>
							<div className="bg-green-100 flex items-center justify-center h-24">
								<span className="text-green-700 text-lg font-bold tracking-widest">
									DP3AP2KB
								</span>
							</div>
							<div className="p-4 flex-1 flex flex-col">
								<div className="flex items-center gap-2 mb-1">
									<span
										className={`bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full`}
									>
										{berita.badge}
									</span>
									<span className="text-xs text-gray-500">
										{berita.date}
									</span>
									<span className="text-xs text-gray-400 flex items-center gap-1">
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
											/>
										</svg>
										{berita.views} views
									</span>
								</div>
								<h3 className="text-sm font-bold text-green-800 mb-1 line-clamp-2">
									{berita.title}
								</h3>
								<p className="text-xs text-gray-600 mb-2 line-clamp-2">
									{berita.excerpt}
								</p>
								<Link
									href={berita.link}
									className="text-green-700 text-xs font-semibold hover:underline mt-auto"
								>
									Baca Selengkapnya &rarr;
								</Link>
							</div>
						</div>
					))
				)}
			</div>
		</section>
	);
}
