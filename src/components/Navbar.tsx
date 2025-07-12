"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { createPortal } from "react-dom";

interface NavLinkItem {
	name: string;
	href: string;
	icon?: string;
}

interface NavLinkWithDropdown extends NavLinkItem {
	dropdown?: NavLinkItem[];
}

const navLinks: NavLinkWithDropdown[] = [
	{ name: "Beranda", href: "/" },
	{
		name: "Profil",
		href: "/profil",
		dropdown: [
			{ name: "Visi dan Misi", href: "/profil/visi-misi" },
			{ name: "Tugas dan Fungsi", href: "/profil/tugas-fungsi" },
			{ name: "Struktur Organisasi", href: "/profil/struktur" },
			{ name: "Sejarah Singkat", href: "/profil/sejarah" },
			{ name: "Kepala Dinas", href: "/profil/kepala-dinas" },
			{ name: "Hubungi Kami", href: "/profil/hubungi" },
		],
	},
	{ name: "Berita", href: "/berita" },
	{
		name: "Galeri",
		href: "/galeri",
		dropdown: [
			{ name: "Foto", href: "/galeri/foto" },
			{ name: "Kegiatan", href: "/galeri/kegiatan" },
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
	{
		name: "Unduh & Lapor",
		href: "#",
		dropdown: [
			{ name: "Unduh", href: "/download", icon: "download" },
			{ name: "Lapor", href: "https://www.lapor.go.id/", icon: "external" },
		],
	},
];

const dropdownVariants = {
	hidden: { opacity: 0, y: 8 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.18 } },
};

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [dropdown, setDropdown] = useState<string | null>(null);
	const [isClient, setIsClient] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
	const pathname = usePathname();
	const [indicatorProps, setIndicatorProps] = useState<{ left: number; width: number } | null>(null);
	const menuRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 8);
		};
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		// Find the active menu item and set indicator position/width
		if (!isClient) return;
		const idx = navLinks.findIndex(link => isActive(link.href));
		if (idx !== -1 && menuRefs.current[idx]) {
			const el = menuRefs.current[idx];
			const rect = el!.getBoundingClientRect();
			const parentRect = el!.parentElement!.getBoundingClientRect();
			setIndicatorProps({ left: rect.left - parentRect.left, width: rect.width });
		} else {
			setIndicatorProps(null);
		}
		// Recalculate on window resize
		const handleResize = () => {
			const idx = navLinks.findIndex(link => isActive(link.href));
			if (idx !== -1 && menuRefs.current[idx]) {
				const el = menuRefs.current[idx];
				const rect = el!.getBoundingClientRect();
				const parentRect = el!.parentElement!.getBoundingClientRect();
				setIndicatorProps({ left: rect.left - parentRect.left, width: rect.width });
			} else {
				setIndicatorProps(null);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [pathname, isClient]);

	useEffect(() => { setMounted(true); }, []);

	const handleDropdownEnter = (name: string) => {
		if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
		setDropdown(name);
	};

	const handleDropdownLeave = () => {
		dropdownTimeout.current = setTimeout(() => setDropdown(null), 120);
	};

	const isActive = (href: string) => {
		if (href === "/") return pathname === "/";
		return pathname.startsWith(href) && href !== "/";
	};

	return (
		<>
			<nav className={`sticky top-0 z-50 border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-white/80 shadow' : 'bg-white'}`}>
				<div className="max-w-7xl mx-auto px-4 h-[68px] flex flex-row items-center">
					{/* Logo + Judul */}
					<Link href="/" className="flex flex-row items-center min-w-[180px] max-w-[260px]">
						<Image
							src="/images/logo.png"
							alt="Logo"
							width={40}
							height={40}
							quality={100}
							priority
							style={{ objectFit: 'contain', display: 'block' }}
						/>
						<div className="flex flex-col justify-center text-center leading-tight w-36 -ml-3">
							<span className="text-green-700 text-lg tracking-wide block w-full text-center font-semibold leading-none">
								DP3AP2KB
							</span>
							<span className="text-gray-600 text-xs font-medium block w-full text-center leading-none">
								Sumatera Barat
							</span>
						</div>
					</Link>
					{/* Spacer untuk dorong hamburger ke kanan */}
					<div className="flex-1" />
					{/* Menu utama */}
					<div className="hidden md:flex items-center gap-4 justify-center flex-grow relative">
						{/* Animated indicator */}
						{indicatorProps && (
							<motion.div
								initial={false}
								animate={{
									left: indicatorProps.left,
									width: indicatorProps.width
								}}
								transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
								className="absolute bottom-0 h-[2.5px] rounded-full bg-green-600/80 shadow-sm z-0"
								style={{
									left: indicatorProps.left,
									width: indicatorProps.width,
									pointerEvents: 'none',
									boxShadow: '0 1px 6px 0 rgba(34,197,94,0.08)',
								}}
							/>
						)}
						{navLinks.map((link, i) =>
							link.dropdown ? (
								<div
									key={link.name}
									className="relative group z-10"
									onMouseEnter={() => handleDropdownEnter(link.name)}
									onMouseLeave={handleDropdownLeave}
									ref={el => { menuRefs.current[i] = el; }}
								>
									<button
										className={`flex items-center px-1 py-2 rounded transition relative whitespace-nowrap font-normal text-[16px]
											${dropdown === link.name ? "text-green-700" : "text-gray-900 hover:text-green-700"}
											${isActive(link.href) ? "text-green-700" : ""}
										`}
									>
										{link.name}
										<svg
											className={`ml-1 w-4 h-4 transition-transform duration-200 ${dropdown === link.name ? "rotate-180" : "rotate-0"}`}
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											viewBox="0 0 24 24"
										>
											<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
										</svg>
									</button>
									<AnimatePresence>
										{isClient && dropdown === link.name && (
											<motion.div
												initial="hidden"
												animate="visible"
												exit="hidden"
												variants={dropdownVariants}
												className="absolute left-0 top-full w-52 border border-gray-100 rounded shadow-lg z-50 bg-white py-2 mt-2 overflow-hidden"
												onMouseEnter={() => handleDropdownEnter(link.name)}
												onMouseLeave={handleDropdownLeave}
											>
												{link.dropdown.map((item) => (
													item.name === "Lapor" ? (
														<a
															key={item.name}
															href={item.href}
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center gap-2 px-5 py-2 text-gray-800 hover:bg-green-50 text-[15px] font-normal transition"
														>
															{item.icon && (
																<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
															)}
															{item.name}
														</a>
													) : (
														<Link
															key={item.name}
															href={item.href}
															className="flex items-center gap-2 px-5 py-2 text-gray-800 hover:bg-green-50 text-[15px] font-normal transition"
														>
															{item.icon === "download" && (
																<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" /></svg>
															)}
															{item.name}
														</Link>
													)
												))}
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							) : (
								<div
									key={link.name}
									className="relative z-10"
									ref={el => { menuRefs.current[i] = el; }}
								>
									<Link
										href={link.href}
										className={`px-1 py-2 rounded transition relative whitespace-nowrap font-normal text-[16px] ${isActive(link.href) ? "text-green-700" : "text-gray-900 hover:text-green-700"}`}
									>
										{link.name}
									</Link>
								</div>
							)
						)}
					</div>
					{/* Spacer kanan agar menu benar-benar center */}
					<div className="hidden md:block min-w-[180px] max-w-[260px]" />
					{/* Hamburger */}
					<div className="flex items-center md:hidden ml-auto">
						<button
							onClick={() => setOpen(!open)}
							className="inline-flex items-center justify-center p-1 focus:outline-none focus:ring-2 focus:ring-green-700"
						>
							<svg
								className="h-8 w-8 text-gray-900"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								{open ? (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>
			</nav>
			{/* Mobile menu rendered outside nav, using portal if mounted */}
			{mounted && open && createPortal(
				<AnimatePresence>
					<motion.div
						initial={{ x: "100%", opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: "100%", opacity: 0 }}
						transition={{ type: "tween", ease: "easeInOut", duration: 0.22 }}
						className="md:hidden fixed inset-0 z-[9999] flex justify-end"
					>
						{/* Overlay semi-transparan, klik untuk menutup */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.18 }}
							className="absolute inset-0 bg-black/40 z-0 transition-all duration-200"
							onClick={() => setOpen(false)}
						/>
						<motion.div
							initial={{ x: 64, opacity: 0.7 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: 64, opacity: 0 }}
							transition={{ type: 'tween', ease: 'easeInOut', duration: 0.22 }}
							className="relative w-80 h-full shadow-xl flex flex-col bg-white rounded-l-2xl z-10 overflow-y-auto max-h-screen"
							style={{ backgroundColor: '#fff', willChange: 'transform' }}
						>
							{/* Close button */}
							<button
								onClick={() => setOpen(false)}
								className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow focus:outline-none"
								aria-label="Tutup menu"
							>
								<svg className="h-7 w-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
							{/* Judul menu */}
							<div className="flex flex-col items-start px-6 pt-8 pb-2 mb-2 border-b border-gray-100">
								<span className="text-green-700 text-lg font-bold tracking-wide leading-tight">DP3AP2KB</span>
								<span className="text-gray-600 text-xs font-medium mt-0.5">Sumatera Barat</span>
							</div>
							{/* Daftar menu */}
							<nav className="flex-1 flex flex-col gap-1 px-2 pb-6">
								{navLinks.map((link) =>
									link.dropdown ? (
										<div key={link.name} className="">
											<button
												onClick={() => setDropdown(dropdown === link.name ? null : link.name)}
												className={`w-full flex items-center justify-between px-4 py-2 rounded-lg font-semibold text-[16px] text-left transition-colors ${dropdown === link.name ? 'bg-green-50 text-green-700' : 'text-gray-900 hover:bg-green-50 hover:text-green-700'}`}
												style={{ transition: 'background 0.18s, color 0.18s' }}
											>
												<span>{link.name}</span>
												<motion.svg
													className="ml-2 w-4 h-4"
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													viewBox="0 0 24 24"
													animate={{ rotate: dropdown === link.name ? 180 : 0 }}
													transition={{ type: 'spring', stiffness: 400, damping: 30 }}
												>
													<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
												</motion.svg>
											</button>
											<AnimatePresence>
												{dropdown === link.name && (
													<motion.div
														initial={{ opacity: 0, y: 10 }}
														animate={{ opacity: 1, y: 0 }}
														exit={{ opacity: 0, y: 10 }}
														transition={{ type: 'spring', stiffness: 320, damping: 32, duration: 0.22 }}
														className="pl-2"
													>
														{link.dropdown.map((item) => (
															item.name === "Lapor" ? (
																<a
																	key={item.name}
																	href={item.href}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="flex items-center gap-2 px-6 py-2 text-gray-800 hover:bg-green-100 text-[15px] font-normal rounded transition-colors duration-150"
																>
																	{item.icon && (
																		<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
																	)}
																	{item.name}
																</a>
															) : (
																<Link
																	key={item.name}
																	href={item.href}
																	className="flex items-center gap-2 px-6 py-2 text-gray-800 hover:bg-green-100 text-[15px] font-normal rounded transition-colors duration-150"
																	onClick={() => setOpen(false)}
																>
																	{item.icon === "download" && (
																		<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" /></svg>
																	)}
																	{item.name}
																</Link>
															)
														))}
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									) : (
										<Link
											key={link.name}
											href={link.href}
											className={`block px-4 py-2 rounded-lg font-semibold text-[16px] transition-colors ${dropdown === link.name ? 'bg-green-50 text-green-700' : 'text-gray-900 hover:bg-green-50 hover:text-green-700'}`}
											style={{ paddingLeft: 16, transition: 'background 0.18s, color 0.18s' }}
											onClick={() => setOpen(false)}
										>
											{link.name}
										</Link>
									)
								)}
							</nav>
						</motion.div>
					</motion.div>
				</AnimatePresence>, document.body
			)}
		</>
	);
}
