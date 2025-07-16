import { useState, useEffect, useCallback } from 'react';

interface UseScrollToTopReturn {
  showButton: boolean;
  scrollToTop: () => void;
}

export const useScrollToTop = (threshold: number = 200): UseScrollToTopReturn => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { showButton, scrollToTop };
};
