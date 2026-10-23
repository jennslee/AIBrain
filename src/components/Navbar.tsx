import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface NavbarProps {
  onOpenSearch: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Technology', id: 'technology' },
    { label: 'Products', id: 'solutions' },
    { label: 'About Us', id: 'about' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#fbfbfa]/90 backdrop-blur-md border-b border-neutral-200/80 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-sm"
          aria-label="AIBrain Home"
        >
          <Logo variant="dark" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-sm font-medium text-neutral-700 hover:text-neutral-950 transition-colors cursor-pointer py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-200 group-hover:w-full" />
            </button>
          ))}

          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/80 rounded-full transition-colors cursor-pointer"
            aria-label="Search"
            title="Search (Cmd+K)"
          >
            <Search className="w-4 h-4" />
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenSearch}
            className="p-2 text-neutral-600 hover:text-neutral-900 rounded-lg"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-neutral-950 rounded-lg"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbfbfa] border-b border-neutral-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left text-lg font-medium text-neutral-800 hover:text-red-600 transition-colors py-2 flex items-center justify-between border-b border-neutral-100"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full text-center py-3 bg-[#b91c1c] text-white rounded-lg text-sm font-semibold tracking-wide hover:bg-[#991b1b] transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
