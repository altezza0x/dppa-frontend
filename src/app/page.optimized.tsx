"use client";
import React, { Suspense } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import LayananPopulerSection from '@/components/sections/LayananPopulerSection';
import AgendaLayananSection from '@/components/sections/AgendaLayananSection';
import BeritaSection from '@/components/sections/BeritaSection';
import KontakSection from '@/components/sections/KontakSection';
import StatistikSection from '@/components/sections/StatistikSection';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { SectionSkeleton } from '@/components/lazy';

interface HomePageOptimizedProps {
  useLazyLoading?: boolean;
}

// Alternative version with lazy loading for even better performance
export const HomePageOptimized: React.FC<HomePageOptimizedProps> = ({ 
  useLazyLoading = false 
}) => {
  if (useLazyLoading) {
    // Dynamic imports for lazy loading
    const LazyLayananSection = React.lazy(() => import('@/components/sections/LayananPopulerSection'));
    const LazyAgendaSection = React.lazy(() => import('@/components/sections/AgendaLayananSection'));
    const LazyBeritaSection = React.lazy(() => import('@/components/sections/BeritaSection'));
    const LazyKontakSection = React.lazy(() => import('@/components/sections/KontakSection'));
    const LazyStatistikSection = React.lazy(() => import('@/components/sections/StatistikSection'));

    return (
      <main>
        {/* Hero section loads immediately */}
        <HeroSection />
        
        {/* Other sections load lazily */}
        <Suspense fallback={<SectionSkeleton />}>
          <LazyLayananSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <LazyAgendaSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <LazyBeritaSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <LazyKontakSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <LazyStatistikSection />
        </Suspense>
        
        <ScrollToTop />
      </main>
    );
  }

  // Standard version without lazy loading
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
};

// Standard homepage component (current implementation)
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
