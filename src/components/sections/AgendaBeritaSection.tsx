"use client";

import React from 'react';
import AgendaSection from './AgendaSection';
import BeritaSection from './BeritaSection';

const AgendaBeritaSection: React.FC = () => {
  return (
    <>
      <AgendaSection />
      <BeritaSection />
    </>
  );
};

export default AgendaBeritaSection;
