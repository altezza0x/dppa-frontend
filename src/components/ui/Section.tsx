import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  animate = true 
}) => {
  if (animate) {
    return (
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className={className}
      >
        {children}
      </motion.section>
    );
  }

  return <section className={className}>{children}</section>;
};

export default Section;
