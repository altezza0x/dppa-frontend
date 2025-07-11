"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe2, ArrowUpRight } from "lucide-react";

const layananLinks = [
  { name: "Situs Resmi Sumbar", href: "https://sumbarprov.go.id/", icon: Globe2 },
  { name: "Aplikasi siMAYA", href: "https://simaya.sumbarprov.go.id/", icon: Globe2 },
  { name: "SIGA", href: "https://siga.sumbarprov.go.id/", icon: Globe2 },
  { name: "SIPPAK", href: "https://sippak.sumbarprov.go.id/", icon: Globe2 },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-green-700 to-green-800 text-white pt-10 pb-4 px-4 md:px-0 mt-12 overflow-hidden">
      {/* Animasi background blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-green-400 rounded-full blur-3xl z-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.10, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 rounded-full blur-3xl z-0"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-16 px-2"
      >
        {/* Info Dinas & Kontak */}
        <div className="flex-1 min-w-[220px]">
          <h2 className="text-lg md:text-xl font-bold mb-2 text-white tracking-wide">DP3AP2KB Sumatera Barat</h2>
          <p className="text-sm text-white mb-4 max-w-xs leading-relaxed">
            Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana Provinsi Sumatera Barat
          </p>
          <div className="flex flex-col gap-1 text-white text-sm">
            <span className="flex items-center gap-2"><Phone size={16}/> 0751-123456</span>
            <span className="flex items-center gap-2"><Mail size={16}/> dp3ap2kb@sumbarprov.go.id</span>
            <span className="flex items-center gap-2"><MapPin size={16}/> Jl. Khatib Sulaiman No.1, Padang</span>
          </div>
        </div>
        {/* Link Layanan Penting */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-base md:text-lg font-semibold mb-3 text-green-100 tracking-wide">Layanan Terkait</h3>
          <ul className="flex flex-col gap-2">
            {layananLinks.map((layanan) => (
              <li key={layanan.href}>
                <a
                  href={layanan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-green-700/30 transition-colors text-white hover:text-green-100 font-medium group"
                >
                  <layanan.icon size={18} className="text-green-100 group-hover:text-white" />
                  <span>{layanan.name}</span>
                  <ArrowUpRight size={14} className="ml-auto opacity-60 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 text-center text-green-100 text-xs mt-10"
      >
        &copy; {new Date().getFullYear()} DP3AP2KB Sumatera Barat. All rights reserved. <span className="font-semibold">Support by Universitas Metamedia</span>
      </motion.div>
    </footer>
  );
}
