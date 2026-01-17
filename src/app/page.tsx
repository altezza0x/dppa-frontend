import React from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import { SectionSkeleton } from '@/components/lazy';

const LayananUnggulanSection = dynamic(() => import('@/components/sections/LayananUnggulanSection'), {
  loading: () => <SectionSkeleton />,
});

const AgendaBeritaSection = dynamic(() => import('@/components/sections/AgendaBeritaSection'), {
  loading: () => <SectionSkeleton />,
});

const StatistikInfoSection = dynamic(() => import('@/components/sections/StatistikInfoSection'), {
  loading: () => <SectionSkeleton />,
});

const ScrollToTop = dynamic(() => import('@/components/ui/ScrollToTop'));

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
