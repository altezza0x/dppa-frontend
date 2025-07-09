"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface NavLinkItem {
	name: string;
	href: string;
	icon?: string; // icon bersifat opsional
}

interface NavLinkWithDropdown extends NavLinkItem {
	dropdown?: NavLinkItem[]; // dropdown berisi array NavLinkItem
}

const navLinks: NavLinkWithDropdown[] = [
	{ name: "Beranda", href: "/" },
	{
		name: "Profil",
		href: "/profil",
		dropdown: [
			{ name: "Visi dan Misi", href: "/profil/visi-misi", icon: "" },
			{ name: "Tugas dan Fungsi", href: "/profil/tugas-fungsi", icon: "" },
			{ name: "Struktur Organisasi", href: "/profil/struktur", icon: "" },
			{ name: "Sejarah Singkat", href: "/profil/sejarah", icon: "" },
			{ name: "Kepala Dinas", href: "/profil/kepala-dinas", icon: "" },
			{ name: "Hubungi Kami", href: "/profil/hubungi", icon: "" },
		],
	},
	{ name: "Berita", href: "/berita" },
	{
		name: "Galeri",
		href: "/galeri",
		dropdown: [
			{ name: "Foto", href: "/galeri/foto", icon: "" },
			{ name: "Kegiatan", href: "/galeri/kegiatan", icon: "" },
		],
	},
	{ name: "Pengumuman", href: "/pengumuman" },
	{
		name: "PPID",
		href: "/ppid",
		dropdown: [
			{ name: "Profil PPID", href: "/ppid/profil" },
			{ name: "Visi Misi PPID", href: "/ppid/visi-misi" },
			{ name: "Tugas dan Fungsi PPID", href: "/ppid/tugas-fungsi" },
			{ name: "Informasi Setiap Saat", href: "/ppid/informasi-setiap-saat" },
			{ name: "Informasi Secara Berkala", href: "/ppid/informasi-berkala" },
			{ name: "Informasi Serta Merta", href: "/ppid/informasi-serta-merta" },
			{ name: "Permohonan Informasi", href: "/ppid/permohonan-informasi" },
		],
	},
	{ name: "Agenda", href: "/agenda" },
	{
		name: "Informasi Layanan",
		href: "/layanan",
		dropdown: [
			{ name: "Standar Pelayanan Publik", href: "/layanan/standar-pelayanan" },
			{ name: "Maklumat Layanan", href: "/layanan/maklumat" },
			{ name: "Pengelolaan Pengaduan", href: "/layanan/pengaduan" },
			{ name: "Survey Kepuasan Masyarakat", href: "/layanan/survey" },
		],
	},
	{ name: "Download", href: "/download" },
	{ name: "Lapor", href: "/lapor" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [dropdown, setDropdown] = useState<string | null>(null);
	const [isClient, setIsClient] = useState(false);
	const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const handleDropdownEnter = (name: string) => {
		if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
		setDropdown(name);
	};

	const handleDropdownLeave = () => {
		dropdownTimeout.current = setTimeout(() => setDropdown(null), 120); // delay 120ms
	};

	return (
		<nav className="backdrop-blur bg-white/80 border-b border-gray-200 sticky top-0 z-50 transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
				{/* Flex 3 kolom: kiri, tengah, kanan */}
				<div className="flex w-full items-center justify-between">
					{/* Kiri: Logo + Judul */}
					<div className="flex items-center gap-2 min-w-[140px] max-w-[180px]">
						<Link href="/">
							<span className="flex items-center gap-2">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/5/56/Coat_of_arms_West_Sumatera.png"
									alt="Logo"
									className="h-10 w-auto"
								/>
								<span className="leading-tight hidden sm:block text-left">
									<span className="font-bold text-green-800 text-base md:text-lg tracking-wide block whitespace-nowrap">
										DP3AP2KB
									</span>
									<span className="text-gray-600 text-xs md:text-sm font-medium block whitespace-nowrap">
										Sumatera Barat
									</span>
								</span>
							</span>
						</Link>
					</div>

					{/* Tengah: Menu utama rata tengah, gap lebih kecil dan tanpa max-w/w-full agar tidak melebar */}
					<div className="flex-1 flex justify-center">
						<div className="hidden md:flex gap-3 items-center justify-center">
							{navLinks.map((link) =>
								link.dropdown ? (
									<div
										key={link.name}
										className="relative group"
										onMouseEnter={() => handleDropdownEnter(link.name)}
										onMouseLeave={handleDropdownLeave}
									>
										<button
											className={`flex items-center px-3 py-1 rounded transition font-medium ${
												dropdown === link.name
													? "bg-[var(--accent)] text-white shadow-md"
													: "text-gray-900 hover:text-green-700"
											}`}
										>
											{link.name}
											<svg
												className={`ml-1 w-4 h-4 transition-transform duration-200 ${
													dropdown === link.name ? "rotate-180" : "rotate-0"
												}`}
												fill="none"
												stroke="currentColor"
												strokeWidth={2}
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M19 9l-7 7-7-7"
												/>
											</svg>
										</button>
										{isClient && dropdown === link.name && (
											<div
												className="absolute left-0 top-full w-56 border border-gray-200 rounded shadow-lg z-50 backdrop-blur-lg bg-white/90"
												onMouseEnter={() => handleDropdownEnter(link.name)}
												onMouseLeave={handleDropdownLeave}
											>
												{link.dropdown.map((item) => (
													<Link
														key={item.name}
														href={item.href}
														className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100"
													>
														{item.icon && <span>{item.icon}</span>}
														{item.name}
													</Link>
												))}
											</div>
										)}
									</div>
								) : (
									<Link
										key={link.name}
										href={link.href}
										className="text-gray-900 hover:text-green-700 px-3 py-1 rounded font-medium transition"
									>
										{link.name}
									</Link>
								)
							)}
						</div>
					</div>

					{/* Kanan: Kosong/hamburger */}
					<div className="flex items-center min-w-[48px] justify-end">
						<div className="md:hidden flex items-center">
							<button
								onClick={() => setOpen(!open)}
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none"
							>
								<svg
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									{open ? (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									) : (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									)}
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* Mobile menu */}
			{open && (
				<div className="md:hidden bg-white/90 border-t border-gray-200 px-4 pb-4">
					{navLinks.map((link) =>
						link.dropdown ? (
							<div key={link.name}>
								<button
									onClick={() =>
										setDropdown(
											dropdown === link.name ? null : link.name
										)
									}
									className="flex items-center w-full px-2 py-2 text-left text-gray-800 hover:text-green-700"
								>
									{link.name}
									<svg
										className="ml-1 w-4 h-4"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
								{dropdown === link.name && (
									<div className="pl-4">
										{link.dropdown.map((item) => (
											<Link
												key={item.name}
												href={item.href}
												className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100"
											>
												{item.icon && <span>{item.icon}</span>}
												{item.name}
											</Link>
										))}
									</div>
								)}
							</div>
						) : (
							<Link
								key={link.name}
								href={link.href}
								className="block text-gray-800 hover:text-green-700 py-2"
							>
								{link.name}
							</Link>
						)
					)}
				</div>
			)}
		</nav>
	);
}
