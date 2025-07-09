"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const handleScroll = () => {
      const rect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight - 40) {
        footer.classList.add("animate-footer-fadein");
      } else {
        footer.classList.remove("animate-footer-fadein");
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Trigger on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#31457a] pt-8 pb-0 border-t border-[#22306a] text-sm opacity-0 translate-y-8 overflow-x-hidden"
      style={{ transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)" }}
    >
      <div className="w-full flex flex-col items-center">
        <div className="max-w-7xl w-full px-4 animate-footer-fadein-item pb-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">
            {/* Kontak */}
            <div className="flex flex-col justify-center h-full bg-transparent rounded-xl p-0 md:p-2">
              <div className="font- text-white">Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana Provinsi Sumatera Barat</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 mt-2 tracking-wide text-center md:text-left">KONTAK</h3>
              <div className="text-white leading-relaxed space-y-2 text-center md:text-left">
                <div>Phone : (0751) 7053781</div>
                <div>Fax : (0751) 7053781</div>
                <div>Email : <a href="mailto:dp3ap2kb@sumbarprov.go.id" className="text-red-400 hover:underline">dp3ap2kb@sumbarprov.go.id</a></div>
                <div>Alamat : <a href="https://maps.app.goo.gl/2Qw6Qw2Qw6Qw2Qw6A" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">Jalan Rasuna Said Nomor 74 Padang</a></div>
              </div>
            </div>
            {/* Situs Resmi Sumbar */}
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-xl font-bold text-white mb-3 text-center">SITUS RESMI SUMBAR</span>
              <div className="relative w-full flex flex-col items-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-3">
                  <svg width="24" height="12" viewBox="0 0 24 12"><polygon points="12,12 0,0 24,0" fill="#4a647a" /></svg>
                </div>
                <a href="https://sumbarprov.go.id" target="_blank" rel="noopener noreferrer" className="w-full bg-[#4a647a] rounded-lg px-4 py-5 flex items-center gap-3 shadow-md min-h-[100px] justify-center">
                  <img src="/images/file.svg" alt="Logo Sumbar" className="h-8 w-8" />
                  <div>
                    <div className="text-lg font-semibold text-white">Situs Resmi</div>
                    <div className="text-xs text-gray-200">Provinsi Sumatera Barat</div>
                  </div>
                </a>
              </div>
            </div>
            {/* SIMAYA */}
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-xl font-bold text-white mb-3 text-center">SIMAYA</span>
              <div className="relative w-full flex flex-col items-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-3">
                  <svg width="24" height="12" viewBox="0 0 24 12"><polygon points="12,12 0,0 24,0" fill="#3498db" /></svg>
                </div>
                <a href="https://simaya.sumbarprov.go.id" target="_blank" rel="noopener noreferrer" className="w-full bg-[#3498db] rounded-lg px-4 py-5 flex items-center gap-3 shadow-md min-h-[100px] justify-center">
                  <img src="/images/globe.svg" alt="SIMAYA" className="h-8 w-8" />
                  <div>
                    <div className="text-lg font-semibold text-white">Aplikasi siMAYA</div>
                    <div className="text-xs text-gray-200">Provinsi Sumatera Barat</div>
                  </div>
                </a>
              </div>
            </div>
            {/* SIGA */}
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-xl font-bold text-white mb-3 text-center">SIGA</span>
              <div className="relative w-full flex flex-col items-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-3">
                  <svg width="24" height="12" viewBox="0 0 24 12"><polygon points="12,12 0,0 24,0" fill="#3b82f6" /></svg>
                </div>
                <a href="https://siga.sumbarprov.go.id" target="_blank" rel="noopener noreferrer" className="w-full bg-[#3b82f6] rounded-lg px-4 py-5 flex items-center gap-3 shadow-md min-h-[100px] justify-center">
                  <img src="/images/next.svg" alt="SIGA" className="h-8 w-8" />
                  <div>
                    <div className="text-sm font-semibold text-white">Sistem Informasi Gender dan Anak</div>
                    <div className="text-xs text-gray-200">Provinsi Sumatera Barat</div>
                  </div>
                </a>
              </div>
            </div>
            {/* SIPPAK */}
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-xl font-bold text-white mb-3 text-center">SIPPAK</span>
              <div className="relative w-full flex flex-col items-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-3">
                  <svg width="24" height="12" viewBox="0 0 24 12"><polygon points="12,12 0,0 24,0" fill="#a259c6" /></svg>
                </div>
                <a href="https://sippak.sumbarprov.go.id" target="_blank" rel="noopener noreferrer" className="w-full bg-[#a259c6] rounded-lg px-4 py-5 flex items-center gap-3 shadow-md min-h-[100px] justify-center">
                  <img src="/images/vercel.svg" alt="SIPPAK" className="h-8 w-8" />
                  <div>
                    <div className="text-xs font-semibold text-white">SISTEM INFORMASI PERLINDUNGAN PEREMPUAN DAN ANAK KORBAN KEKERASAN</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Layer */}
      <div className="w-full bg-[#253366] py-3 mt-0">
        <div className="max-w-7xl w-full px-4 mx-auto text-center text-xs text-blue-100 tracking-wide animate-footer-fadein-item">
          © 2014-{new Date().getFullYear()} Copyright <span className="font-semibold">Support by Universitas Metamedia</span><br />
        </div>
      </div>
    </footer>
  );
}
