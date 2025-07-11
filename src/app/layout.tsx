import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import komponen Navbar yang sudah dibuat
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

// Konfigurasi font Inter untuk digunakan di seluruh website
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter" // Membuat CSS variable untuk font
});

// Metadata default untuk SEO (Search Engine Optimization)
export const metadata: Metadata = {
  title: {
    default: "DPPPA Sumbar", // Judul default untuk halaman
    template: "%s | DP3AP2KB Sumbar", // Judul akan menjadi "Nama Halaman | DP3AP2KB Sumbar"
  },
  description: "Website Resmi Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana (DP3AP2KB) Provinsi Sumatera Barat.",
  icons: {
    icon: "/favicon.png", // Pastikan favicon.png ada di /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} font-sans antialiased text-gray-900`}>
        {/* Komponen Navbar responsif */}
        <Navbar />
        
        {/* Konten utama dari setiap halaman (page.tsx) akan dirender di sini */}
        <main>
          {children}
        </main>

        {/* Komponen Footer modern */}
        <Footer />
      </body>
    </html>
  );
}
