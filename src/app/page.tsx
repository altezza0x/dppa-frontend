"use client";
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import LayananUnggulanSection from '@/components/sections/LayananUnggulanSection';
import AgendaBeritaSection from '@/components/sections/AgendaBeritaSection';
import StatistikInfoSection from '@/components/sections/StatistikInfoSection';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <LayananUnggulanSection />
      <AgendaBeritaSection />
      <StatistikInfoSection />
      <ScrollToTop />
    </main>
  );
}
