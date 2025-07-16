"use client";
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import LayananPopulerSection from '@/components/sections/LayananPopulerSection';
import AgendaLayananSection from '@/components/sections/AgendaLayananSection';
import BeritaSection from '@/components/sections/BeritaSection';
import KontakSection from '@/components/sections/KontakSection';
import StatistikSection from '@/components/sections/StatistikSection';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <LayananPopulerSection />
      <AgendaLayananSection />
      <BeritaSection />
      <KontakSection />
      <StatistikSection />
      <ScrollToTop />
    </main>
  );
}
