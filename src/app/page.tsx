"use client";
import React from 'react';
import NewHeroSection from '@/components/sections/NewHeroSection';
import LayananUnggulanSection from '@/components/sections/LayananUnggulanSection';
import AgendaBeritaSection from '@/components/sections/AgendaBeritaSection';
import StatistikInfoSection from '@/components/sections/StatistikInfoSection';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function HomePage() {
  return (
    <main>
      <NewHeroSection />
      <LayananUnggulanSection />
      <AgendaBeritaSection />
      <StatistikInfoSection />
      <ScrollToTop />
    </main>
  );
}
