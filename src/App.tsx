/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { SolutionsSection } from './components/SolutionsSection.tsx';
import { TechnologySection } from './components/TechnologySection.tsx';
import { CompanySection } from './components/CompanySection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { SearchModal } from './components/SearchModal.tsx';
import { SSOTModal } from './components/SSOTModal.tsx';
import { ClinicalCollabModal } from './components/ClinicalCollabModal.tsx';
import { ResearchModal } from './components/ResearchModal.tsx';
import { ArchiveModal } from './components/ArchiveModal.tsx';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [ssotOpen, setSsotOpen] = useState(false);
  const [clinicalCollabOpen, setClinicalCollabOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);

  // Global keyboard shortcut for search (Cmd+K / Ctrl+K / slash)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDiagramNode = (nodeKey: string) => {
    if (nodeKey === 'reasoning' || nodeKey === 'memory') {
      scrollToSection('technology');
    } else if (nodeKey === 'applications') {
      scrollToSection('solutions');
    } else if (nodeKey === 'core') {
      scrollToSection('about');
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfa] text-[#171717] font-sans antialiased selection:bg-red-600 selection:text-white flex flex-col justify-between">
      {/* Top Navigation Bar */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreSSOT={() => setSsotOpen(true)}
          onScrollToSolutions={() => scrollToSection('solutions')}
          onSelectNode={handleSelectDiagramNode}
        />

        {/* 01 / SOLUTIONS */}
        <SolutionsSection
          onOpenSSOT={() => setSsotOpen(true)}
          onOpenClinicalCollab={() => setClinicalCollabOpen(true)}
        />

        {/* 02 / TECHNOLOGY */}
        <TechnologySection
          onExploreResearch={() => setResearchOpen(true)}
        />

        {/* 03 / OUR COMPANY */}
        <CompanySection
          onOpenArchive={() => setArchiveOpen(true)}
        />

        {/* 04 / GET IN TOUCH */}
        <ContactSection
          onOpenSSOT={() => setSsotOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={scrollToSection}
      />

      <SSOTModal
        isOpen={ssotOpen}
        onClose={() => setSsotOpen(false)}
      />

      <ClinicalCollabModal
        isOpen={clinicalCollabOpen}
        onClose={() => setClinicalCollabOpen(false)}
      />

      <ResearchModal
        isOpen={researchOpen}
        onClose={() => setResearchOpen(false)}
      />

      <ArchiveModal
        isOpen={archiveOpen}
        onClose={() => setArchiveOpen(false)}
      />
    </div>
  );
}
