"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mail,
  MapPin, 
  Globe2, 
  ArrowUpRight, 
  FileText, 
  Calendar, 
  Info, 
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone
} from "lucide-react";

type QuickLink = {
  name: string;
  href: string;
  icon: React.ElementType;
  external?: boolean;
};

const layananLinks: QuickLink[] = [
  { name: "Situs Resmi Sumbar", href: "https://sumbarprov.go.id/", icon: Globe2, external: true },
  { name: "Aplikasi siMAYA", href: "https://simaya.sumbarprov.go.id/", icon: Globe2, external: true },
  { name: "SIGA", href: "https://siga.sumbarprov.go.id/", icon: Globe2, external: true },
  { name: "SIPPAK", href: "https://sippak.sumbarprov.go.id/", icon: Globe2, external: true },
];

const quickLinks: QuickLink[] = [
  { name: "Layanan Digital", href: "/layanan", icon: FileText },
  { name: "E-Perizinan", href: "/layanan/perizinan", icon: FileText },
  { name: "Agenda Kegiatan", href: "/agenda", icon: Calendar },
  { name: "Bantuan KB", href: "/layanan/kb", icon: Info },
  { name: "Perlindungan", href: "/layanan/perlindungan", icon: Info },
  { name: "Lapor", href: "https://www.lapor.go.id", icon: MessageSquare, external: true },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com/", icon: Instagram },
  { name: "Twitter", href: "https://twitter.com/", icon: Twitter },
  { name: "Youtube", href: "https://youtube.com/", icon: Youtube },
];

const Footer = () => {
  return (
    <footer className="relative bg-emerald-800 text-white pt-10 pb-4 px-4 md:px-0 mt-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="px-2"
        >
          <div className="flex flex-col md:flex-row gap-8">
              {/* Info Dinas & Media Sosial */}
              <div className="flex-1 flex flex-col gap-6">
                {/* Info Dinas & Kontak */}
                <div>
                  <h2 className="text-lg md:text-xl font-bold mb-2 text-white tracking-wide">DP3AP2KB Sumatera Barat</h2>
                  <p className="text-sm text-white/90 mb-4 leading-relaxed">
                    Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana Provinsi Sumatera Barat
                  </p>
                  <div className="flex flex-col gap-3 text-white/90 text-sm">
                    <span className="flex items-center gap-2"><Phone size={16} className="text-emerald-300"/> 0751-123456</span>
                    <span className="flex items-center gap-2"><Mail size={16} className="text-emerald-300"/> dp3ap2kb@sumbarprov.go.id</span>
                    <span className="flex items-center gap-2"><MapPin size={16} className="text-emerald-300"/> Jl. Khatib Sulaiman No.1, Padang</span>
                  </div>
                </div>
                {/* Media Sosial */}
                <div>
                  <h3 className="text-base font-semibold mb-3 text-white">Media Sosial</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a 
                        key={social.name}
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-emerald-600 transition-colors"
                        aria-label={social.name}
                      >
                        <social.icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Tautan Cepat */}
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold mb-3 text-white tracking-wide">Tautan Cepat</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a 
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-white/90 hover:text-white text-sm group hover:bg-emerald-700/30 rounded w-fit px-2 py-1"
                        >
                          <link.icon size={16} className="text-emerald-300 group-hover:text-white" />
                          <span className="mx-2">{link.name}</span>
                          <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100" />
                        </a>
                      ) : (
                        <Link 
                          href={link.href}
                          className="flex items-center text-white/90 hover:text-white text-sm group hover:bg-emerald-700/30 rounded w-fit px-2 py-1"
                        >
                          <link.icon size={16} className="text-emerald-300 group-hover:text-white" />
                          <span className="mx-2">{link.name}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Layanan Terkait */}
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold mb-3 text-white tracking-wide">Layanan Terkait</h3>
                <ul className="flex flex-col gap-2">
                  {layananLinks.map((layanan) => (
                    <li key={layanan.href}>
                      <a
                        href={layanan.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white/90 hover:text-white text-sm group hover:bg-emerald-700/30 rounded w-fit px-2 py-1"
                      >
                        <layanan.icon size={16} className="text-emerald-300 group-hover:text-white" />
                        <span className="mx-2">{layanan.name}</span>
                        <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-emerald-100/90 text-xs pt-5"
        >
          &copy; {new Date().getFullYear()} DP3AP2KB Sumatera Barat. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;