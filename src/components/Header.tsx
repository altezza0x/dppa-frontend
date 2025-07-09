'use client'; // Diperlukan karena kita menggunakan state untuk menu mobile

import React, { useState } from 'react';
import Link from 'next/link'; // Gunakan Link dari Next.js untuk navigasi
import { 
  Home, FileText, Newspaper, GalleryHorizontal, Megaphone, Shield, 
  Calendar, Info, Download, MessageSquare, ChevronDown, Menu, X 
} from 'lucide-react';

// Sub-komponen untuk link navigasi agar lebih rapi
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ComponentType<{ size?: number }>;
  hasDropdown?: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ href, children, icon: Icon, hasDropdown = false }) => (
  <Link href={href} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium px-3 py-2 rounded-md text-sm">
    {Icon && <Icon size={18} />}
    <span>{children}</span>
    {hasDropdown && <ChevronDown size={16} className="opacity-50" />}
  </Link>
);

// Komponen utama Header
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* --- Top Bar --- */}
      <div className="bg-slate-800 text-white text-xs py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Website DP3AP2KB Sumatera Barat</span>
          <a href="mailto:dp3ap2kb@sumbarprov.go.id" className="hidden md:flex items-center gap-2 hover:text-blue-300">
            <span>dp3ap2kb@sumbarprov.go.id</span>
          </a>
        </div>
      </div>

      {/* --- Main Header & Navigation --- */}
      <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
               <svg height="40" viewBox="0 0 269 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H268.336V67.084H0V0Z" fill="#00923F"/>
                <path d="M20.1252 23.479C20.1252 23.479 23.479 20.1252 26.8328 20.1252C30.1866 20.1252 33.5404 23.479 33.5404 23.479L26.8328 36.8942L20.1252 23.479Z" fill="#FFB200"/>
                <path d="M20.1252 43.605C20.1252 43.605 23.479 46.9588 26.8328 46.9588C30.1866 46.9588 33.5404 43.605 33.5404 43.605L26.8328 30.1866L20.1252 43.605Z" fill="#FFB200"/>
                <path d="M43.605 23.479C43.605 23.479 40.2512 20.1252 36.8974 20.1252C33.5436 20.1252 30.1898 23.479 30.1898 23.479L36.8974 36.8942L43.605 23.479Z" fill="#FFB200"/>
                <path d="M43.605 43.605C43.605 43.605 40.2512 46.9588 36.8974 46.9588C33.5436 46.9588 30.1898 43.605 30.1898 43.605L36.8974 30.1866L43.605 43.605Z" fill="#FFB200"/>
                <text fill="white" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Arial" fontSize="20" fontWeight="bold" letterSpacing="0em"><tspan x="75.1328" y="32.0293">DP3AP2KB</tspan></text>
                <text fill="white" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Arial" fontSize="12" letterSpacing="0em"><tspan x="75.1328" y="48.7373">SUMATERA BARAT</tspan></text>
                </svg>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavLink href="/" icon={Home}>Beranda</NavLink>
              <NavLink href="/profil" icon={FileText} hasDropdown>Profil</NavLink>
              <NavLink href="/berita" icon={Newspaper}>Berita</NavLink>
              <NavLink href="/galeri" icon={GalleryHorizontal}>Galeri</NavLink>
              <NavLink href="/pengumuman" icon={Megaphone}>Pengumuman</NavLink>
              <NavLink href="/ppid" icon={Shield}>PPID</NavLink>
              <NavLink href="/agenda" icon={Calendar}>Agenda</NavLink>
              <NavLink href="/informasi-layanan" icon={Info} hasDropdown>Informasi Layanan</NavLink>
              <NavLink href="/download" icon={Download}>Download</NavLink>
              <NavLink href="/lapor" icon={MessageSquare}>Lapor</NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 absolute w-full shadow-lg">
            <nav className="flex flex-col p-4 gap-2">
              <NavLink href="/" icon={Home}>Beranda</NavLink>
              <NavLink href="/profil" icon={FileText} hasDropdown>Profil</NavLink>
              <NavLink href="/berita" icon={Newspaper}>Berita</NavLink>
              <NavLink href="/galeri" icon={GalleryHorizontal}>Galeri</NavLink>
              <NavLink href="/pengumuman" icon={Megaphone}>Pengumuman</NavLink>
              <NavLink href="/ppid" icon={Shield}>PPID</NavLink>
              <NavLink href="/agenda" icon={Calendar}>Agenda</NavLink>
              <NavLink href="/informasi-layanan" icon={Info} hasDropdown>Informasi Layanan</NavLink>
              <NavLink href="/download" icon={Download}>Download</NavLink>
              <NavLink href="/lapor" icon={MessageSquare}>Lapor</NavLink>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
