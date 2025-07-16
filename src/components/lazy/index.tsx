import { lazy } from 'react';

// Lazy-loaded components for better code splitting
export const LazyHeroSection = lazy(() => import('@/components/sections/HeroSection'));
export const LazyLayananPopulerSection = lazy(() => import('@/components/sections/LayananPopulerSection'));
export const LazyAgendaLayananSection = lazy(() => import('@/components/sections/AgendaLayananSection'));
export const LazyBeritaSection = lazy(() => import('@/components/sections/BeritaSection'));
export const LazyKontakSection = lazy(() => import('@/components/sections/KontakSection'));
export const LazyStatistikSection = lazy(() => import('@/components/sections/StatistikSection'));

// Error boundary component for lazy-loaded sections
export const SectionErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-[200px] flex items-center justify-center">
      {children}
    </div>
  );
};

// Loading fallback component
export const SectionSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-200 h-8 w-1/3 rounded mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-200 h-48 rounded-xl"></div>
          ))}
        </div>
      </div>
    </div>
  );
};
