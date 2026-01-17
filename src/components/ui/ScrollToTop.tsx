"use client";
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollToTop } from '@/hooks/useScrollToTop';

interface ScrollToTopProps {
  showThreshold?: number;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ showThreshold = 200 }) => {
  const { showButton, scrollToTop } = useScrollToTop(showThreshold);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.7, y: 40 }}
      animate={showButton ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 40 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className="fixed bottom-8 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg w-11 h-11 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-400"
      style={{ pointerEvents: showButton ? 'auto' : 'none' }}
    >
      <ArrowUp size={22} />
    </motion.button>
  );
};

export default ScrollToTop;
